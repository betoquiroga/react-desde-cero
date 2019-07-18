import React, { Component } from "react"
import { observer, inject } from "mobx-react"

@inject("CartStore")
@observer
class CartCounter extends Component {
  render() {
    return (
      <span>
        Carrito: { this.props.CartStore.cart.length }
      </span>
    )
  }
} 

export default CartCounter