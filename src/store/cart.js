import { makeAutoObservable } from "mobx";

 class Cart {
    cartArr = [];

    constructor() {
      makeAutoObservable(this)
    }

    addToCart(snk) {
      this.cartArr.push(snk)
    }
    removeCart(id) {
      this.cartArr = this.cartArr.filter(item => item.id !== id)
    }
    cartTotalUSD() {
      const total = this.cartArr.reduce(function(acc, item){
       return  acc + item.retailPrice}, 0)
      return total
    }
 }

 const cart = new Cart()
 export default cart