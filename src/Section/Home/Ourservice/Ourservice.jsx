import React from 'react'
import Subheading from '../../../component/subheading/Subheading'
import './Ourservice.css'
import Pera from '../../../component/paragraph/Pera'

const Ourservice = () => {
  return (
    <section id='our_service'>
        <div className='container'>
            <div className='our_service_contant'>
                <Subheading taxt="Our Services" style="our_services_head"/>
                <Pera taxt="Whether you are looking for a quick beach side gateway or a pampering day for yourself, we have hair treatments to meet your needs. All of our services are specially designed for restorative, recovery and relaxation." style="our_service_pera"/>
            </div>
            <div className='hair_cut'>
                <div className='hair_cut_box'>
                    <div className='hari_cut_contant'>
                        <h3 className='hair_cut_head'>HAIR Cut</h3>
                        <p className='hair_cut_pera'>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.</p>
                    </div>
                    <div className='hair_cut_price'>
                        <span>$20</span>
                    </div>
                </div>
                <div className='hair_cut_box'>
                    <div className='hari_cut_contant'>
                        <h3 className='hair_cut_head'>HAIR EXTENTSIONS</h3>
                        <p className='hair_cut_pera'>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.</p>
                    </div>
                    <div className='hair_cut_price'>
                        <span>$220</span>
                    </div>
                </div>
                <div className='hair_cut_box'>
                    <div className='hari_cut_contant'>
                        <h3 className='hair_cut_head'>HIGHLIGHTS</h3>
                        <p className='hair_cut_pera'>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.</p>
                    </div>
                    <div className='hair_cut_price'>
                        <span>$90</span>
                    </div>
                </div>
                <div className='hair_cut_box'>
                    <div className='hari_cut_contant'>
                        <h3 className='hair_cut_head'>HAIR COLOURING</h3>
                        <p className='hair_cut_pera'>Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.</p>
                    </div>
                    <div className='hair_cut_price'>
                        <span>$40</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ourservice