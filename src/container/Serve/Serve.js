import React from 'react';

import images from '../../constants/images';
import './Serve.css';

const Serve = () => (
    <div className='app__serve-container'>
        <p className='p__poppins sb'>We Serve Variants <br/><span className='gradient'>Business</span> Sector</p>
        <div className='app__serve-listing'>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Construction})`, backgroundSize: '100%' }}>
                <p>Constructions</p>
            </div>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Engineering})`, backgroundSize: '100%' }}>
                <p>Engineering</p>
            </div>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Manufacturing})`, backgroundSize: '100%', objectFit: 'contain' }}>
                <p>Manufacturing</p>
            </div>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Distribution})`, backgroundSize: '100%' }}>
                <p>Distribution</p>
            </div>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Health})`, backgroundSize: '100%' }}>
                <p>Health</p>
            </div>
            <div className='app__serve-list p__poppins sb' style={{ backgroundImage: `url(${images.Beauty})`, backgroundSize: '100%' }}>
                <p>Beauty</p>
            </div>
        </div>
    </div>
);



export default Serve;
