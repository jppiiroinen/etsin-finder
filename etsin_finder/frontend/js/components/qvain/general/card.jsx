import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// eslint-disable-next-line
const Card = ({ children, bottomContent }) => <Container bottomContent={bottomContent}>{children}</Container>

const Container = styled.div`
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 25px;
  padding-bottom: ${props => (props.bottomContent ? '31px' : '56px')};
  margin-top: 20px;
  border: 1px solid #eceeef;
  min-height: 150px;
  background-color: #fff;
  overflow: visible;
`

Card.prototype = {
  children: PropTypes.element.isRequired
}

export default Card;
