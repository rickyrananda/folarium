import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'
import './OverviewConsulting.css'

const OverviewConsulting = () => {
  return (
    <div className='app__overviewConsulting'>
        <div className='app__overviewConsulting-title'>
            <div className='flex-col'>
                <p className='p__poppins m'>Overview</p>
                <button className='p__poppins m'><FontAwesomeIcon icon={faFolder} style={{ marginRight: '8px'}} />Get Proposal</button>
            </div>
            <div className='bg-overview'></div>
            <img src={images.Consulting1} alt='cover-img' />
        </div>
        <div className='app__overviewConsulting-body'>
            <p className='p__poppins'>
            Enterprise Resources Planning (ERP) dikenal sangat sulit diimplementasikan. Kenapa sulit? Karena diperlukan banyak sumber daya dan perhatian yang luar biasa saat melakukan penerapannya.
            </p>
            <p className='p__poppins'>
            Layanan ini membantu perencanaan dan persiapan dalam implementasi ERP yang sesuai dengan bisnis perusahaan dengan mengacu dalam penerapan ISO. Banyak perusahaan belum menyadari betapa perlunya dalam perencanaan yang matang dengan didukung dokumentasi perencanaan secara lengkap. Adapun tahapan pelaksanaan layanan ini antara lain :
            </p>
            <div className='app__overviewConsulting-item'>
                <div className='p__poppins m'>
                ERP Plannning Consulting
                </div>
                <div className='p__poppins m'>
                ERP Supervision Consulting
                </div>
            </div>
        </div>
        <div className='app__overviewConsulting-archi'>
            <p className='p__outfit'>Konsultan Perencanaan (Architect)</p>
            <div className='app__overviewConsulting-content'>
                <div className='app__overviewConsulting-desc'>
                    <p className='p__poppins'>
                    Perencanaan di awal proyek yang matang dan dilakukan secara profesional akan menghasilkan sebuah pedoman & rencana implementasi ERP yang baik dan efisien, yang nantinya akan turut menentukan kesuksesan implementasi. Adapun produk yang akan dihasilkan, antara lain :
                    </p>
                    <div className='app__overviewConsulting-container'>
                        <div className='app__overviewConsulting-list'>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.BPR} alt='image'/>
                                <p className='p__poppins'>
                                Business Process Re-Engineering
                                </p>
                            </div>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.DRS} alt='image'/>
                                <p className='p__poppins'>
                                Data Re-Structure Standarization
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewConsulting-list'>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.PSS} alt='image'/>
                                <p className='p__poppins'>
                                Problem Solving & Solution
                                </p>
                            </div>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.BPT} alt='image'/>
                                <p className='p__poppins'>
                                Budget Planning & Timeframe
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewConsulting-list'>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.DocM} alt='image' />
                                <p className='p__poppins'>
                                Document Mapping (DM)
                                </p>
                            </div>
                            <div className='app__overviewConsulting-point'>
                                <img src={images.SRS} alt='image' />
                                <p className='p__poppins'>
                                Software Requirement Spesification
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={images.Consulting2} alt='image'/>
            </div>
        </div>
        <div className='app__overviewConsulting-pengawasan'>
        <p className='p__outfit'>Konsultan Pengawasan (Supervision)</p>
            <div className='app__overviewConsulting-content'>
                <img src={images.Consulting3} />
                <div className='app__overviewConsulting-desc'>
                    <p className='p__poppins'>
                    Dalam mengawasi implementasi ERP, tentunya dibutuhkan sumber daya manusia yang ahli di bidangnya masing-masing seperti rekaya proses bisnis, integrase data, enterprise system dan lain-lain sehingga implementasi ERP dapat dilaksanakan dengan baik dalam waktu cepat dan efisien sesuai dengan perencanaan awal.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewConsulting