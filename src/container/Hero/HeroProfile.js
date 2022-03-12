import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from '../../constants/images'
import './HeroProfile.css';

const HeroProfile = () => (
    <div className='app__heroProfile'>
        <div className='app__heroProfile-text'>
            <p className='p__poppins sb'>WELCOME TO THE BOARD</p>
            <p className='p__poppins sb'>WE ARE FOLARIUM</p>
            <p className='p__poppins m'>We serve many variant of business sector to manage all your company needs.</p>
        </div>
        <div className='app__heroProfile-object'>
            <div className='app__heroProfile-bg'></div>
            <div className='app__heroProfile-image'>
                <img src={images.ProfileCover} alt='Hero Image' />
            </div>
        </div>
    </div>
);

export default HeroProfile;
