import React from 'react';

import images from '../../constants/images'
import './WMUD.css'

const WMUD = () => (
    <div className='app__WMUD'>
        <div className='app__WMUD-head'>
            <p className='p__poppins sb'>What Makes <span className='gradient'>Folarium</span> <span className='blue'>Different</span></p>
            <div className='bg'></div>
            <img src={images.Frame} alt="Frame"/>
        </div>
        <div className='app__WMUD-body'>
            <div className='app__WMUD-center'>
                <img src={images.Home}/>
            </div>
            <div className='app__WMUD-item1'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.MO} alt="Multi Office" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Multi Office
                    </p>
                    <p className='p__poppins desc'>
                    Supports Integration Between Branches & Warehouses With HO In One ERP Software Centrally
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item2'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.Customization} alt="Customization" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Customization
                    </p>
                    <p className='p__poppins desc'>
                    Services That Can Be Tailored To The Type, Structure, Needs, And Goals Of Your Company.
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item3'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.BS} alt="Business Savvy" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Business Savvy
                    </p>
                    <p className='p__poppins desc'>
                    Design, Develop And Upgrade Technology Solutions To Match ERP Software And Business
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item4'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.US} alt="Unlimited Users" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Unlimited Users
                    </p>
                    <p className='p__poppins desc'>
                    Can Be Used By Multiple Users In The Same Company At No Extra Cost.
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item5'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.Scalable} alt="Scalable" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Scalable
                    </p>
                    <p className='p__poppins desc'>
                    Solutions For Using ERP Software That Can Be Adapted To Business Growth & Changes
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item6'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.EQ} alt="Experienced & Quality" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Experienced & Quality
                    </p>
                    <p className='p__poppins desc'>
                    Experienced System Integration Supported By Competent Experts And The Best Quality Solutions
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item7'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.IO} alt="Information Oriented" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Information Oriented
                    </p>
                    <p className='p__poppins desc'>
                    Oriented To Your Company's Information And Business Needs
                    </p>
                </div>
            </div>
            <div className='app__WMUD-item8'>
                <div className='app__WMUD-ellipse'>
                    <img src={images.LTD} alt="Long Term Development" />
                </div>
                <div className='app__WMUD-text'>
                    <p className='p__poppins sb head'>
                        Long Term Development
                    </p>
                    <p className='p__poppins desc'>
                    Long-Term Development Support For The Company's Business Development
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default WMUD;
