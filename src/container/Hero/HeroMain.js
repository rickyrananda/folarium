import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from '../../constants/images'
import './HeroMain.css';

const HeroMain = () => (
    <div className='app__heroMain'>
        <div className='app__heroMain-text'>
            <p className='p__poppins sb'>ERP Folarium</p>
            <p className='p__poppins sb'>The Ultimate Company & Business Management Solution</p>
            <p className='p__poppins m'>Welcome To The Folarium. Various Experiences That Allow Us To Push Boundaries In Implementing ERP According To Business Needs</p>
            <div className='app__heroMain-text-button'>
                <button className='app__heroMain-buttonGS'><a className='p__poppins m' href='pricing'>Get Started<span><FontAwesomeIcon icon={faArrowRight}/></span></a></button>
                <button className='app__heroMain-buttonTD'><a className='p__poppins m' href='https://v8.folarium.co.id/' target='_blank'>Try Demo</a></button>
            </div>
        </div>
        <div className='app__heroMain-object'>
        <img  src={images.HeroObject} alt='Hero Object' />
        <div className='app__heroMain-image'>
            <img src={images.HeroCover} alt='Hero Image' />
        </div>
        </div>
    </div>
);

export default HeroMain;
