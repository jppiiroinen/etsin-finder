import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import styled from 'styled-components'
import Translate from 'react-translate-component'

import Button from '../../general/button';
import Card from '../general/card';

class OtherIdentifierField extends React.Component {
  static propTypes = {
    Stores: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { identifier: '' }
  }

  handleInputChange = (event) => {
    this.setState({
      identifier: event.target.value
    })
  }

  clearInput = () => {
    this.setState({
      identifier: ''
    })
  }

  handleAdd = (event) => {
    event.preventDefault()
    this.props.Stores.Qvain.addOtherIdentifier(this.state.identifier)
    this.clearInput()
  }

  render() {
    const otherIdentifiers = toJS(this.props.Stores.Qvain.otherIdentifiers)
    return (
      <Card>
        <Translate component="h3" content="qvain.description.otherIdentifiers.title" />
        <Translate component="p" content="qvain.description.otherIdentifiers.instructions" />
        { otherIdentifiers.length > 0 && (
          <ul>
            {otherIdentifiers.map(identifier => <li key={identifier}>{identifier}</li>)}
          </ul>
        )}
        <Input
          type="text"
          value={this.state.identifier}
          onChange={this.handleInputChange}
          placeholder="http://orcid.org/"
        />
        <AddNewButton onClick={this.handleAdd}>
          <Translate content="qvain.description.otherIdentifiers.addButton" />
        </AddNewButton>
      </Card>
    )
  }
}

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #cccccc;
  padding: 8px;
  color: #808080;
`
const AddNewButton = styled(Button)`
  float: right;
  margin: 0;
  margin-top: 11px;
`

export default inject('Stores')(observer(OtherIdentifierField));
