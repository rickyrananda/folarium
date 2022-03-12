import React from 'react'

const FAQBody  = () => {
  return (
    <div className='app__faq-body-item'>
        <div className='app__faq-item-title'>
            <p className='p__poppins m'>Apakah Software ERP Folarium Siap Pakai Atau Harus Dirakit Terlebih Dahulu?</p>
            <FontAwesomeIcon className='plus' icon={faPlus} />
            <FontAwesomeIcon className='minus' icon={faMinus}  style={{ visibility: 'hidden'}} />
        </div>
        <div className='app__faq-item-isi' style={{visibility: 'hidden'}}>
            <p className='p__poppins'>1</p>
        </div>
    </div>
  )
}

export default FAQBody