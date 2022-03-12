import React from 'react'

import images from '../../constants/images'
import './HeroBlog.css'

const HeroBlog = () => {
  return (
    <div className='app__heroBlog' style={{ backgroundImage: `linear-gradient(1.05deg, #FFFFFF 0.94%, rgba(249, 249, 249, 0.58) 48.77%, rgba(0, 0, 0, 0) 99.14%), url(${images.A7})` }}>
        <div className='app__heroBlog-title'>
            <p className='p__poppins sb'>5 Tips Mengevaluasi Kegagalan Bisnis</p>
            <p className='p__poppins'>Keluar dari rasa terpuruk dari kegagalan bisnis adalah apa yang perlu dilakukan pemilik bisnis sesegera mungkin. Setelah mengalami</p>
            <button className='m-artikel-btn'><a href='/detail' className='p__poppins m'>Read Article</a></button>
        </div>
    </div>
  )
}

export default HeroBlog