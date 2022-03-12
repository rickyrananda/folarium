import React from 'react'

import images from '../../constants/images'
import './Client.css'
const Client = () => {
  return (
    <div className='app__client'>
      <div className='app__client-top' style={{ backgroundImage: `url(${images.BGc})` }}>
        <div className='app__client-title'>
          <p className='p__outfit sb'>Our Beloved<span className='span1'>Clients</span></p>
            <hr className='garis1'/><hr className='garis3'/>
          <p className='p__poppins'>Sebuah kebanggaan bagi kami dapat melayani anda sebagai Customer kami.
          Inovasi & solusi kami hadirkan untuk kebutuhan bisnis anda.</p>
        </div>
        <div className='app__client-list'>
            <div className='app__client-listed'>
              <div className='app__client-item'>
                  <img src={images.C1}/>
              </div>
              <div className='app__client-item'>
                  <img src={images.C3}/>
              </div>
            </div>
            <div className='app__client-listed'>
              <div className='app__client-item'>
                  <img src={images.C6}/>
              </div>
              <div className='app__client-item'>
                  <img src={images.C2}/>
              </div>
              <div className='app__client-item'>
                  <img src={images.C7}/>
              </div>
            </div>
            <div className='app__client-listed'>
              <div className='app__client-item'>
                  <img src={images.C4}/>
              </div>
              <div className='app__client-item'>
                  <img src={images.C5}/>
              </div>
            </div>
        </div>
      </div>
      <div className='app__client-bot'>
        <div className='app__client-bot-title'>
          <p className='p__outfit sb'>OTHER<span className='span2'>CLIENT</span></p>
          <hr className='garis2'></hr>
        </div>
        <div className='app__client-bot-list'>
          <div className='app__client-bot-item'>
            <img src={images.C12}/>
          </div>
          <div className='app__client-bot-item'>
            <img src={images.C13}/>
          </div>
          <div className='app__client-bot-item'>
            <img src={images.C14}/>
          </div>
          <div className='app__client-bot-item'>
            <img src={images.C15}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Client