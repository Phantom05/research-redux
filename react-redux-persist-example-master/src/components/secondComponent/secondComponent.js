import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount () {
    console.log('props in component', this.props)
  }
  render () {
    return (
      <div>
        {this.props.someUserName}
      </div>
    )
  }
}
