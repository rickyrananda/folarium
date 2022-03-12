import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'
import './Blogbody.css'

const Blogbody = () => {
  return (
    <div className='app__blogBody'>
        <div className='app__blogBody-newest'>
          <p className='p__poppins sb'>Newest</p>
          <div className='app__blogBody-news-con'>
          <div className='app__blogBody-news-card'>
              <img src={images.A2} />
              <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />28 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />08:57</p>
              </div>
              <p className='p__poppins sb'>Pentingnya Customer Value Dalam Dunia Marketing</p>
              <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
            </div>
            <div className='app__blogBody-news-card'>
              <img src={images.A6} />
              <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />27 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />10:47</p>
              </div>
              <p className='p__poppins sb'>5 Tips Melakukan Training ERP Yang Efektif</p>
              <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
            </div>
            <div className='app__blogBody-news-card'>
              <img src={images.A4} />
              <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />26 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />12:57</p>
              </div>
              <p className='p__poppins sb'>5 Cara Mengelola Sistem ERP Perusahaan Anda</p>
              <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
            </div>
            <div className='app__blogBody-news-card'>
              <img src={images.A8} />
              <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
              </div>
              <p className='p__poppins sb'>Implementasi ERP Dalam Bisnis Franchise</p>
              <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
            </div>
          </div>
        </div>
        <div className='app__blogBody-main'>
          <div className='app__blogBody-left'>
            <div className='app__blogBody-list'>
              <div className='app__blogBody-card'>
                <img src={images.A9} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Ketahui Definisi Dan Cara Kerja NFT</p>
                <p className='p__poppins'>Belakangan ini, NFT mulai sering dibincangkan. NFT merupakan singakatan dari ...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
              <div className='app__blogBody-card'>
                <img src={images.A10} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Langkah Beralih Dari On Premise ERP Ke Cloud ERP</p>
                <p className='p__poppins'>Saat ini, teknologi cloud diakui lebih efektif oleh banyak perusahaan termasuk...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
            </div>
            <div className='app__blogBody-list'>
              <div className='app__blogBody-card'>
                <img src={images.A9} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Ketahui Definisi Dan Cara Kerja NFT</p>
                <p className='p__poppins'>Belakangan ini, NFT mulai sering dibincangkan. NFT merupakan singakatan dari ...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
              <div className='app__blogBody-card'>
                <img src={images.A10} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Langkah Beralih Dari On Premise ERP Ke Cloud ERP</p>
                <p className='p__poppins'>Saat ini, teknologi cloud diakui lebih efektif oleh banyak perusahaan termasuk...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
            </div>
            <div className='app__blogBody-list'>
              <div className='app__blogBody-card'>
                <img src={images.A9} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Ketahui Definisi Dan Cara Kerja NFT</p>
                <p className='p__poppins'>Belakangan ini, NFT mulai sering dibincangkan. NFT merupakan singakatan dari ...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
              <div className='app__blogBody-card'>
                <img src={images.A10} />
                <div className='app__blogBody-news-card-time'>
                  <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                  <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                </div>
                <p className='p__poppins sb'>Langkah Beralih Dari On Premise ERP Ke Cloud ERP</p>
                <p className='p__poppins'>Saat ini, teknologi cloud diakui lebih efektif oleh banyak perusahaan termasuk...</p>
                <button className='btn-artikel'><a href='#' className='p__poppins'>Read Article</a></button>
              </div>
            </div>
            <div className='app__blogBody-pages'>
              <div className='app__blogBody-paging'>
                <div className='app__blogBody-page active-page'>
                  <p className='p__poppins sb'>1</p>
                </div>
                <div className='app__blogBody-page'>
                  <p className='p__poppins sb'>2</p>
                </div>
                <div className='app__blogBody-page'>
                  <p className='p__poppins sb'><FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
                <div className='app__blogBody-page'>
                  <p className='p__poppins sb'><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='app__blogBody-right'>
              <div className='app__blogBody-popular'>
                <p className='p__poppins sb'>Popular</p>
                <div className='app__blogBody-popular-card'>
                  <img src={images.A3} />
                  <div className='app__blogBody-popular-desc'>
                    <p className='p__poppins sb'>Perbedaan Aplikasi Web Base Dan Dekstop</p>
                    <div className='app__blogBody-news-card-time'>
                      <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                      <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                    </div>
                    <p className='p__poppins m'>Read in 5 minutes</p>
                  </div>
                </div>
                <div className='app__blogBody-popular-card'>
                  <img src={images.A11} />
                  <div className='app__blogBody-popular-desc'>
                    <p className='p__poppins sb'>Perbedaan Aplikasi Web Base Dan Dekstop</p>
                    <div className='app__blogBody-news-card-time'>
                      <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                      <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                    </div>
                    <p className='p__poppins m'>Read in 5 minutes</p>
                  </div>
                </div>
                <div className='app__blogBody-popular-card'>
                  <img src={images.A5} />
                  <div className='app__blogBody-popular-desc'>
                    <p className='p__poppins sb'>5 Perusahaan Pembuat Software ERP Terbaik 2018</p>
                    <div className='app__blogBody-news-card-time'>
                      <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                      <p className='p__poppins'><FontAwesomeIcon icon={faClock} style={{ marginRight: '10px'}} />09:37</p>
                    </div>
                    <p className='p__poppins m'>Read in 5 minutes</p>
                  </div>
                </div>
              </div>
              <div className='app__blogBody-kategori'>
                <p className='p__poppins sb'>Kategori</p>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />Tips</p>
                  </div>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />System Integration</p>
                  </div>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />Data & Technology</p>
                  </div>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />Enterprise System</p>
                  </div>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />Business</p>
                  </div>
                  <div className='app__blogBody-kategori-desc'>
                    <p className='p__poppins sb'> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: '20px'}} />Human Resource</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Blogbody