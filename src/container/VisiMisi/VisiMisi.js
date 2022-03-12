import React from 'react'

import './VisiMisi.css'

const VisiMisi = () => {
  return (
    <div className='app__visiMisi'>
        <div className='app__visiMisi-title'>
            <p className='p__outfit '>OUR VISION & MISION</p>
        </div>
        <div className='app__visiMisi-desc'>
            <div className='app__visiMisi-descContent'>
                <p className='p__outfit'>Sebagai penyedia solusi sistem informasi terintergasi yang inovatif</p>
                <ul className='app__visiMisi-point'>
                    <li className='app__visiMisi-item p__outfit'>
                        <p>• Menghadirkan sistem informasi terintegrasi yang efektif dan efisien.</p>
                        <div></div>
                    </li>
                    <li className='app__visiMisi-item p__outfit'>
                        <p>• Menerapkan teknologi dan standar yang terukur dan sesuai kebutuhan.</p>
                        <div></div>
                    </li>
                    <li className='app__visiMisi-item p__outfit'>
                        <p>• Menyediakan layanan-layanan pendukung penerapan sistem informasi terintegrasi.</p>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default VisiMisi