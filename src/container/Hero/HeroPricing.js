import React from 'react'
import images from '../../constants/images'

import './HeroPricing.css'

const HeroPricing = () => {
  return (
    <div className='app__heroPricing'>
        <img src={images.E1} alt='Ellipse1' />
        <img src={images.E2} alt='Ellipse2' />
        <img src={images.Decor} alt='Decor' />
        <div className='app__heroPricing-title'>
            <p className='p__outfit sb'>PRICING</p>
            <p className='p__outfit sb'>Get Started Now,
            Pick a Plan Later</p>
            <p className='p__poppins'>Try ERP Folarium for 7 days and get unrestricted
            access to all our product and features </p>
        </div>
        <div className='app__heroPricing-button'>
            <div className='app__heroPricing-ltd'>
                <p className='p__poppins m'>Long-Term Development</p>
            </div>
            <div className='app__heroPricing-bop'>
                <p className='p__poppins m'>Based on Project</p>
            </div>
        </div>
    </div>
  )
}

export default HeroPricing