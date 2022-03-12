import React from 'react'

import images from '../../constants/images'
import './Subsidiaries.css'

const Subsidiaries = () => {
  return (
    <div className='app__subsidiaries' style={{ backgroundImage: `url(${images.Sub})`}}>
        <div className='app__subsidiaries-title'>
            <p className='p__outfit sb'>
            SUBSIDIARIES
            </p>
            <hr className='app__subsidiaries-hr' />
        </div>
        <div className='app__subsidiaries-body'>
            <img src={images.igoopos} />
            <img src={images.folarcom} />
            <img src={images.gotalenta} />
        </div>
    </div>
  )
}

export default Subsidiaries