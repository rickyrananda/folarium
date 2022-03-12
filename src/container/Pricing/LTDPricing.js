import React from 'react'

import './LTDPricing.css'

const LTDPricing = () => {
  return (
    <div className='app__LTDPricing'>
        <div className='app__LTDPricing-main'>
            <p className='p__poppins sb'>BASIC PLAN</p>
            <p className='p__poppins sb'>single office Company</p>
            <div className='app__LTDPricing-gradient satu'>
                <p className='p__poppins m'>Implementation & Initiation Adjustment</p>
                <p className='p__poppins'>100 Working Days</p>
                <p className='p__poppins sb'><span>320</span> jt</p>
            </div>
            <div className='app__LTDPricing-gradient dua'>
                <p className='p__poppins m'>Basic Subscription</p>
                <p className='p__poppins sb'><span>30</span> jt / month</p>
                <p className='p__poppins'>Max. 20 Users Premium Access</p>
                <p className='p__poppins'>Max. 200 Users Limited Access</p>
            </div>
            <p className='p__poppins m'>Fasilitas</p>
            <ul>
                <li>
                <p className='p__poppins m'>
                Free Change Request    
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Free Consulting Support
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Free Maintenance
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Free System Upgrade
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Free Training Via Online
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Free Cloud Data Server 12 Bulan
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Manual Guide (Online)
                </p>
                </li>
                <li>
                <p className='p__poppins m'>
                Dukungan Layanan Meliputi ERP,SCM & CRM
                </p>
                </li>
            </ul>
            <button><p className='p__poppins'>Get Started</p></button>
        </div>
        <div className='app__LTDPricing-right'>
            <div className='app__LTDPricing-right-top'>
                <div className='app__LTDPricing-card'>
                    <p className='p__poppins sb'>Multi Office Company</p>
                    <div className='app__LTDPricing-gradient'>
                        <p className='p__poppins'>Implementation & Initiation Adjustment</p>
                        <p className='p__poppins'>100 Working Days</p>
                        <p className='p__poppins sb'><span>+35</span> jt/office</p>
                    </div>
                </div>
                <div className='app__LTDPricing-card'>
                    <p className='p__poppins sb'>Multi Company</p>
                    <div className='app__LTDPricing-gradient'>
                        <p className='p__poppins'>Implementation & Initiation Adjustment</p>
                        <p className='p__poppins'>100 Working Days</p>
                        <p className='p__poppins sb'><span>+107</span> jt/Company</p>
                    </div>
                </div>
            </div>
            <div className='app__LTDPricing-right-bottom'>
                <div className='app__LTDPricing-card-short'>
                    <p className='p__poppins sb'>Add-on for users</p>
                    <p className='p__poppins sb'>Premium Access</p>
                    <div className='app__LTDPricing-gradient'>
                        <p className='p__poppins sb'><span>1.5</span> Jt / mo / user</p>
                    </div>
                </div>
                <div className='app__LTDPricing-card-short'>
                    <p className='p__poppins sb'>Add-on for users</p>
                    <p className='p__poppins sb'>Limited Access</p>
                    <div className='app__LTDPricing-gradient'>
                        <p className='p__poppins sb'><span>150</span> Rb / mo / user</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LTDPricing