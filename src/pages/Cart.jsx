import { observer } from 'mobx-react-lite'
import React from 'react'
import CartZero from '../components/CartZero/CartZero'
import cart from '../store/cart'
import styles from './Cart.module.css'
import removeCart from '../assets/remove-icon.svg'
import prev from '../assets/prev-icon.svg'
import {useNavigate} from 'react-router'

const Cart = observer(() => {

  const history = useNavigate()

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        { cart.cartArr.length ?
        (
          <div>
            <img onClick={() => history('/')} className={styles.img_prev} src={prev} alt="" />
          <ul className={styles.list}>
            {cart.cartArr.map(sneaker => (
        <li className={styles.item}>
      <div className={styles.wrapper_item}>
        <img className={styles.img} src={sneaker.imageUrl} alt="" />
      <h3>{sneaker.name}</h3>
      <div className={styles.flex}>
        <p>Ценa:  <span>{sneaker.retailPrice} USD</span></p>
         <button className={styles.btn} onClick={() => cart.removeCart(sneaker.id)}><img src={removeCart} alt="" /></button>
      </div>
      </div>
    </li>
      ))}
          </ul>
          </div>
        ) : <CartZero />
      }
      </div>
    </div>
  )
})

export default Cart
