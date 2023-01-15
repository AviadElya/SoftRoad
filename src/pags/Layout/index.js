import React from 'react'
import Styles from './style.module.css'
import Main from '../Main'
import Header from '../Header/index'

function Layout() {
  return (
    <div className={Styles.layout}>
      <Header/>
      <Main/>
    </div>
  )
}

export default Layout
