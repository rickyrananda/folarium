import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import images from '../../constants/images'

import './HeroTeam.css'
import { faInstagramSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const HeroTeam = () => {
  return (
    <div className='app__team'>
        <div className='app__team-container' style={{ backgroundImage: `radial-gradient(
                50% 50% at 50% 50%,
                rgba(0, 0, 0, 0.31) 0%,
                rgba(0, 0, 0, 0.5) 100%
            ), url(${images.Cover1})` }}>
            <div className='app__team-title' >
                <p className='p__outfit sb'>Introducing</p>
                <img src={images.Folarner} />
                <p className='p__outfit'>Kami adalah keluarga yang tumbuh dari titik 0. Sebuah perjuangan yang membuat kami bangga dapat
    melayani anda sebagai Customer & Mitra kami.</p>
            </div>  
        </div>
        <div className='app__team-ceo'>
            <div className='v1'></div>
            <div className='block'></div>
            <img src={images.green} />
            <div className='app__team-ceo-center'>
                <div className='app__team-ceo-left'>
                    <p className='p__outfit m'>OUR</p>
                    <p className='p__poppins sb'>CEO</p>
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.fachrur})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Fachrus Rois H</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Chief Executive Officer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>
                </div>
                <div className='app__team-ceo-right'></div>
            </div>
            <img src={images.white} />
        </div>
        <div className='app__team-members' style={{ backgroundImage: `url(${images.cteam})`}}>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m1})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Ririn Dian Prastiwi</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Financial Accounting</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m2})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Galouh Maya</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Quality Manager</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m3})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Fauzan Natsir</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Project Manager</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m4})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Mahesa Kurniawan</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>System Analyst</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m5})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Fery Rahmad</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Back-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m6})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Dedi Prihandaru</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Back-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m7})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Alvin Ika</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Front-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m8})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Avista Rizky S</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Software QA Tester</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m9})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Khalifa Nur Maulidan</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Legal & Administration</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m10})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Medio Alvine BP</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>System Analyst</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m11})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Novi Andriani</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Account Executive</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m12})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Rizka Dwi Lestari</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Digital Marketing</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m13})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Rizki Nur S</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Software QA Tester</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m14})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Romy Dinastri PS</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Back-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m15})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Thrista Kharisma</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>System Analyst</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
            <div className='app__team-member'>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m16})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Widya Safitri BRS</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Front-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div>    
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m17})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Winda Setyaningrum</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Software QA Tester</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
                <div className='app__team-card' style={{ backgroundImage: `url(${images.m18})`}}>
                    <div className='app__team-card-desc'>
                        <div className='app__team-card-desc-name'>
                            <p className='p__poppins sb'>Yusron Fathurohman F</p>
                            <FontAwesomeIcon icon={faArrowUp} style={{ transform: 'rotate(45deg)'}}/>
                        </div>
                        <p className='p__poppins m'>Back-End Engineer</p>
                        <div className='app__team-card-desc-social'>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTeam