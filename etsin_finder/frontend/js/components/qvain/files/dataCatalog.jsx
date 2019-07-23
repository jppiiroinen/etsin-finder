import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import Translate from 'react-translate-component'

import Card from '../general/card'
import { dataCatalogSchema } from '../utils/formValidation'
import ValidationError from '../general/validationError'
import { DataCatalogIdentifiers } from '../utils/constants'

const options = [
  { value: DataCatalogIdentifiers.IDA, label: 'IDA' },
  { value: DataCatalogIdentifiers.ATT, label: 'ATT' }
]

class DataCatalog extends Component {
  static propTypes = {
    Stores: PropTypes.object.isRequired,
  }

  state = {
    errorMessage: undefined,
  }


  handleOnBlur = () => {
    const dataCatalog = this.props.Stores.Qvain.dataCatalog
    dataCatalogSchema
      .validate(dataCatalog)
      .then(() => {
        this.setState({
          errorMessage: undefined,
        })
      })
      .catch(err => {
        this.setState({
          errorMessage: err.errors,
        })
      })
  }

  render() {
    const { errorMessage } = this.state
    const { dataCatalog, setDataCatalog, selectedFiles, selectedDirectories, externalResources } = this.props.Stores.Qvain
    const selected = [...selectedFiles, ...selectedDirectories, ...externalResources]
    return (
      <Card>
        <Translate component="h3" content="qvain.files.dataCatalog.label" />
        <Translate component="p" content="qvain.files.dataCatalog.explanation" />
        <Translate
          component={Select}
          name="dataCatalog"
          value={options.find(opt => opt.value === dataCatalog)}
          options={options}
          onChange={(selection) => {
            setDataCatalog(selection.value)
            this.setState({ errorMessage: undefined })
          }}
          onBlur={this.handleOnBlur}
          attributes={{ placeholder: 'qvain.files.dataCatalog.placeholder' }}
          isDisabled={selected.length > 0}
        />
        {errorMessage && <ValidationError>{errorMessage}</ValidationError>}
      </Card>
    )
  }
}

export default inject('Stores')(observer(DataCatalog))