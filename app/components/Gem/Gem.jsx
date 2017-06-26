import React, { Component } from 'react'

export default class Gem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {
      zone,
      onClick
    } = this.props
    onClick(zone)
  }

  render () {
    const {
      d,
      name,
      fill
    } = this.props

    return (
      <path
        d={d}
        fill={fill}
        stroke={'#fff'}
        strokeWidth={1}
        onClick={this.handleClick}
      >
        <title>
          {name}
        </title>
      </path>
    )
  }
}
