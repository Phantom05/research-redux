import React, { Component } from 'react'

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount () {
    console.log('props in component', this.props)
  }
  changeName ({target: {value}}) {
    this.props.changeStateProps('name', value)
  }
  render () {
    console.log(this.props.countAll);
    return (
      <div>
        <input type='text' value={this.props.count} onChange={this.changeName} />
        <button onClick={() =>this.props.incrementCount()}>+</button>
        {this.props.count}
        <button onClick={() => this.props.decrementCount()}>-</button>
        <button onClick={()=>this.props.logout()}>logout</button>
      </div>
    )
  }
}
