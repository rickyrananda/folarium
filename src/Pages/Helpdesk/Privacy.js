import React from 'react'

import images from '../../constants/images'
import './Privacy.css'

const Privacy = () => {
  return (
    <div className='app__term'>
        <div className='app__term-top' style={{ background: 'linear-gradient(94.85deg, #EF7575 0%, #A02020 100%)'}}>
            <img src={images.privacy} />
            <div className='app__term-top-title'>
                <p className='p__poppins'>Help Desk</p>
                <p className='p__poppins sb'>Privacy Policy</p>
            </div>
        </div>
        <div className='app__term-link'>
            <div className='app__term-link-item' style={{ background: '#FF9999', boxShadow: '0px 12px 24px #FFCBCB'}}>
                <p className='p__poppins sb' ><a href='#kebijakan'>Kebijakan Privasi</a></p>
            </div>
            <div className='app__term-link-item' style={{ background: '#E45A5A', boxShadow: '0px 12px 24px #FF9C9C'}}>
                <p className='p__poppins sb'><a href='#data'>Data Pribadi</a></p>
            </div>
            <div className='app__term-link-item' style={{ background: '#E84747', boxShadow: '0px 12px 24px #FF6F6F'}} >
                <p className='p__poppins sb'><a href='#keamanan'>Keamanan</a></p>
            </div>
        </div>
        <div className='app__term-body'>
            <div>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                PT. FOLARIUM INNOTEK INDONESIA ("Folarium ERP" atau kami) adalah pemilik konten dan operator situs web https://www.folarium.co.id, situs terkait dan microsites yang diakses melalui situs web tersebut dan aplikasi Folarium ERP serta segala layanan yang disediakan di dalamnya dan layanan lain yang mungkin disediakan Folarium ERP dari waktu ke waktu (secara bersama-sama "Layanan").
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='kebijakan'>
                Kebijakan Privasi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kami menghargai privasi data dan informasi pribadi dan perusahaan anda, selaku Pelanggan dan Pengguna Layanan ("<b>Karyawan</b>","<b>Mitra</b>","<b>Pelanggan</b>", "<b>Anda</b>"), serta berkomitmen untuk melindungi data dan informasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, mengolah, menggunakan dan mengungkapkan data dan informasi Anda ("<b>Kebijakan Privasi</b>"). Setiap Data Pribadi yang telah dituangkan di Layanan ini diperuntukkan khusus untuk Layanan Folarium ERP. Halaman ini memberikan penjelasan kepada Anda mengenai Kebijakan Folarium ERP terkait dengan pengumpulan, Pelangganan dan pengungkapan Data Pribadi untuk Layanan Folarium ERP.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kami merancang Kebijakan Privasi ini untuk menjelaskan kepada Anda bagaimana kami mengumpulkan, menggunakan, dan membagikan informasi pribadi Anda. "Informasi pribadi" berarti informasi apa pun yang dapat digunakan untuk mengidentifikasi Anda secara pribadi (tidak termasuk informasi apa pun yang telah dikumpulkan atau dibuat anonim) dan sebagaimana ditafsirkan berdasarkan Peraturan Menteri Komunikasi dan Teknologi Informasi No. 20 tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik (selanjutnya disebut sebagai "Peraturan 20/2016").
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP menggunakan Data Pribadi Anda hanya untuk kebutuhan pengembangan dan peningkatan kualitas Layanan Folarium ERP atau kebutuhan lainnya yang wajar dan tidak bertentangan dengan peraturan perundang-undangan yang berlaku di Indonesia. Dengan memberikan Data Pribadi ini, Anda setuju atas pengumpulan dan Pelangganan informasi yang tertuang di dalam Kebijakan Privasi untuk Layanan Folarium ERP ini.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Anda memahami bahwa untuk memberikan Layanan yang terbaik untuk Anda, Folarium ERP dapat melakukan integrasi Layanan dengan sistem, aplikasi atau piranti lunak pihak ketiga. Sehubungan dengan integrasi tersebut, Kebijakan Privasi ini tidak berlaku terhadap sistem, aplikasi atau perangkat lunak pihak ketiga manapun tersebut yang terintegrasi dengan Layanan, atau segala produk, jasa atau usaha lainnya milik pihak ketiga. Mengingat sistem, aplikasi atau piranti lunak pihak ketiga tersebut mungkin memiliki kebijakan privasi yang berbeda, kami menyarankan agar Anda membaca kebijakan privasi tersebut sebelum menggunakan Layanan yang terintegrasi dengan sistem, aplikasi atau perangkat lunak pihak ketiga. Anda juga memahami bahwa Informasi Pelanggan (sebagaimana didefinisikan di bawah) yang mungkin diungkapkan kepada mitra pihak ketiga tersebut berdasarkan Kebijakan Privasi ini, setelah diungkapkan, akan berada di luar kendali kami.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Anda wajib membaca Kebijakan Privasi ini sebelum menggunakan Layanan. Dengan menggunakan setiap produk dan/atau Layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami dan setuju terhadap ketentuan-ketentuan Kebijakan Privasi ini.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Pengakuan dan persetujuan Anda terhadap Kebijakan Privasi ini juga berkaitan dengan ketentuan yang tercantum berdasarkan Ketentuan Penggunaan yang dianggap sebagai satu kesatuan dan tidak dapat dipisahkan.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                Pengumpulan dan Penggunaan Informasi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP berhak mengumpulkan informasi pada saat Pelanggan akan menggunakan Layanan Folarium ERP, pada saat Pelanggan menyediakan informasi sebagai bagian dari proses verifikasi identitas, pada saat dilakukannya transaksi, atau pada saat Pelanggan meminta tanda terima secara digital. Folarium ERP berhak mengumpulkan, namun tidak terbatas pada mengumpulkan hal-hal sebagai berikut:
                </p>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Data atau informasi umum Pelanggan, seperti nama, alamat email, alamat kantor, nomor telepon, agama, dan tanggal lahir.</p></li>
                    <li className='p__poppins'><p>Identifikasi, termasuk nomor kartu identifikasi dan kartu loyalitas.</p></li>
                    <li className='p__poppins'><p>Kontak, termasuk alamat kantor, alamat penagihan, alamat pengiriman, alamat email, nomor telepon, data penanggung jawab (contact person).</p></li>
                    <li className='p__poppins'><p>Keuangan, termasuk bank, rekening bank, kartu kredit dan informasi rincian keuangan.</p></li>
                    <li className='p__poppins'><p>Transaksi, termasuk rincian pembayaran dan dokumen penjualan ke dan dari Anda, lokasi outlet dan rincian lain terkait produk dan layanan yang Anda gunakan atau beli dari kami.</p></li>
                    <li className='p__poppins'><p>Pemasaran dan Komunikasi, termasuk preferensi Anda dalam menerima materi pemasaran dan komunikasi dari kami dan mitra kami.</p></li>
                    <li className='p__poppins'><p>Data dan Informasi apa pun yang diunggah oleh Anda atau informasi apa pun tentang produk dan layanan Anda;</p></li>
                    <li className='p__poppins'><p>Informasi yang melekat pada Anda saat Anda mengakses Situs, Aplikasi dan/atau Layanan;</p></li>
                    <li className='p__poppins'><p>Setiap informasi tertentu dari sistem Anda yang dicatat dan dikumpulkan secara otomatis oleh Folarium ERP dengan menggunakan berbagai tipe teknologi pelacakan, seperti alamat Protokol Internet (IP address), peralatan yang unik atau identitas pengguna (user ID), versi dari piranti lunak yang digunakan, tipe sistem, tanggal, waktu, dan detil dari transaksi-transaksi Anda, geo tagging (geo-location), dan informasi dari akun Anda yang disediakan oleh untuk publik oleh Anda;</p></li>
                </ol>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                (Seluruh jenis informasi di atas selanjutnya disebut sebagai "<b>Informasi Pelanggan</b>").
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kami berhak, dari waktu ke waktu, melakukan verifikasi terhadap informasi pribadi yang Anda berikan kepada kami, dengan mengirimkan surat verifikasi, e-mail, atau mengharuskan Anda untuk mengirimkan dokumentasi pendukung, atau cara apa pun, sebagaimana yang diminta.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Anda dengan ini setuju bahwa Informasi Pribadi Anda dapat diungkapkan kepada pihak-pihak sebagai berikut: (a) afiliasi dan anak perusahaan, agen dan subkontraktor Perusahaan; (b) pemerintah, badan pengatur, dan lembaga pencegah penipuan untuk tujuan mengidentifikasi, mencegah, mendeteksi atau menanggulangi penipuan, pencucian uang, atau kejahatan lainnya, dan untuk tujuan yang sah lainnya; (d) kepada pihak ketiga untuk tujuan manajemen risiko (e) entitas lain yang mungkin diwajibkan oleh hukum atau sebagai kepentingan publik dapat menjamin, untuk tujuan yang dijelaskan dalam paragraf berikutnya; dan (f) pembeli pada saat terjadinya akuisisi. Anda memahami dan menyadari bahwa pengungkapan tersebut harus dibuat dan setuju untuk mengesampingkan hak Anda untuk mengajukan klaim ganti rugi, sejauh diizinkan oleh undang-undang.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='data'>
                Penggunaan Data Pribadi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP menggunakan informasi tentang Anda untuk menyediakan, memelihara, dan meningkatkan layanan kami dan untuk menyampaikan informasi dan dukungan yang Anda minta, termasuk tanda terima, peringatan, dan dukungan serta pesan-pesan iklan administratif.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Informasi Pelanggan dan informasi lainnya yang Anda berikan dan jika relevan, untuk penggunaan, atau berlangganan, atau pembelian Layanan dan/atau produk kami, termasuk informasi tambahan yang selanjutnya Anda berikan, dapat digunakan dan diolah oleh kami untuk tujuan berikut :
                </p>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Menjalankan usaha kami dan membantu kami dalam menyediakan, menjaga, dan meningkatkan Layanan;</p></li>
                    <li className='p__poppins'><p>Mengirimkan informasi dan mendukung permintaan Folarium ERP, termasuk tanda terima, pengingat, dan pesan dukungan serta pesan administrasi;</p></li>
                    <li className='p__poppins'><p>Mengirimkan kepada Anda, berita dan informasi tentang Layanan serta mengkomunikasikan kepada Anda mengenai produk, jasa, promosi, dan informasi terbaru yang ditawarkan Folarium ERP dan mitra-mitra yang ditunjuknya;</p></li>
                    <li className='p__poppins'><p>Memberikan beberapa pilihan mengenai kegunaan informasi kami yang sesuai dengan Anda;</p></li>
                    <li className='p__poppins'><p>Memberikan penjelasan yang terbuka dan jelas mengenai bagaimana kami menggunakan informasi tersebut;</p></li>
                    <li className='p__poppins'><p>Mempublikasikan atau membagikan informasi yang telah dikombinasi dari beberapa pengguna dan/atau pelanggan, namun tentu saja dengan cara tidak akan membiarkan Anda atau orang lain teridentifikasi;</p></li>
                    <li className='p__poppins'><p>Mengagregasikan data akun Anda, yang sudah diunggah dan non-personal sehingga Anda tidak dapat diidentifikasi, dengan data milik pengguna lain Layanan untuk meningkatkan kualitas pelayanan, merancang promosi atau memberikan cara bagi Anda untuk membandingkan praktek bisnis dengan pengguna lainnya;</p></li>
                    <li className='p__poppins'><p>Untuk memperoleh dan mengumpulkan Informasi Pelanggan, serta menyimpan Informasi Pelanggan dalam suatu sistem elektronik yang dimiliki oleh Folarium ERP atau pihak ketiga;</p></li>
                    <li className='p__poppins'><p>Menilai dan memproses permintaan Anda terkait Layanan;</p></li>
                    <li className='p__poppins'><p>Menetapkan dan melakukan verifikasi atas identitas dan latar belakang Anda;</p></li>
                    <li className='p__poppins'><p>Membangun komunikasi antara kami dan Pelanggan;</p></li>
                    <li className='p__poppins'><p>Memproses transaksi pembayaran Anda terkait dengan Layanan;</p></li>
                    <li className='p__poppins'><p>Menanggapi pertanyaan, keluhan atau komentar dari Anda;</p></li>
                    <li className='p__poppins'><p>Mengelola partisipasi Pelanggan dalam acara atau program yang diselenggarakan Folarium ERP;</p></li>
                    <li className='p__poppins'><p>Mengolah dan menganalisis Informasi Pelanggan, termasuk untuk melaksanakan analisis pasar, baik yang dilakukan oleh Folarium ERP atau pihak ketiga;</p></li>
                    <li className='p__poppins'><p>Menampilkan, mengumumkan dan membuka akses Informasi Pelanggan kepada anak perusahaan, afiliasi, perusahaan terkait, pemegang lisensi, mitra usaha dan/atau penyedia Layanan;</p></li>
                    <li className='p__poppins'><p>Menyelidiki dan mencegah penipuan atau aktivitas ilegal lainnya;</p></li>
                    <li className='p__poppins'><p>Melakukan kegiatan internal, termasuk investigasi internal, kepatuhan, audit dan keperluan keamanan internal lainnya;</p></li>
                    <li className='p__poppins'><p>Kegiatan usaha sah lainnya dari Folarium ERP; dan</p></li>
                    <li className='p__poppins'><p>Tujuan lainnya yang akan diungkapkan kepada Anda sehubungan dengan Layanan.</p></li>
                </ol>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                (secara bersama-sama, "<b>Tujuan</b>").
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP dapat menggunakan informasi tentang Anda untuk meningkatkan, menyesuaikan, dan memfasilitasi penggunaan layanan dan produk kami untuk memberikan layanan yang lebih baik.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='keamanan'>
                Keamanan Informasi Pribadi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP memastikan bahwa informasi dan/atau Data yang dikumpulkan akan disimpan dengan aman. Folarium ERP menyimpan informasi dan/atau Data pribadi Anda selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan privasi ini.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kami menyimpan Informasi Pelanggan, selama Anda menjadi pelanggan atau pengguna dari salah satu produk dan/atau Layanan kami. Kami juga menyimpan Informasi Pelanggan untuk jangka waktu tertentu setelah Anda tidak lagi menjadi pelanggan atau pengguna dari salah satu produk dan/atau Layanan kami jika Informasi Pelanggan diperlukan untuk Tujuan yang oleh karenanya Informasi Pelanggan dikumpulkan atau untuk memenuhi persyaratan hukum.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Anda harus bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda sendiri, serta setiap dan semua aplikasi yang diajukan, kewajiban yang disetujui atau dimasukkan ke dalam dan semua kegiatan lain yang dilakukan berdasarkan akun tersebut. Anda setuju untuk segera memberi tahu kami tentang penggunaan atau pengungkapan yang tidak sah atas akun atau kata sandi Anda, setiap kegiatan tidak sah di bawah akun Anda atau pelanggaran keamanan lainnya.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kami tidak akan bertanggung jawab atas kerugian apa pun yang mungkin Anda alami akibat penggunaan pihak ketiga atas akun atau kata sandi Anda, baik dengan atau tanpa sepengetahuan Anda, tanpa kesalahan atau kelalaian dari pihak kami.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                Hukum yang Berlaku
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Setiap referensi terhadap hukum dan peraturan yang berlaku berdasarkan Kebijakan Privasi ini harus ditafsirkan sesuai dengan ketentuan yang tercantum di bawah hukum dan peraturan Republik Indonesia. Segala permasalahan akan diselesaikan secara musyawarah terlebih dahulu, dimana pihak yang bersengketa sepakat untuk menyelesaikannya pada Pengadilan Negeri Jakarta Selatan apabila dalam 30 (tiga puluh) hari sejak terjadinya musyawarah tidak menemukan kesepakatan (mufakat).
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                Perubahan Dalam Kebijakan Privasi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP dapat mengungkapkan informasi yang dikumpulkannya dalam hal diwajibkan oleh hukum yang berlaku. Sejauh yang diperbolehkan hukum yang berlaku, Folarium ERP dapat mengungkapkan informasi tersebut atas permintaan dari lembaga penegak hukum atau badan pemerintah lainnya, atau apabila Folarium ERP merasa bahwa pengungkapan tersebut dapat mencegah terjadi suatu tindakan kriminal, atau dapat membantu penyelidikan sehubungan dengan keselamatan orang banyak, untuk melindungi keamanan atau integritas dari website Folarium ERP, atau untuk membuat Folarium ERP dapat mengambil tindakan pencegahan atas kemungkinan adanya kerugian.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium ERP memiliki hak untuk mengubah kebijakan privasi sesuai dengan Syarat & Ketentuan Folarium ERP dari waktu ke waktu.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Privacy