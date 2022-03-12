import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'
import './OverviewMaintenance.css'

const OverviewMaintenance = () => {
  return (
    <div className='app__overviewMaintenance'>
        <div className='app__overviewMaintenance-title'>
            <div className='flex-col'>
                <p className='p__poppins m'>Overview</p>
                <button className='p__poppins m'><FontAwesomeIcon icon={faFolder} style={{ marginRight: '8px'}} />Get Proposal</button>
            </div>
            <div className='bg-overview'></div>
            <img src={images.Maintenance1} alt='cover-img' />
        </div>
        <div className='app__overviewMaintenance-body'>
            <p className='p__poppins'>
            Software, berbeda dengan hardware. Ketika kita menggunakan sebuah perangkat keras (hardware), kita harus mengeluarkan biaya maupun effort untuk melakukan perawatan mungkin karena usang atau ada beberapa perangkatnya yang rusak. Berbeda dengan software, tapi software akan selalu berubah jika ada ketidaksesuaian atau sejumlah permasalahan bug (error sistem) yang harus dilakukan perbaikan.
            </p>
            <p className='p__poppins'>
            Untuk menunjang fungsional serta stabilitas dari ERP Software yang mengacu pada ISO seri IEC 14764 diperlukan manajemen maintenance sebagai berikut :
            </p>
            <div className='app__overviewMaintenance-item'>
                <div className='p__poppins m'>
                Preventive Maintenance
                </div>
                <div className='p__poppins m'>
                Corrective Maintenance
                </div>
                <div className='p__poppins m'>
                Adaptive Maintenance
                </div>
            </div>
            <p className='p__poppins'>
            Other support : Mission Critical Support (24/7), ERP Server Performance Report, ERP Businessplan Consulting, ERP Server Data
            </p>
        </div>
        <div className='app__overviewMaintenance-preve'>
            <p className='p__outfit'>Preventive Maintenance</p>
            <div className='app__overviewMaintenance-content'>
                <div className='app__overviewMaintenance-desc'>
                    <p className='p__poppins'>
                    Preventive maintenance, dilakukan untuk mendeteksi dan memperbaiki potensi-potensi kesalahan, sebelum kesalahan tersebut benar-benar terjadi.
                    </p>
                    <div className='app__overviewMaintenance-container'>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve1} alt='image'/>
                                <p className='p__poppins'>
                                System Acceleration
                                </p>
                            </div>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve2} alt='image'/>
                                <p className='p__poppins'>
                                Database Perfomance
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve3} alt='image'/>
                                <p className='p__poppins'>
                                Server Perfomance
                                </p>
                            </div>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve4} alt='image'/>
                                <p className='p__poppins'>
                                Database Backup
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve5} alt='image' />
                                <p className='p__poppins'>
                                Database Maintenance
                                </p>
                            </div>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Preve6} alt='image' />
                                <p className='p__poppins'>
                                Data Cleaning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={images.Maintenance2} alt='image'/>
            </div>
        </div>
        <div className='app__overviewMaintenance-corre'>
        <p className='p__outfit'>Corrective Maintenance</p>
            <div className='app__overviewMaintenance-content'>
                <img src={images.Maintenance3} />
                <div className='app__overviewMaintenance-desc'>
                    <p className='p__poppins'>
                    Corrective maintenance, dilakukan untuk mengatasi kegagalan dan permasalahan yang muncul saat sistem dioperasikan. Sebagai contoh, maintenace dapat digunakan untuk mengungkapkan kesalahan pemrograman (bugs) atau kelemahan selama proses pengembangan yang tidak terdeteksi dalam pengujian sistem, sehingga kesalahan tersebut dapat diperbaiki.
                    </p>
                    <div className='app__overviewMaintenance-container'>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Corre1} alt='image'/>
                                <p className='p__poppins'>
                                Bugs Fixing ERP Standart
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Corre2} alt='image'/>
                                <p className='p__poppins'>
                                System Optimization
                                </p>
                            </div>
                        </div>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Corre3} alt='image' />
                                <p className='p__poppins'>
                                Server Optimization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='app__overviewMaintenance-adapt'>
            <p className='p__outfit'>Adaptive Maintenance</p>
            <div className='app__overviewMaintenance-content'>
                <div className='app__overviewMaintenance-desc'>
                    <p className='p__poppins'>
                    Adaptive maintenance, ketika sistem harus mengadaptasi perubahan pada environment dimana sistem tersebut berjalan. Misalnya, ketika terdapat aplikasi Android, aplikasi harus dilakukan maintenance ketika versi Android di upgrade, agar aplikasi tetap compatible.
                    </p>
                    <div className='app__overviewMaintenance-container'>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Adapt1} alt='image'/>
                                <p className='p__poppins'>
                                System Compatible
                                </p>
                            </div>        
                        </div>
                        <div className='app__overviewMaintenance-list'>
                            <div className='app__overviewMaintenance-point'>
                                <img src={images.Adapt2} alt='image'/>
                                <p className='p__poppins'>
                                Server Compatible
                                </p>
                            </div>                           
                        </div>
                    </div>
                </div>
                <img src={images.Maintenance4} alt='image'/>
            </div>
        </div>
    </div>
  )
}

export default OverviewMaintenance