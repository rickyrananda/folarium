import React from 'react';

import images from '../../constants/images';
import './Partners.css';

const Partners = () => (
    <div className='app__partners' style={{ backgroundImage: `url(${images.PartnersBG})`, backgroundSize: 'cover' }}>
        <div className='app__partners-title'>
            <p className='p__poppins sb'>OUR <span className='p-gradient'>CLIENT</span></p>
        </div>
        <div className='app__partners-list'>
            <div className='app__partners-item'>
                <img src={images.C1}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C2}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C3}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C4}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C5}/>
            </div>
        </div>
        <div className='app__partners-list'>
        <div className='app__partners-item'>
                <img src={images.C6}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C7}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C8}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C9}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C10}/>
            </div>
            <div className='app__partners-item'>
                <img src={images.C11}/>
            </div>
        </div>
    </div>
);

export default Partners;
