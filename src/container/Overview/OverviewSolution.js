import React from 'react'
import images from '../../constants/images'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

import './OverviewSolution.css'

const OverviewSolution = () => {
  return (
    <div className='app__overviewSolution'>
        <div className='app__overviewSolution-title'>
            <p className='p__poppins m'>Overview</p>
            <div></div>
            <img src={images.BGERP} alt='cover-img' />
        </div>
        <div className='app__overviewSolution-content'>
            <div className='app__overviewSolution-head'>
                <p className='p__poppins sb'>Bagaimana folarium menyediakan sistem erp?</p>
                <button className='p__poppins m'><FontAwesomeIcon icon={faFolder} style={{ marginRight: '8px'}} />Get Proposal</button>
            </div>
            <div className='app__overviewSolution-body'>
               <div className='app__overviewSolution-item'>
                    <p className='p__poppins m'>Aksesbilitas Fleksibel</p>
                    <ul className='app__overviewSolution-itemlist'>
                        <li className='app__overviewSolution-point p__poppins'>100% Web-Based, Tidak Perlu Instalasi</li>
                        <li className='app__overviewSolution-point p__poppins'>Akses via Internet dari Manapun, Dimanapun & Kapanpun</li>
                        <li className='app__overviewSolution-point p__poppins'>Akses Seluruh Data Secara Real-Time</li>
                    </ul>
               </div>
               <div className='app__overviewSolution-item'>
                    <p className='p__poppins m'>Otorisasi Pengguna</p>
                    <ul className='app__overviewSolution-itemlist'>
                        <li className='app__overviewSolution-point p__poppins'>Pengguna Tidak Terbatas (Unlimited)</li>
                        <li className='app__overviewSolution-point p__poppins'>Otorisasi dapat diatur berdasarkan Hak Akses Posisi</li>
                        <li className='app__overviewSolution-point p__poppins'>Tersedianya Monitoring Riwayat Aktivitas ERP</li>
                    </ul>
               </div>
               <div className='app__overviewSolution-item'>
                    <p className='p__poppins m'>Minimum Pemeliharaan</p>
                    <ul className='app__overviewSolution-itemlist'>
                        <li className='app__overviewSolution-point p__poppins'>Data Tersimpan Aman di Server Kami dan TidakBerpengaruh pada Komputer Anda</li>
                        <li className='app__overviewSolution-point p__poppins'>Dukungan Fitur Tambahan & Kustomisasi</li>
                        <li className='app__overviewSolution-point p__poppins'>Folarium menyediakan Penyimpanan Server, Keamanan, Backup Data& Pemeliharaan</li>
                    </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewSolution