import React from 'react';

import images from '../../constants/images'
import { Link, Route, useLocation } from 'react-router-dom';
import './HeroService.css';

const HeroService = () => {
    const [gScale1, setGScale1] = React.useState('grayscale(100%)');
    const [gScale2, setGScale2] = React.useState('grayscale(100%)');
    const [gScale3, setGScale3] = React.useState('grayscale(100%)');
    const location = useLocation();
    React.useEffect(() => {
    if (location.pathname == '/service-solution') {
        setGScale1('none')
        setGScale2('grayscale(100%)')
        setGScale3('grayscale(100%)')
        
    } else if (location.pathname == '/service-consulting') {
        setGScale1('grayscale(100%)')
        setGScale2('none')
        setGScale3('grayscale(100%)')
    } else {
        setGScale1('grayscale(100%)')
        setGScale2('grayscale(100%)')
        setGScale3('none')
    }
    }, [location]);
        return (
        <div className='app__heroService'>
            <p className='p__outfit sb'>WELCOME TO SERVICE OVERVIEW</p>
            <div className='app__heroService-btn-container'>
            <Link to='/service-solution'>
                <div className='app__heroService-btn'>
                        <img src={images.Solution} style={{ filter: gScale1 }}/>
                        <p className='p__poppins sb'>ERP SOLUTION</p>
                </div>
            </Link>
            <Link to='/service-consulting'>
                <div className='app__heroService-btn'>
                        <img src={images.Consulting} style={{ filter: gScale2 }}/>
                        <p className='p__poppins sb'>ERP CONSULTING</p>
                </div>
            </Link>
            <Link to='/service-maintenance'>
                <div className='app__heroService-btn'>
                        <img src={images.Maintenance} style={{ filter: gScale3 }}/>
                        <p className='p__poppins sb'>ERP MAINTENANCE</p>
                </div>
            </Link>
    
            </div>
        </div>
    )

}


export default HeroService;
