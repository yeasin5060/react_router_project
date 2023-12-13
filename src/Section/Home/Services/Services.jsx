import React from 'react'
import './Services.css'
import Subheading from '../../../component/subheading/Subheading'
import Pera from '../../../component/paragraph/Pera'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <section id='services'>
        <div className='container'>
            <div className='services_wrapper'>
                <div className='service_images'>
                    <div className='services_mini_images'>
                        <div className='mini_images_box'></div>
                        <div className='mini_images_box'></div>
                        <div className='mini_images_box'></div>
                    </div>
                    <div className='services_big_images'>

                    </div>
                </div>
                <div className='services_contant'>
                    <Subheading taxt="We're Here To Service Your Hair Care Needs" style="services_head"/>
                    <Pera taxt="House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen." style="services_pera"/>
                    <div className='services_btn'>
                        <NavLink to ="servicesbtn">Learn More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services