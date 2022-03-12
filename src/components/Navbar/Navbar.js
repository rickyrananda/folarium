import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import images from '../../constants/images';
import './Navbar.css';
import { Link, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [navBg, setNavBg] = React.useState('transparent');
    const [navPos, setNavPos] = React.useState('static');
    const location = useLocation();
    React.useEffect(() => {
    if (location.pathname == '/profile' || location.pathname == '/') {
        setNavBg('transparent')
        setNavPos('absolute')
    } else {
        setNavBg('white')
        setNavPos('static')
    }
    console.log('color :' + navBg);
    }, [location]);
    return (
    <div className='app__navbar' style={{ backgroundColor: navBg, position: navPos }}>
        <div className='app__navbar-logo'>
            <img src={images.folarium} alt='Logo'/>
        </div>
        <ul className='app__navbar-links'>
            <li className='p__poppins m'><Link to='/'>Home</Link></li>
            <li className='p__poppins m'><Link to='/profile'>Profile</Link></li>
            <div className='dropdown'>
                <li className='p__poppins m'>
                    <Link to='/service-solution' style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ marginRight: '8px' }}>Service</p>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                </li>
                <div className='dropdown-container'>
                    <div className='dropdown-body'>
                        <Link to='/service-solution'>
                            <div className='dropdown-link' style={{ marginRight: '4rem'}}>
                                <img src={images.Solution}/>
                                <p className='p__poppins m'>Solution</p>
                            </div> 
                        </Link>
                        <Link to='/service-consulting'>
                            <div className='dropdown-link' style={{ marginLeft: '4rem', marginRight: '4rem'}}>
                                <img src={images.Consulting} />
                                <p className='p__poppins m'>Consulting</p>
                            </div>
                        </Link>
                        <Link to='/service-maintenance'>
                            <div className='dropdown-link' style={{ marginLeft: '4rem'}}>
                                <img src={images.Maintenance } />
                                <p className='p__poppins m'>Maintenance</p>
                            </div>
                        </Link>
                    </div>
                </div>  

            </div>
            <li className='p__poppins m'><Link to='/blog'>Blog</Link></li>
            <li className='p__poppins m'><Link to='/pricing'>Pricing</Link></li>
            <li className='p__poppins m'><a href='https://gotalenta.com/id/co/erp-folarium' target='_blank'>Career</a></li> 
            <li className='p__poppins m'><Link to='/contact-us'>Contact Us</Link></li>
            
        </ul>
    </div>
    )
}

export default Navbar;
 