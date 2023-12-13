import React from 'react'
import './Home.css'
import Baner from './Baner/Baner'
import Services from './Services/Services'
import Ourservice from './Ourservice/Ourservice'
import Choose from './Choose/Choose'

const Home = () => {
  return (
    <>
      <Baner/>
      <Services/>
      <Ourservice/>
      <Choose/>
    </>
     
  )
}

export default Home