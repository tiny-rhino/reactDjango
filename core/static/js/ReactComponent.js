import React, { Component } from 'react'

export default class ReactComponent extends Component {
    render() {
      const { rendered } = this.props
      return <span>This is rendered by the {rendered}</span> 
  }
}
