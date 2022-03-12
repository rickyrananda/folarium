import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRocket } from '@fortawesome/free-solid-svg-icons';
import './MoreAU.css'

const MoreAU = () => {
  return (
    <div className='app__moreAboutUs'>
        <div className='app__moreAboutUs-left'>
            <p className='p__poppins sb'>MORE ABOUT US?</p>
            <p className='p__poppins'>Feel Free To Download These Document</p>
        </div>
        <div className='app__moreAboutUs-right'>
            <button className='btn__cp p__poppins'>
                <FontAwesomeIcon icon={faDownload}/>
                <p className='p__poppins'>Company Profile</p>
            </button>
            <button className='btn__erp p__poppins'>
                <FontAwesomeIcon icon={faRocket}/>
                <p className='p__poppins'>ERP Overview</p>
            </button>
        </div>
    </div>
  )
}

export default MoreAU