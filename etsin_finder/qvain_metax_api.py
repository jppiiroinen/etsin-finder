# This file is part of the Etsin service
#
# Copyright 2017-2019 Ministry of Education and Culture, Finland
#
# :author: CSC - IT Center for Science Ltd., Espoo Finland <servicedesk@csc.fi>
# :license: MIT

"""Used to perform Metax operations related to Qvain"""

#import requests
from etsin_finder.finder import app
#from etsin_finder.app_config import get_metax_api_config
from etsin_finder.utils import FlaskService

class QvainMetaxAPIService(FlaskService):
    """Metax API service for Qvain related actions"""

    def __init__(self, app):
        """
        Init Metax API service

        :param metax_api_config:
        """
        pass

_qvain_metax_api = QvainMetaxAPIService(app)

def create_dataset(cr):
    """
    Add catalog record to Metax

    :param cr:
    """
    pass

def update_dataset(cr_identifier, cr):
    """
    Update catalog record in Metax

    :param cr_identifier:
    :param cr:
    """
    pass

def delete_dataset(cr_identifier):
    """
    Delete catalog record from Metax

    :param cr_identifier:
    """
    pass
