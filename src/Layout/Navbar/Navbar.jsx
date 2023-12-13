import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className='container'>
          <div className='nav_wrapper'>
            <div className='image_logo'>
             <img src="images/innovate_logo.png" alt="not found"/>
            </div>
            <div className='menu'>
              <ul>
                <li>
                  <NavLink to ="/">home</NavLink>
                </li>
                <li>
                  <NavLink to ="about">about</NavLink>
                </li>
                <li>
                  <NavLink to ="service">service</NavLink>
                </li>
                <li>
                  <NavLink to ="portfolio">portfolio</NavLink>
                </li>
                <li>
                  <NavLink to ="price">price</NavLink>
                </li>
                <li>
                  <NavLink to ="blog">blog</NavLink>
                </li>
              </ul>
            </div>
            <div className='nav_btn'>
              <NavLink to ="contact">contact us</NavLink>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar