# This file is part of the Etsin service
#
# Copyright 2017-2019 Ministry of Education and Culture, Finland
#
# :author: CSC - IT Center for Science Ltd., Espoo Finland <servicedesk@csc.fi>
# :license: MIT

"""Basic tests for checking that metax_api.py works"""
import etsin_finder.qvain_metax_api as api
import unittest
from unittest import TestCase

from mock import Mock, patch
from nose.tools import ok_, eq_


class TestMetaxAPI(TestCase):
    """Test Qvain Metax API functions"""

    def testCreateDatasetSuccess(self):
        """Test that create_dataset returns identifier on successful get request"""
        with patch('requests.post') as mock_post:
            mock_post.return_value = Mock()
            mock_post.return_value.text = '{"identifier": "123"}'
            mock_post.return_value.json.return_value = {'identifier': '123'}
            id = api.create_dataset({})
            ok_(mock_post.called)
            ok_(mock_post.return_value.raise_for_status.called)
            eq_(id, '123')
        pass

    def testReplaceDatasetSuccess(self):
        """Test that update_dataset does a put request and checks for http errors"""
        with patch('requests.put') as mock_put:
            mock_put.return_value = Mock()
            api.update_dataset('123', {})
            ok_(mock_put.called)
            ok_(mock_put.return_value.raise_for_status.called)
        pass

    def testDeleteDatasetSuccess(self):
        """Test that delete_dataset does a delete request and checks for http errors"""
        with patch('requests.delete') as mock_delete:
            mock_delete.return_value = Mock()
            api.delete_dataset('123')
            ok_(mock_delete.called)
            ok_(mock_delete.return_value.raise_for_status.called)
        pass


if __name__ == '__main__':
    unittest.main()
