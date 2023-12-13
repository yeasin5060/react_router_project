import React, { useState } from 'react'
import './Aboutus.css'
import Heading from '../../../component/Heading/Heading'
import Pera from '../../../component/paragraph/Pera'

const Aboutus = () => {
  
    let FormInput = document.querySelector(".form_input");
    let FormErr = document.querySelector(".form_err")
    let Submits = () => {
      (FormInput = " ")?
        FormErr.innerHTML = "Please complete all required fields."
      
      :(
        FormErr.innerHTML = " "
      )
    }
   
  
  return (
   <div id='about_us'>
    <div className='container'>
      <div className='about_us_contant'>
        <h4 className='exceed'>EXCEED YOUR POTENTIAL</h4>
        <div className='contant_wrapper'>
          <div className='about_heading_contant'>
            <Heading taxt="About Fork Union Military Academy" style="about_heading"/>
            <Pera taxt="Fork Union Military Academy is one of the leading college preparatory boarding schools in the US based on the structure and discipline of a military academy system. We offer in-person education for boys in grades 7-12th and postgraduates in the wonderful village of Fork Union—in the heart of central Virginia.
            We offer high-quality academics and athletics built on a foundation of traditional core values that helps build character development, self-discipline, responsibility, and leadership development skills." style="about_pera"/>
          </div>
          <div className='about_from'>
            <h4 className='form_head'>Please send me more info...</h4>
            <Pera taxt="Please email me more information about Fork Union Military Academy." style="form_pera"/>
            <Pera taxt="email" style="form_email"/>
            <input type='email'className='form_input' placeholder='inter yuor email'/>
            <Pera taxt ="I'd like to speak by phone with an admissions representative." style="form_pera"/>
            <p className='form_err'></p>
            <button onClick={Submits} type='submit' className='submit'>submit</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Aboutus