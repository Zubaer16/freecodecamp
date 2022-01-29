import React, { Component } from 'react'

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

// Change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired,
// }

// Change code above this line

Items.defaultProps = {
  quantity: 0,
}

class ShoppingCar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Items />
  }
}
export default ShoppingCar
