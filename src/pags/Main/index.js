import React from 'react'
import Styles from './style.module.css'
import Butten from '../../components/Butten'
import img1 from '../../Images/img1.jpeg'
import { Link } from 'react-router-dom'


function Main() {
  return (
    <div className={Styles.main}>
      <img className={Styles.img1} src={img1} alt="" />
      <div className={Styles.butten}>
        <Link to={'/practic'}><Butten data={"תרגולים"} /></Link>
        <Link to={'/theory'}><Butten data={"תאוריה"} /></Link>
        <Link to={'/weekly'}><Butten data={"אימון שבועי"} /></Link>
        <Link to={'/personal'}><Butten data={"השגים אישיים"} /></Link>
        <Link to={'/learn'}><Butten data={"חומרי למידה למורים"} /></Link>
      </div>
    </div>
  )
}

export default Main
