import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from '../../constants/images';
import './Journey.css'

const Journey = () => {
  return (
    <div className='app__journey'>
        <div className='app__journey-top'>
            <div className='app__journey-top-title'>
                <p className='p__outfit'>THE JOURNEY</p>
                <p className='p__poppins'>How It's All Start</p>
            </div>
            <img src={images.Line} alt='timeline'/>
        </div>
        <div className='app__journey-bot'>
            <div className='app__journey-bot-first'>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2014-2015</p>
                  <p className='p__outfit'>Launching POS & Pro Site Service (CV)</p>
              </div>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2018</p>
                  <p className='p__outfit'>Launching ERP-BOP Services (CV)</p>
              </div>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2020</p>
                  <p className='p__outfit'>Launching Folarpos as Subsidiaries (PT)</p>
              </div>
            </div>
            <div className='app__journey-bot-second'>
                <img src={images.Journey} alt='timeline'/>
            </div>
            <div className='app__journey-bot-third'>
            <div className='app__journey-card'>
                  <p className='p__outfit sb'>2012</p>
                  <p className='p__outfit'>Business Founded</p>
              </div>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2016-2017</p>
                  <p className='p__outfit'>Launching IMS & CRM Services (CV)</p>
              </div>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2019</p>
                  <p className='p__outfit'>Launching ERP-LTD & SCM Services (PT)</p>
              </div>
              <div className='app__journey-card'>
                  <p className='p__outfit sb'>2021</p>
                  <p className='p__outfit'>Launching Folarium ERP 8th Version (PT)</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Journey