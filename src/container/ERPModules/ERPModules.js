import React from 'react';

import images from '../../constants/images'
import './ERPModules.css';

const ERPModules = () => (
    <div className='app__ERPModules'>
        <p className='p__poppins sb'>OUR ERP Modules</p>
        <div className='app__ERPModules-listing'>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.FA}/><p>Financial & Accounting</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.HR}/><p>Human Resource</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.AM}/><p>Asset Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.VM}/><p>Visitor Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.CR}/><p>Customer Relationship (CRM)</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.M}/><p>Manufacture</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.SM}/><p>Sales & Marketing</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.PM}/><p>Project Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.KM}/><p>Knowledge Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.WM}/><p>Warehouse Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.IM}/><p>Inventory Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.PuM}/><p>Purchasing Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.DM}/><p>Document Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.EI}/><p>E-Invoice</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.POS}/><p>Point Of Sales</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.BM}/><p>Business Management</p></div>
            <div className='app__ERPModules-items p__poppins sb'><img src={images.ESS}/><p>Empolyee Self Service</p></div>
        </div>
    </div>
);



export default ERPModules;
