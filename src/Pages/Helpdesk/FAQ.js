import React from 'react'
import { useState } from 'react/cjs/react.production.min'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'

import './FAQ.css'

const FAQ = () => {

const [ active, setActive ] = React.useState("Software");
  return (
    <div className='app__faq'>
        <div className='app__faq-top' style={{ background: 'linear-gradient(94.85deg, #6CD998 0%, #2BABA0 100%)'}}>
            <img src={images.FAQ} />
            <div className='app__faq-top-title'>
                <p className='p__poppins'>Help Desk</p>
                <p className='p__poppins sb'>FAQ</p>
            </div>
        </div>
        <div className='app__faq-body'>
            <div className='app__faq-body-left'>
                <div className='app__faq-link-item' onClick={() => setActive("Software")} style={{ background: '#91E9AF', boxShadow: '0px 12px 24px #B0F2C6'}}>
                    <p className='p__poppins sb' ><a href='#kebijakan'>Software</a></p>
                </div>
                <div className='app__faq-link-item' onClick={() => setActive("Services")} style={{ background: '#62CB86', boxShadow: '0px 12px 24px #9BEBB6'}}>
                    <p className='p__poppins sb' ><a href='#kebijakan'>Services</a></p>
                </div>
                <div className='app__faq-link-item' onClick={() => setActive("Budget")} style={{ background: '#3EBA68', boxShadow: '0px 12px 24px #62CB86'}}>
                    <p className='p__poppins sb' ><a href='#kebijakan'>Budget</a></p>
                </div>
                <div className='app__faq-link-item' onClick={() => setActive("Guarantee")} style={{ background: '#319B55', boxShadow: '0px 12px 24px #3EBA68'}}>
                    <p className='p__poppins sb' ><a href='#kebijakan'>Guarantee</a></p>
                </div>
                <div className='app__faq-link-item' onClick={() => setActive("General")} style={{ background: '#166731', boxShadow: '0px 12px 24px #319B55'}} id='General'>
                    <p className='p__poppins sb' ><a href='#kebijakan'>General</a></p>
                </div>
            </div>
            <div className='app__faq-body-right'>
                { active === "Software" && 

                    <div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Software ERP Folarium Siap Pakai Atau Harus Dirakit Terlebih Dahulu?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium hanya menyediakan sistem yang harus dirakit terlebih dahulu meski sudah tersedia core system. Karena Folarium fokus terhadap solusi dari masalah dan kebutuhan bisnis client.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Software ERP Folarium Dapat Disesuaikan dengan Kebutuhan Saya?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, Software ERP Folarium spesialis penyesuaian kebutuhan bisnis client.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Software ERP Folarium Dapat Dipasang di Smartphone/Mobile?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, Kami juga menyediakan untuk layanan mobile sesuai kebutuhan & permintaan.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Teknologi apakah yang digunakan ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Software ERP Folarium menggunakan teknologi berbasis web, yang mampu integrasi dengan seluruh kebutuhan data secara online / local network. Adapun beberapa spesifikasi sebagai berikut :</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Folarium memberikan Source Code-Nya ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, Source Code menjadi milik client untuk Model Custom Made.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah bisa implementasi ERP Folarium dengan partial ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Bisa, Implementasi ERP FOlarium dapat dilakukan bertahap sesuai dengan anggaran Perusahaan Anda</p>
                            </div>
                        </div>
                    </div>
        

                }
                { active === "Services" && 
                
                    <div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Bagaimana apabila perusahaan kami belum memiliki TOR/KAK (Kerangka Acuan Kerja)?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Anda dapat menggunakan layanan Analysis & Consulting serta Architecture Design. Lebih lengkap silahkan kunjungi halaman layanan kami.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Folarium dapat membantu terkait perubahan bisnis yang dikarenakan penerapan ERP?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, Tim Folarium mampu membantu perusahaan anda sebagai konsultan bisnis terkait pra/pasca implementasi ERP.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Software ERP Folarium memiliki layanan after sales ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, Folarium memiliki 3 layanan after sales yang dapat di kunjungi pada halaman after sales..</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Bagaimana caranya kami ingin mengembangkan ERP Folarium ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Silahkan menggunakan layanan after sales Long Ter Development. Informasi lebih lanjut silahkan kunjungi layaanan after sales di website resmi Folarium</p>
                            </div>
                        </div>
                    </div>

                }
                { active === "Budget" && 
                    <div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Berapa biaya implementasi ERP Folarium ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Untuk modul umum seperti Accounting, Human Resource, Purchase, Warehouse & Sales mulai dari 800 Juta. Biaya tersebut akan disesuaikan sesuai kebutuhan.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Biaya apa saja yang perlu dipersiapkan dalam implementasi ERP ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Selain biaya software, adapun yang perlu dipersiapkan/direncanakan antara lain :</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Bagaimana cara pembiayaan implementasi ERP di Folarium ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium menyediakan 2 metode pembiayaan, antara lain :</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah kami dapat meng-implementasi ERP dengan dana terbatas?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Tentu saja bisa, anda dapat mengimplementasikan ERP dengan model siap pakai. Untuk keperluan ERP Custom dengan terbatas, sangat tidak disarankan dikarenakan akan berdampak gagalnya implementasi.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Folarium mendukung implementasi ERP Custom dengan dana terbatas ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Saat ini Folarium belum mendukung implementasi ERP Custom dengan dana terbatas karena berdasarkan pengalaman kami dan mitra akan berdampak kegagalan dalam implementasi ERP.</p>
                            </div>
                        </div>
                    </div>
                }
                { active === "Guarantee" && 
                
                    <div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Bagaimana garansi terkait software ERP Folarium?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium memberikan garansi 3 bulan serta free maintenance 3 bulan dengan total monitoring implementasi ERP 6 bulan.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Bagaimana Folarium menjamin ERP tersebut dapat diimplementasikan?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Selama Client mengikuti seluruh prosedur dan tahapan dalam implementasi dengan mengacu spesifikasi berikut :</p>
                            </div>
                        </div>
                    </div>
                }
                { active === "General" && 
                
                    <div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Mengapa diwebsite Folarium tidak terdapat demo langsung ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Demo hanya kami sediakan sesuai kebutuhan bisnis saat Client memberikan informasi kondisi serta kebutuhanya dalam perusahaannya</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah kami dapat melihat demo kasus implementasi ERP di perusahaan lainnya ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium hanya dapat dapat mendemokan kasus client yang sudah diperbolehkan oleh client/owner.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah dikenakan biaya apabila kami hanya ingin konsultasi terlebih dahulu ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Ya, untuk pertemuan yang kedua dan berikutnya akan dikenakan biaya layanan. Seluruh biaya transportasi, akomodasi, dining selama konsultasi mulai pertemuan pertama menjadi tanggung jawab client.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Folarium dapat menyediakan infrastruktur guna mendukung penerapan ERP?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium tidak menyediakan infrastruktur tetapi mitra kami dapat membantu dalam pengadaan infrastruktur perusahaan anda.</p>
                            </div>
                        </div>
                        <div className='app__faq-body-item'>
                            <div className='app__faq-item-title'>
                                <p className='p__poppins m'>Apakah Folarium memang sebuah perusahaan nyata dan terdaftar ?</p>
                                <FontAwesomeIcon className='plus' icon={faPlus} />
                            </div>
                            <div className='app__faq-item-isi' style={{visibility: ''}}>
                                <p className='p__poppins'>Folarium memiliki 2 lokasi kantor yang terletak di Jakarta dan Yogyakarta. Sebelum menjalin kerjasama, untuk membutkikannya silahkan berkunjung kekantor kami sesuai alamat yang tertera di website resmi Folarium</p>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default FAQ