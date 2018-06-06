import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class PopUp extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    popUp: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
    }

    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.popRef = React.createRef()
    this.timeoutID = undefined
  }

  componentDidUpdate() {
    // This fixes issues with opening and closing
    // when there are multiple popups
    if (this.props.isOpen === true) {
      setTimeout(() => {
        if (this.popRef.current) {
          this.popRef.current.focus()
        }
      }, 50)
    }
  }

  onBlur() {
    this.timeoutID = setTimeout(() => {
      if (this.state.isFocused) {
        this.setState(
          {
            isFocused: false,
          },
          () => {
            this.props.onRequestClose()
          }
        )
      }
    }, 0)
  }

  onFocus() {
    clearTimeout(this.timeoutID)
    if (!this.state.isFocused) {
      this.setState({
        isFocused: true,
      })
    }
  }

  render() {
    return (
      <Relative>
        {this.props.isOpen && (
          <React.Fragment>
            <Pop
              innerRef={this.popRef}
              tabIndex="-1"
              autofocus
              onBlur={this.onBlur}
              onFocus={this.onFocus}
            >
              {this.props.popUp}
            </Pop>
            <Svg width="40px" height="20px" viewBox="0 0 20 20">
              <defs>
                <filter id="dropshadow" height="200%" width="200%">
                  <feOffset dx="0" dy="3" result="offsetblur" />
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.6" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon
                fill="white"
                points="0,0 10,10 20,0"
                style={{ filter: 'url(#dropshadow)' }}
              />
            </Svg>
          </React.Fragment>
        )}
        {this.props.children}
      </Relative>
    )
  }
}

const Relative = styled.span`
  position: initial;
  display: inline-flex;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    position: relative;
  }
`

const Pop = styled.div`
  position: absolute;
  left: 15px;
  background-color: white;
  max-width: calc(100vw - 30px);
  padding: 1em 1.7em;
  margin: 0 auto;
  transform: translateY(calc(-100% - 10px));
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    top: 0;
    left: 0;
    position: absolute;
    width: max-content;
  }
`

const Svg = styled.svg`
  position: absolute;
  top: initial;
  margin-top: -10px;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: 0;
    top: -10px;
  }
`
