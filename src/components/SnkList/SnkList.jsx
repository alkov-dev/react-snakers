import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import cart from '../../store/cart';
import fetchSnk from '../../store/fetchSnk'
import filterBrend from '../../store/filter'
import SnkItem from '../SnkItem/SnkItem';
import styles from './SnkList.module.css'

const SnkList = observer(() => {

  const {activeBrendType, query} = filterBrend
  const allSnk = fetchSnk.sneakers


  useEffect( () => {
    fetchSnk.fetchSneakers(activeBrendType, query)
  }, [activeBrendType, query])








  return (
    <ul className={styles.list}>
      {allSnk.map(item => <SnkItem sneaker={item} />)}
    </ul>
  )
})

export default SnkList
