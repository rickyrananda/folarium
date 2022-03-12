import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faThLarge, faEye, faClock, faChevronRight, faTag} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import images from '../../constants/images'
import './Detail.css'

const Detail = () => {
  return (
    <div className='app__detail'>
        <div className='fade'></div>
        <div className='app__detail-title-container'>
            <div className='app__detail-title'>
                <p className='p__poppins sb'>5 Tips Mengevaluasi Kegagalan Bisnis</p>
            </div>
            <div className='app__detail-time'>
                <p className='p__poppins'><FontAwesomeIcon icon={faThLarge} style={{ marginRight: '10px' }} />Business</p>
                <p className='p__poppins'><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px'}} />25 Januari 2022</p>
                <p className='p__poppins'><FontAwesomeIcon icon={faEye} style={{ marginRight: '10px'}} />1.248</p>
            
            </div>
            <div className='app__detail-socials'>
                <div className='app__detail-social'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className='app__detail-social'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className='app__detail-social'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
            <img src={images.A7} />
        </div>
        <div className='app__detail-main'>
            <div className='app__detail-left'>
                <p className='p__poppins'>Keluar dari rasa terpuruk dari kegagalan bisnis adalah apa yang perlu dilakukan pemilik bisnis sesegera mungkin. Setelah mengalami kegagalan usaha, Anda akan belajar banyak hal penting untuk menjalankan bisnis Anda. Semua hal baik dan buruk, termasuk kegagalan, wajar terjadi dalam bisnis.
                </p>
                <p className='p__poppins'>Namun, pada prinsipnya, berbagai cara atau strategi dapat mencegah atau             meminimalkan kegagalan yaitu dengan evaluasi. Bagaimana cara bangkit kembali dan mengevaluasi kesalahan yang sebelumnya terjadi?</p>
                <div className='app__detail-baca'>
                    <p className='p__poppins'>Baca Juga: <a href='#'>5 Trend Marketing 2022 Untuk Peningkatan Pemasaran Bisnis Anda</a></p>
                </div>
                <h1 className='p__poppins sb'>1. Sediakan Waktu Berpikir yang Cukup
</h1>
                <p className='p__poppins'>Waktu untuk berpikir kembali dengan tenang dan relaks sangatlah penting. Untuk bisa bangkit dari kegagalan bisnis, pertama kali adalah menerima keadaan. Dengan menerima kenyataan tersebut, pikiran akan jauh lebih tenang. 
</p>
                <p className='p__poppins'>Anda tidak bisa memilih untuk terus terpuruk. Coba tanamkan pikiran positif. Percayalah bahwa Anda masih memiliki kesempatan. Setelah diri Anda lebih positif, Anda baru bisa melakukan langkah selanjutnya.
</p>
                <h1 className='p__poppins sb'>2. Temukan Support System
</h1>
                <p className='p__poppins'>Jika melakukan seluruhnya sendiri, mungkin Anda akan merasa sangat sulit untuk keluar dari kegagalan. Untuk itu, Anda perlu menemukan support system yang dapat membangkitkan semangat baru. Anda bisa mempercayakan keluarga atau teman dekat.
</p>
                <p className='p__poppins'>Anda akan lebih memahami situasi yang Anda hadapi. Bahkan, Anda pun bisa belajar dari pengalaman atau sudut pandang mereka. 
</p>
                <h1 className='p__poppins sb'>3. Evaluasi Keuangan
</h1>
                <p className='p__poppins'>Jangan lupa untuk mengevaluasi kondisi keuangan Anda. Hitung dengan cermat berapa dana yang ada dan bagaimana keuangan yang disisakan dari bisnis Anda.
</p>
                <p className='p__poppins'>Jika ternyata Anda tidak memiliki dana yang cukup untuk modal kembali, coba pikirkan rencana apa yang sanggup Anda lakukan. Fokus juga pada pengelolaan alokasi dana.
</p>
                <h1 className='p__poppins sb'>4. Cari Peluang Baru
</h1>
                <p className='p__poppins'>Setelah melalui semua fase sebelumnya, saatnya untuk mulai mencari peluang bisnis baru. Anda dapat mengulangi upaya sebelumnya untuk memperbaiki kesalahan. Anda juga dapat mencari model bisnis yang baru.
</p>
                <p className='p__poppins'>Anda dapat melakukan proyeksi bisnis Anda kedepannya. Cobalah memulai lembaran baru. Dengan persiapan yang lebih matang, bukan tidak mungkin usaha baru Anda bisa sukses besar.
</p>
                <h1 className='p__poppins sb'>5. Susun Perencanaan yang Matang
</h1>
                <p className='p__poppins'>Susun ide bisnis baru Anda dengan cermat agar tidak jatuh ke lubang yang sama. Belajar dari pengalaman masa lalu dan jauhi kesalahan masa lalu. Anda bisa mendapatkan gambaran umum tentang rencana Anda kedepannya.
</p>
                <p className='p__poppins'>Buatlah rencana yang detail. Luangkan waktu Anda untuk menimbang semua aspek usaha. Disarankan juga untuk membuat target yang jelas.
</p>
                <p className='p__poppins'>Motivasi yang kuat mendorong Anda untuk bersemangat dan kreatif untuk menjalankan bisnis Anda. Selain itu, semakin banyak strategi bisnis yang dapat diterapkan, Anda bisa menghindari kegagalan bisnis sebaik mungkin.</p>
                <div className='app_detail-keywords'>
                    <p className='p__poppins sb'><FontAwesomeIcon icon={faTag} style={{ marginRight: '10px'}}/>Keyword:</p>
                    <div className='app__detail-keyword'>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Kegagalan Usaha</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Faktor Kegagalan Usaha</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Kegagalan Bisnis</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Bisnis</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Wirausaha</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Pengusaha</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Tips Bisnis</p>
                        </div>
                        <div className='app__detail-k-item'>
                            <p className='p__poppins'>Folarium</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='app__detail-right'>
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

export default Detail