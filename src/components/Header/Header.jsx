import React from 'react'
import logo from '../../assets/logo-icon.svg'
import cartIcon from '../../assets/cart-icon.svg'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cart from '../../store/cart'

const Header = observer(() => {



  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
        <Link to='/' className={styles.logo_wrapper}>
          <img src={logo} alt="" />
          <div className={styles.logo_text_wrapper}>
            <h4 className={styles.logo_title}>REACT SNEAKERS</h4>
            <p className={styles.logo_text}>Магазин лучших кроссовок</p>
          </div>
        </Link>


      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.cart_link} to='/cart'>
              <img src={cartIcon} alt="" />
              <p className={styles.item_text}>{cart.cartTotalUSD()} USD</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
      </div>



    </header>
    )
  })

  export default Header
