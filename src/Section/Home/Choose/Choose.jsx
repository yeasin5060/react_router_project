import React from 'react'
import Heading from '../../../component/Heading/Heading'
import './Choose.css'
import Miniheading from '../../../component/Miniheading/Miniheading'
import Pera from '../../../component/paragraph/Pera'

const Choose = () => {
  return (
    <section id='choose'>
        <div className='container'>
            <div className='choose_wrapper'>
                <div className='choose_contant'>
                    <Heading taxt="Why Choose Us" style="choose_head"/>
                    <div className='choose_product_wrapper'>
                      <div className='product_wrapper'>
                        <div className='product_logo'>
                        
                        </div>
                        <div className='product_contant'>
                          <Miniheading taxt="ONLY NATURAL PRODUCTS" style="choose_minihead"/>
                          <Pera taxt="We know-how, and ready to create your best look with natural products." style="choose_pera"/>
                        </div>
                      </div>
                      <div className='product_wrapper'>
                        <div className='product_logo'>
                        
                        </div>
                        <div className='product_contant'>
                          <Miniheading taxt="PROFESSIONAL STYLISTS" style="choose_minihead"/>
                          <Pera taxt="We know-how, and ready to create your best look with natural products." style="choose_pera"/>
                        </div>
                      </div>
                      <div className='product_wrapper'>
                        <div className='product_logo'>
                        
                        </div>
                        <div className='product_contant'>
                          <Miniheading taxt="wE LOVE YOUR HAIR" style="choose_minihead"/>
                          <Pera taxt="We know-how, and ready to create your best look with natural products." style="choose_pera"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='choose_image'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose