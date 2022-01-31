import React, { useState } from 'react'
import { brends } from './constants'
import styles from './BrendsPopup.module.css'
import filterBrend from '../../store/filter';
import { observer } from 'mobx-react-lite';

const BrendsPopup = observer(() => {

  const [visiblePopup, setVisiblePopup] = useState(false);

  const selectVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }



  return (

      <div className={styles.wrapper}>
      <div onClick={selectVisiblePopup}>
      <span className={styles.span}>Sort: </span>
      <span className={styles.span_name}>{filterBrend.activeBrendName}</span>
        {visiblePopup && (
          <ul className={styles.list}>
          {
            brends.map(brend => (
              <li onClick={() => filterBrend.selectActiveBredn(brend.name, brend.type)} className={styles.item} key={`${brend.name}_${brend.type}`}>{brend.name}</li>
            ))
          }
          </ul>
      )}
      </div>
    </div>
  )
})

export default BrendsPopup
