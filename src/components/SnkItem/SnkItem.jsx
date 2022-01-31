import { observer } from 'mobx-react-lite';
import React from 'react'
import styles from './SnkItem.module.css'
import plusIcon from '../../assets/plus-icon.svg'
import addCart from '../../assets/add-cart.svg'
import addedCart from '../../assets/cart-plus-icon.svg'
import cart from '../../store/cart';

const SnkItem = observer((props) => {



  const {sneaker} = props


  const addToCart = (snk) => {
    cart.addToCart(snk)
  }

  const classCart = cart.cartArr.find(item => item.id === sneaker.id) ? 'btn' : 'btn_btn'
  const srcCart = cart.cartArr.find(item => item.id === sneaker.id) ? addedCart : addCart






  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={sneaker.imageUrl} alt="" />
      <h3>{sneaker.name}</h3>
      <div className={styles.flex}>
        <p>Ценa:  <span>{sneaker.retailPrice} USD</span></p>
         <button className={classCart} onClick={() => addToCart(sneaker)}><img src={srcCart} alt="" /></button>
      </div>
      </div>
    </li>
  )
})

export default SnkItem
