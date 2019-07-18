import { observable, action } from "mobx"

class CartStore {
  @observable cart = []

  @action
  addToCart = id => {
    this.cart = this.cart.concat(id)
  }

  @action
  removeFromCart = id => {
    this.cart = this.cart.filter(c => c !== id)
  }
}

export default new CartStore()