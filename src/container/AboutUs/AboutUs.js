import React from 'react'

import images from '../../constants/images'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutUs'>
        <div className='app__aboutUs-title'>
            <p className='p__outfit sb'>ABOUT US</p>
            <div className='bulat'></div>
            <div className='kotak'></div>
        </div>
        <div className='app__aboutUs-body'>
          <div className='app__aboutUs-image'>
            <div className='cover1' style={{ backgroundImage: `url(${images.Cover1})`}}>
            </div>
            <div className='app__flex'>
              <div className='cover3' style={{ backgroundImage: `url(${images.Cover3})`}}>
              </div>
              <div className='cover2' style={{ backgroundImage: `url(${images.Cover2})`}}>
              </div>
            </div>
          </div>
          <div className='app__aboutUs-text'>
              <p className='p__poppins m'><span className='p__poppins m folarium'>Folarium</span> adalah perusahaan jasa pengembangan software/perangkat lunak dalam bidang ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), SCM (Supply Chain Management) khususnya untuk bidang Engineering, Construction, Manufacturin, Retail & Distribution. Folarium berkomitmen dalam pengembangan sistem terintergasi, menjalin kemitraan akademik dan industri dengan mengutamakan prinsip Data Integrated Practice guna memberikan manfaat pada bisnis pengguna.
              </p>
              <p className='p__poppins m'>
              Memulai usahanya sejak tahun 2012 dan beroperasi penuh secara total sejak tahun 2014, Folarium memiliki komitmen membangun teknologi integrasi yang dapat memberi nilai tambah dan manfaat bagi industri. Dalam menjalankan roda operasionalnya, Folarium mengedepankan semangat keunggulan untuk meraih kinerja terbaik atas kolaborasi yang efektif. Berbagai upaya kemajuan yang berkelanjutan dilakukan dan diwujudkan secara nyata dalam pembangunan sistem dan tim kerja, serta pengembangan SDM yang Tangguh dan Profesional.
              </p>
          </div>
        </div>

    </div>
  )
}

export default AboutUs