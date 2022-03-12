import React from 'react'
import images from '../../constants/images'

import './ERPBenefit.css'

const ERPBenefit = () => {
  return (
    <div className='app__ERPbenefit'>
        <p className='p__poppins sb'>ERP Benefit</p>
        <div className='app__ERPbenefit-content'>
            <div className='app__ERPbenefit-list'>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_E} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Efficiency</p>
                        <p className='p__poppins '>Meminimalisir proses berulang dan merampingkan proses bisnis / alur kerja</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_C} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Competititon</p>
                        <p className='p__poppins '>Membantu dalam menghadapi persaingan pasar yang serba cepat</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_CL} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Collaboration</p>
                        <p className='p__poppins '>Mendorong kolaborasi antar departemen dalam mempercepat proses</p>
                    </div>
                </div>
            </div>
            <div className='app__ERPbenefit-list'>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_CS} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Cost Saving</p>
                        <p className='p__poppins '>Mengurangi/menekan biaya administrasi dan operasional secara signifikan</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_SP} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Streamlined Process</p>
                        <p className='p__poppins '>Peningkatan efisiensi dan produktivitas berdasarkan prosedur</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_M} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Mobility</p>
                        <p className='p__poppins '>Kemudahan mengontrol dan memonitoring bisnis dari manapun dan kapanpun</p>
                    </div>
                </div>
            </div>
            <div className='app__ERPbenefit-list'>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_R} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Reporting</p>
                        <p className='p__poppins '>Menghemat waktu pelaporan dan dapat disesuaikan kebutuhan</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_P} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Productivity</p>
                        <p className='p__poppins '>Memberikan kemudahan mengotomatisasi berbagai pekerjaan</p>
                    </div>
                </div>
                <div className='app__ERPbenefit-item'>
                    <img src={images.B_CP} alt='item-image'/>
                    <div className='app__ERPbenefit-text'>
                        <p className='p__poppins sb'>Complience</p>
                        <p className='p__poppins '>Membantu kepatuhan dalam menjalankan peraturan bisnis</p>
                    </div>
                </div>
            </div>

        </div>

    </div>  
  )
}

export default ERPBenefit