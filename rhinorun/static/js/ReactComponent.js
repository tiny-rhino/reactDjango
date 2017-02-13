import React, { Component } from 'react'

export default class ReactTest extends Component {
    render() {
		const { rendered } = this.props
		return <span>This is rendered by the {rendered}</span> 
    }
}
