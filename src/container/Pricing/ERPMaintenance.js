import React from 'react'

import images from '../../constants/images'
import './ERPMaintenance.css'

const ERPMaintenance = () => {
  return (
    <div className='app__erpMaintenancePricing'>
        <div className='app__erpMaintenancePricing-title'>
            <p className='p__outfit sb'>PRICING</p>
            <p className='p__outfit sb'>ERP MAINTENANCE</p>
        </div>
        <div className='app__erpMaintenancePricing-body'>
            <div className='app__erpMaintenancePricing-list'>
                <div className='app__erpMaintenancePricing-preve'>
                    <p className='p__poppins sb'>Preventive Maintenance</p>
                    <div className='app__erpMaintenancePricing-point'>
                        <p className='p__poppins'>System Administration & Maintenance</p>
                        <p className='p__poppins'>Database Administration</p>
                    </div>
                </div>
                <div className='app__erpMaintenancePricing-corre'>
                    <p className='p__poppins sb' style={{ marginTop: '40px'}}>Corrective Maintenance</p>
                    <div className='app__erpMaintenancePricing-point'>
                        <p className='p__poppins'>Bugs Fixing ERP Standart</p>
                        <p className='p__poppins'>System & Server Optimization</p>
                    </div>
                </div>
                <div className='app__erpMaintenancePricing-preve'>
                    <p className='p__poppins sb' style={{ marginTop: '40px'}}>Adaptive Maintenance</p>
                    <div className='app__erpMaintenancePricing-point'>
                        <p className='p__poppins'>System Plugin Compatible</p>
                        <p className='p__poppins'>Cloud Server Management</p>
                    </div>
                </div>
                <div className='app__erpMaintenancePricing-preve'>
                    <p className='p__poppins sb' style={{ marginTop: '40px'}}>Other Support</p>
                    <div className='app__erpMaintenancePricing-point'>
                        <p className='p__poppins'>Mission Critical Support (24/7 - High Priority)</p>
                        <p className='p__poppins'>Technical Support</p>
                        <p className='p__poppins'>ERP Developing Consulting</p>
                        <p className='p__poppins'>ERP Change Request</p>
                    </div>
                </div>
            </div>
            <div className='app__erpMaintenancePricing-category'>
                <div className='app__erpMaintenancePricing-STD'>
                    <p className='p__poppins sb'><span className='gradient1'>STD</span></p>
                    <div className='app__erpMaintenancePricing-conbody'>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p></p>
                            <div>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <img src={images.times} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <p className='p__poppins sb'>8/5</p>
                                <img src={images.times} />
                                <img src={images.times} />
                            </div>
                        </div>
                        <p className='p__poppins sb'><span>22</span> jt/mo</p>
                    </div>
                </div>
                <div className='app__erpMaintenancePricing-AIO'>
                    <p className='p__poppins sb'><span className='gradient1'>AIO</span></p>
                    <div className='app__erpMaintenancePricing-conbody'>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <div className='app__erpMaintenancePricing-cbody'>
                            <p> </p>
                            <div>
                                <img src={images.check} />
                                <p className='p__poppins sb'>8/5</p>
                                <img src={images.check} />
                                <img src={images.check} />
                            </div>
                        </div>
                        <p className='p__poppins sb'><span>35</span> jt/mo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ERPMaintenance