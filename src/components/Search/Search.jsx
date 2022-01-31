import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import filterBrend from '../../store/filter'
import BrendsPopup from '../BrendsPoup/BrendsPopup'
import styles from './Search.module.css'

const Search = observer(() => {

  const [query, setQuery] = useState('')

    filterBrend.onChangeQuery(query)



  return (
      <div className={styles.wrapper}>
      <BrendsPopup />
      <input onChange={(e) => setQuery(e.target.value)} className={styles.input} type="text" placeholder='Search' />
    </div>
  )
})

export default Search
