import React from 'react'
import faceIcon from '../../assets/face-icon.png'
import styles from './CartZero.module.css'
import prev from '../../assets/prev.svg'
import {useNavigate} from 'react-router'

const CartZero = () => {
  const history = useNavigate()
  return (
    <div className={styles.wrapper}>
      <img src={faceIcon} alt="" />
      <h3>Заказов нет :(</h3>
      <div onClick={() => history('/')} className={styles.prev}>
        <img src={prev} alt="" />
        <p>Вернуться назад</p>
      </div>
    </div>
  )
}

export default CartZero
