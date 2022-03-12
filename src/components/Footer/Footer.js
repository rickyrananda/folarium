import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
    <div className='app__footer'>
        <div className='app__footer-column'>
            <div className='app__footer-desc'>
                <img src={images.LogoWhite} />
                <p className='p__poppins'>Folarium Merupakan Perusahaan Teknologi Dalam Bidang ERP, CRM & SCM Yang Telah Berpengalaman Lebih Dari 7 Tahun Untuk Mendukung Kinerja Bisnis Pengguna Lebih Baik</p>
                <div className='app__footer-sosmed'>
                    <a href='https://www.facebook.com/erp.folarium' target="_blank">
                        <div className='app__footer-sosmed-item'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </a>
                    <a href='https://twitter.com/erp_folarium' target="_blank">
                        <div className='app__footer-sosmed-item'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/company/erp-folarium/' target="_blank">
                        <div className='app__footer-sosmed-item'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </a>
                    <a href='http://instagram.com/erp.folarium' target="_blank">
                        <div className='app__footer-sosmed-item'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </a>
                    <a href='https://www.youtube.com/channel/UCRr9oiDWtVf3gqSOzMykieA' target="_blank">
                        <div className='app__footer-sosmed-item'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </a>
                </div>
            </div>
            <div className='app__footer-kantor'>
                <p className='p__poppins sb'>Jakarta</p>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <p className='p__poppins m'>Jl. KH. Abdullah Syafei No.23A, Jaksel</p>
                </div>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p className='p__poppins m'>+62 812 300 1024</p>
                </div>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p className='p__poppins m'>presales@folarium.co.id</p>
                </div>
            </div>
            <div className='app__footer-kantor'>
                <p className='p__poppins sb'>Tangerang</p>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <p className='p__poppins m'>Jl. WR. Supratman No 18, Ciputat, Tangsel</p>
                </div>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p className='p__poppins m'>+62 812 696 4300</p>
                </div>
                <div className='app__footer-kantor-info'>
                    <div className='app__footer-kantor-item'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p className='p__poppins m'>support@folarium.co.id</p>
                </div>
            </div>
        </div>
        <div className='app__footer-row'>
            <div className='app__footer-row-link'>
                <Link to='/team' className='p__poppins sb'>Team</Link>
                <Link to='/client' className='p__poppins sb'>Client</Link>
                <Link to='/gallery' className='p__poppins sb'>Gallery</Link>
                <Link to='/term-condition' className='p__poppins sb'>Term & Condition</Link>
                <Link to='/privacy-policy' className='p__poppins sb'>Privacy Policy</Link>
                <Link to='/faq' className='p__poppins sb'>FAQ</Link>
            </div>
            <div className='app__footer-row-cr p__poppins'>2018 © PT. Folarium Innotek Indonesia.</div>
            <div className='app__footer-row-cr p__poppins'>All Right reserved.</div>
        </div>
    </div>
);

export default Footer;
