import React, { Component } from 'react'

export default class Compwillmount extends React.Component {
  constructor(props) {
    super(props)
  }
  //componentWillMount is deprecated
  componentDidMount() {
    // Change code below this line
    console.log('hello')
    // Change code above this line
  }
  render() {
    return <div />
  }
}
