import React from 'react'

import './ERPConsulting.css'

const ERPConsulting = () => {
  return (
    <div className='app__erpConsultingPrice'>
        <div className='app__erpConsultingPrice-title'>
            <p className='p__outfit sb'>PRICING</p>
            <p className='p__outfit sb'>ERP CONSULTING</p>
        </div>
        <div className='app__erpConsultingPrice-body'>
            <div className='app__erpConsultingPrice-card'>
                <p className='p__poppins sb'>Initiation</p>
                <div className='app__erpConsultingPrice-card-body'>
                    <p className='p__poppins sb'>Result</p>
                    <ul>
                        <li>
                            <p className='p__poppins'>
                            Requirements Overview
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Problem & Solution Identification
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Data List Preparation
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Assesment Review
                            </p>
                        </li>
                    </ul>
                    <div>
                        <p className='p__poppins sb'>850.000</p>
                        <p className='p__poppins m'>Per-Man Days</p>
                    </div>
                </div>
            </div>
            <div className='app__erpConsultingPrice-card'>
                <p className='p__poppins sb'>Architect</p>
                <div className='app__erpConsultingPrice-card-body'>
                    <p className='p__poppins sb'>Result</p>
                    <ul>
                        <li>
                            <p className='p__poppins'>
                            Business Process Re-Engineering
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Document Mapping
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Data Re-Structure Standarization
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Budget Planning & Ideal Stages
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Software Requirement Spesifications (SRS)
                            </p>
                        </li>
                    </ul>
                    <p className='p__poppins sb'>3 Jt</p>
                    <p className='p__poppins m'>Per-Man Days</p>
                </div>
            </div>
            <div className='app__erpConsultingPrice-card'>
                <p className='p__poppins sb'>Supervision</p>
                <div className='app__erpConsultingPrice-card-body'>
                    <p className='p__poppins sb'>Result</p>
                    <ul>
                        <li>
                            <p className='p__poppins'>
                            Implementation Workplan Report
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Implementation Progress Report
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Risk Mitigation Report
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Budget Realization Report
                            </p>
                        </li>
                        <li>
                            <p className='p__poppins'>
                            Quality Assesment Report
                            </p>
                        </li>
                    </ul>
                    <p className='p__poppins m'>Start from</p>
                    <p className='p__poppins sb'>2.2 Jt</p>
                    <p className='p__poppins m'>Per-Man Days</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ERPConsulting