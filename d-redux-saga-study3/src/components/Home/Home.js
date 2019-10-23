import React, { Component } from 'react';

class Home extends Component {
  state={
    input:''
  }
  handleChange=(e)=>{
    e.preventDefault()
    const {value} = e.target;
    this.setState({
      input:value
    });
  }
  handleSubmit =(e)=>{
    const {sagaSubmit} = this.props;
    sagaSubmit(this.state.input);
    this.setState({
      input:''
    })
  }
  render() {
    const {data,onClick,sagaSubmit} = this.props;
    const {input} = this.state;
    return (
      <div>
        <button onClick={onClick}>GET USER SAGA</button> <br/>
        <input type="text" onChange={this.handleChange} value={input}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <div>{data}</div>
      </div>
    );
  }
}

export default Home;