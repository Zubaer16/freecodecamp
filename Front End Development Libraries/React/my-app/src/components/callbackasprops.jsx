import React, { Component } from 'react'

export default class Proper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <GetInput
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput inputValue={this.state.inputValue} />
        {/* Change code above this line */}
      </div>
    )
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    )
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.inputValue}</p>
      </div>
    )
  }
}
