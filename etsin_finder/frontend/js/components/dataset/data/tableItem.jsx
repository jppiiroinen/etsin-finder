{
  /**
   * This file is part of the Etsin service
   *
   * Copyright 2017-2018 Ministry of Education and Culture, Finland
   *
   *
   * @author    CSC - IT Center for Science Ltd., Espoo Finland <servicedesk@csc.fi>
   * @license   MIT
   */
}

import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import Translate from 'react-translate-component'
import translate from 'counterpart'
import PropTypes from 'prop-types'

import checkDataLang from '../../../utils/checkDataLang'
import sizeParse from '../../../utils/sizeParse'
import checkNested from '../../../utils/checkNested'
import FileIcon from './fileIcon'
import Info from './info'
import { InvertedButton, TransparentButton } from '../../general/button'
import Loader from '../../general/loader'
import {
  TypeConcept,
  TypeTableDirectory,
  TypeTableFile,
  TypeTableRemote,
} from '../../../utils/propTypes'

class TableItem extends Component {
  constructor(props) {
    super(props)

    let checksum
    if (props.item.remote) {
      checksum = props.item.remote.checksum
    } else if (props.item.file) {
      checksum = props.item.file.checksum
    }

    this.state = {
      modalIsOpen: false,
      name: props.item.name,
      checksum,
      loader: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  changeFolder(name, id) {
    this.setState(
      {
        loader: true,
      },
      () => this.props.changeFolder(name, id)
    )
  }

  render() {
    return (
      <TableRow key={`filelist-${this.props.index}`}>
        <FileType>
          {this.state.loader ? (
            <Loader active size="2em" />
          ) : (
            <React.Fragment>
              {this.props.item.directory ? (
                <TransparentButton
                  noPadding
                  noMargin
                  tabIndex="-1"
                  color={this.props.theme.color.primary}
                  onClick={() => this.changeFolder(this.state.name, this.props.item.identifier)}
                  title={translate('dataset.dl.file_types.directory')}
                >
                  <FileIcon type={this.props.item.type} />
                </TransparentButton>
              ) : (
                <FileIcon
                  type={this.props.item.type}
                  title={this.props.item.type}
                  default={this.props.item.remote ? 'cloud' : 'file'}
                />
              )}
            </React.Fragment>
          )}
        </FileType>
        {this.props.fields.name && this.props.item.directory ? (
          <FileName>
            <TransparentButton
              noPadding
              noMargin
              color={this.props.theme.color.primary}
              onClick={() => this.changeFolder(this.props.item.name, this.props.item.identifier)}
            >
              <Translate className="sr-only" content="dataset.dl.file_types.directory" />
              <p>{this.props.item.name}</p>
            </TransparentButton>
            <TitleAlt>
              <Translate
                content="dataset.dl.fileAmount"
                with={{ amount: this.props.item.directory.file_count }}
              />
            </TitleAlt>
          </FileName>
        ) : (
          <FileName>
            <p>{this.props.item.name}</p>
          </FileName>
        )}
        {this.props.fields.size && <FileSize>{sizeParse(this.props.item.byte_size, 1)}</FileSize>}
        {this.props.fields.category && (
          <FileCategory>
            {checkNested(this.props.item.use_category, 'pref_label')
              ? checkDataLang(this.props.item.use_category.pref_label)
              : ''}
          </FileCategory>
        )}
        <FileButtons>
          {this.props.fields.infoBtn && (
            <React.Fragment>
              <InvertedButton
                thin
                color={this.props.theme.color.gray}
                disabled={!this.props.allowInfo}
                onClick={this.openModal}
              >
                <Translate content="dataset.dl.info" />
                <Translate
                  className="sr-only"
                  content="dataset.dl.info_about"
                  with={{ file: this.props.item.name }}
                />
              </InvertedButton>
              <Info
                title={this.props.item.title}
                name={this.props.item.name}
                id={this.props.item.identifier}
                size={sizeParse(this.props.item.byte_size, 1)}
                category={
                  checkNested(this.props.item.use_category, 'pref_label')
                    ? checkDataLang(this.props.item.use_category.pref_label)
                    : undefined
                }
                checksum={this.state.checksum}
                downloadUrl={
                  this.props.item.remote ? this.props.item.remote.download_url : undefined
                }
                allowDownload={this.props.allowDownload}
                description={this.props.item.description}
                type={this.props.item.type}
                open={this.state.modalIsOpen}
                closeModal={this.closeModal}
              />
            </React.Fragment>
          )}
          {this.props.fields.downloadBtn && (
            // TODO: add download functionality, probably an axios post request,
            // but it will also be used in the info modal, so a utility for both.
            // TODO: change to button because disabled won't work in link
            <HideSmButton
              thin
              onClick={() => this.props.download(this.props.item.identifier, this.props.item.type)}
              disabled={!this.props.allowDownload}
            >
              <Translate content="dataset.dl.download" />
              <Translate
                className="sr-only"
                content="dataset.dl.item"
                with={{ item: this.props.item.name }}
              />
            </HideSmButton>
          )}
        </FileButtons>
      </TableRow>
    )
  }
}

const TitleAlt = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  color: #777;
`

const HideSmButton = styled(InvertedButton)`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: initial;
  }
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${p => p.theme.color.superlightgray};
  }
  td {
    padding: 12px;
    vertical-align: middle;
    border: none;
    &:first-of-type {
      padding: 12px;
      white-space: nowrap;
      width: 1%;
      text-align: center;
    }
    p {
      size: 0.8em;
      margin: 0;
    }
  }
`

const FileType = styled.td``

const FileName = styled.td``

const FileSize = styled.td``

const FileCategory = styled.td`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    display: table-cell;
  }
`

const FileButtons = styled.td`
  text-align: center;
  display: table-cell;
  flex-wrap: wrap;
  width: 1%;
  white-space: nowrap;
`

TableItem.defaultProps = {
  changeFolder: () => {},
  download: () => {},
}

TableItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string,
    title: PropTypes.string,
    byte_size: PropTypes.number,
    use_category: TypeConcept,
    description: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.string, TypeConcept]),
    remote: TypeTableRemote,
    file: TypeTableFile,
    directory: TypeTableDirectory,
  }).isRequired,
  index: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    color: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      gray: PropTypes.string.isRequired,
    }),
  }).isRequired,
  fields: PropTypes.shape({
    size: PropTypes.bool.isRequired,
    name: PropTypes.bool.isRequired,
    category: PropTypes.bool.isRequired,
    downloadBtn: PropTypes.bool.isRequired,
    infoBtn: PropTypes.bool.isRequired,
  }).isRequired,
  changeFolder: PropTypes.func,
  allowDownload: PropTypes.bool.isRequired,
  allowInfo: PropTypes.bool.isRequired,
  download: PropTypes.func,
}

export default withTheme(TableItem)
