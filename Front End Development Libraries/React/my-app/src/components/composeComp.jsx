import React, { Component } from 'react'

const NonCitrus = () => {
  return <h1>hi</h1>
}
const Citrus = () => {
  return <h2>hui</h2>
}
const Vegetables = () => {
  return <h2>veg</h2>
}
class Fruits extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* Change code above this line */}
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
        <Vegetables />
      </div>
    )
  }
}

export default TypesOfFood
