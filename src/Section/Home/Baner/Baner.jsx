import React from 'react'
import './Baner.css'
import Heading from '../../../component/Heading/Heading'
import { NavLink } from 'react-router-dom'

const Baner = () => {
  return (
    <section id='baner'>
        <div className='container'>
            <div className='baner_wrapper'>
                <div className='baner_contant'>
                    <Heading taxt ="WELCOME!" style="one"/>
                    <Heading taxt ="The Best Hair Saloon" style="two"/>
                    <p className='b_pera'>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
                    <div className='baner_btn'>
                        <NavLink to ="banerbtn">Make Appointment</NavLink>
                    </div>
                </div>
                <div className='baner_image'>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Baner