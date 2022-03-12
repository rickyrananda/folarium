import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock, faPhone } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'
import './HeroContactUs.css'

const HeroContactUs = () => {
  return (
    <div className='app__heroContactUS'>
        <div className='app__heroContactUS-title'>
            <p className='p__poppins sb'>Get in touch!</p>
            <p className='p__poppins'>Contact us for a quote, help or join the team</p>
        </div>
        <div className='app__heroContactUS-location'>
            <div className='app__heroContactUS-location-item'>
                <img src={images.CUS1} />
                <div className='app__heroContactUS-location-desc'>
                    <p className='p__poppins sb'>Jakarta</p>
                    <p className='p__poppins'>Jl. KH Abdullah Syafi’i, No. 23A, Tebet, Jakarta Selatan</p>
                    <p className='p__poppins m'>Telp. (0812) 300 1024</p>
                </div>
            </div>
            <div className='app__heroContactUS-location-item'>
                <img src={images.CUS2} />
                <div className='app__heroContactUS-location-desc'>
                    <p className='p__poppins sb'>Tangerang</p>
                    <p className='p__poppins'>Jl. WR. Supratman No 18, Ciputat Timur, Kota Tangerang Selatan</p>
                    <p className='p__poppins m'>Telp. (0812) 300 1024</p>
                </div>
            </div>
        </div>
        <div className='app__heroContactUs-contact-list'>
            <div className='app__heroContactUs-contact-item'>
                <div className='app__heroContactUS-item-title'>
                    <p className='p__poppins sb'>Technical Support</p>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faEnvelope} />support@folarium.co.id</p>
                </div>
                <div className='app__heroContacUS-item-hours'>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faClock} /> 24 Jam / 7 Hari / 1 Minggu</p>
                </div>
            </div>
            <div className='app__heroContactUs-contact-item'>
                <div className='app__heroContactUS-item-title'>
                    <p className='p__poppins sb'>Presale Consultant</p>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faEnvelope} />support@folarium.co.id</p>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faPhone} />0812 300 1024</p>
                </div>
                <div className='app__heroContacUS-item-hours'>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faClock} /> 24 Jam / 7 Hari / 1 Minggu</p>
                </div>
            </div>
            <div className='app__heroContactUs-contact-item'>
                <div className='app__heroContactUS-item-title'>
                    <p className='p__poppins sb'>Recruitment</p>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faEnvelope} />join@folarium.co.id</p>
                </div>
                <div className='app__heroContacUS-item-hours'>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faClock} /> Senin - Jumat / 08:00 - 17:00</p>
                </div>
            </div>
            <div className='app__heroContactUs-contact-item'>
                <div className='app__heroContactUS-item-title'>
                    <p className='p__poppins sb'>Finance & Investment</p>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faEnvelope} />finance@folarium.co.id</p>
                </div>
                <div className='app__heroContacUS-item-hours'>
                    <p className='p__poppins'><FontAwesomeIcon className='font-awesome' icon={faClock} /> Senin - Jumat / 08:00 - 17:00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroContactUs