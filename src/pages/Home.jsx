import React from 'react'
import Search from '../components/Search/Search'
import SnkList from '../components/SnkList/SnkList'

const Home = () => {
  return (
    <div className='container'>
      <Search />
      <SnkList />
    </div>
  )
}

export default Home
