# This file is part of the Etsin service
#
# Copyright 2017-2018 Ministry of Education and Culture, Finland
#
# :author: CSC - IT Center for Science Ltd., Espoo Finland <servicedesk@csc.fi>
# :license: MIT

import requests

from etsin_finder.finder import app, cr_cache
from etsin_finder.app_config import get_metax_api_config
from etsin_finder.utils import json_or_empty

log = app.logger


class MetaxAPIService:

    def __init__(self, metax_api_config):
        if metax_api_config:
            METAX_GET_CATALOG_RECORD_URL = 'https://{0}/rest/datasets'.format(metax_api_config['HOST']) + \
                                           '/{0}?expand_relation=data_catalog'

            self.METAX_GET_CATALOG_RECORD_WITH_FILE_DETAILS_URL = METAX_GET_CATALOG_RECORD_URL + '&file_details'
            self.METAX_GET_REMOVED_CATALOG_RECORD_URL = METAX_GET_CATALOG_RECORD_URL + '&removed=true'
            self.METAX_GET_DIRECTORY_FOR_CR_URL = 'https://{0}/rest/directories'.format(metax_api_config['HOST']) + \
                                                  '/{0}/files?cr_identifier={1}'

            self.user = metax_api_config['USER']
            self.pw = metax_api_config['PASSWORD']
            self.verify_ssl = metax_api_config.get('VERIFY_SSL', True)
        else:
            log.error("Unable to initialize MetaxAPIService due to missing config")

    def get_directory_for_catalog_record(self, cr_identifier, dir_identifier, file_fields, directory_fields):
        """
        Get directory contents for a specific catalog record

        :param cr_identifier:
        :param dir_identifier:
        :param file_fields:
        :param directory_fields:
        :return:
        """

        req_url = self.METAX_GET_DIRECTORY_FOR_CR_URL.format(dir_identifier, cr_identifier)
        if file_fields:
            req_url = req_url + '&file_fields={0}'.format(file_fields)
        if directory_fields:
            req_url = req_url + '&directory_fields={0}'.format(directory_fields)

        try:
            metax_api_response = requests.get(req_url,
                                              headers={'Accept': 'application/json'},
                                              auth=(self.user, self.pw),
                                              verify=self.verify_ssl,
                                              timeout=10)
            metax_api_response.raise_for_status()
        except Exception as e:
            if isinstance(e, requests.HTTPError):
                log.debug("Failed to get data for directory {0} in catalog record {1} from Metax API".
                          format(dir_identifier, cr_identifier))
                log.debug('Response status code: {0}'.format(metax_api_response.status_code))
                log.debug('Response text: {0}'.format(json_or_empty(metax_api_response) or metax_api_response.text))
            else:
                log.error("Failed to get data for directory {0} in catalog record {1} from Metax API".
                          format(dir_identifier, cr_identifier))
                log.error(e)
            return None

        return metax_api_response.json()

    def get_catalog_record_with_file_details(self, identifier):
        """ Get a catalog record with a given identifier from MetaX API.

        :return: Metax catalog record as json
        """
        try:
            metax_api_response = requests.get(self.METAX_GET_CATALOG_RECORD_WITH_FILE_DETAILS_URL.format(identifier),
                                              headers={'Accept': 'application/json'},
                                              auth=(self.user, self.pw),
                                              verify=self.verify_ssl,
                                              timeout=3)
            metax_api_response.raise_for_status()
        except Exception as e:
            if isinstance(e, requests.HTTPError):
                log.debug("Failed to get catalog record {0} from Metax API".format(identifier))
                log.debug('Response status code: {0}'.format(metax_api_response.status_code))
                log.debug('Response text: {0}'.format(json_or_empty(metax_api_response) or metax_api_response.text))
            else:
                log.error("Failed to get catalog record {0} from Metax API".format(identifier))
                log.error(e)
            return None
        return metax_api_response.json()

    def get_removed_catalog_record(self, identifier):
        """ Get a catalog record with a given identifier from a MetaX API which should return only datasets that
            are removed.

        :return: Metax catalog record as json
        """
        try:
            metax_api_response = requests.get(self.METAX_GET_REMOVED_CATALOG_RECORD_URL.format(identifier),
                                              headers={'Accept': 'application/json'},
                                              auth=(self.user, self.pw),
                                              verify=self.verify_ssl,
                                              timeout=3)
            metax_api_response.raise_for_status()
        except Exception as e:
            if isinstance(e, requests.HTTPError):
                log.debug("Failed to get removed catalog record {0} from Metax API".format(identifier))
                log.debug('Response status code: {0}'.format(metax_api_response.status_code))
                log.debug('Response text: {0}'.format(json_or_empty(metax_api_response) or metax_api_response.text))
            else:
                log.error("Failed to get removed catalog record {0} from Metax API".format(identifier))
                log.error(e)
            return None

        return metax_api_response.json()


_metax_api = MetaxAPIService(get_metax_api_config())


def get_catalog_record(cr_id, check_removed_if_not_exist, refresh_cache=False):
    if refresh_cache:
        return cr_cache.update_cache(cr_id, _get_cr_from_metax(cr_id, check_removed_if_not_exist))

    cr = cr_cache.get_from_cache(cr_id)
    if cr is None:
        cr = _get_cr_from_metax(cr_id, check_removed_if_not_exist)
        return cr_cache.update_cache(cr_id, cr)
    else:
        return cr


def get_directory_data_for_catalog_record(cr_id, dir_id, file_fields, directory_fields):
    return _metax_api.get_directory_for_catalog_record(cr_id, dir_id, file_fields, directory_fields)


def get_catalog_record_access_type(cr):
    return cr.get('research_dataset', {}).get('access_rights', {}).get('access_type', {}).get('identifier', '')


def get_catalog_record_embargo_available(cr):
    return cr.get('research_dataset', {}).get('access_rights', {}).get('available', '')


def get_catalog_record_data_catalog_id(cr):
    return cr.get('data_catalog', {}).get('catalog_json', {}).get('identifier', '')


def get_catalog_record_preferred_identifier(cr):
    return cr.get('research_dataset', {}).get('preferred_identifier', '')


def is_rems_catalog_record(catalog_record):
    from etsin_finder.authorization import ACCESS_TYPES
    if get_catalog_record_access_type(catalog_record) == ACCESS_TYPES['permit']:
        return True
    return False


def _get_cr_from_metax(cr_id, check_removed_if_not_exist):
    cr = _metax_api.get_catalog_record_with_file_details(cr_id)
    if not cr and check_removed_if_not_exist:
        cr = _metax_api.get_removed_catalog_record(cr_id)
    return cr
