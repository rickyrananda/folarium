import React from 'react'

import images from '../../constants/images'
import './Term.css'

const Term = () => {
  return (
    <div className='app__term'>
        <div className='app__term-top'>
            <img src={images.term} />
            <div className='app__term-top-title'>
                <p className='p__poppins'>Help Desk</p>
                <p className='p__poppins sb'>Term & Condition</p>
            </div>
        </div>
        <div className='app__term-link'>
            <div className='app__term-link-item'>
                <p className='p__poppins sb'><a href='#akun'>Akun</a></p>
            </div>
            <div className='app__term-link-item'>
                <p className='p__poppins sb'><a href='#informasi'>Informasi Pribadi</a></p>
            </div>
            <div className='app__term-link-item'>
                <p className='p__poppins sb'><a href='#biaya'>Biaya & Pembayaran</a></p>
            </div>
        </div>
        <div className='app__term-body'>
            <div>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Ketentuan ini mengatur hubungan antara pengguna 
                dan PT FOLARIUM INNOTEK INDONESIA 
                ("<strong>Folarium ERP</strong>"), dengan 
                ketentuan-ketentuan sebagaimana tertera di bawah 
                ini yang dituangkan dalam bentuk Kontrak Elektronik.
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium dan Pengguna masing-masing disebut sebagai 
                "<b>Pihak</b>" dan secara bersama-sama 
                disebut sebagai "<b>Para Pihak</b>".
                </p>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Bahwa:
                </p>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Folarium adalah suatu perusahaan yang bergerak di bidang aktivitas pengolahan data, portal web dan/atau platform digital dengan tujuan komersial serta penyediaan layanan Sistem Integrasi ERP (Enterprise Resource Planning) dengan merek dagang "<b>Folarium ERP</b>".</p></li>
                    <li className='p__poppins'><p>Pengguna adalah suatu badan hukum dan/atau perorangan yang bergerak di bidang perdagangan barang dan/atau jasa, bertindak secara independen, menjalankan bisnisnya dengan kebijakan sendiri dan bermaksud untuk menggunakan layanan Folarium.</p></li>
                    <li className='p__poppins'><p>Ketentuan Penggunaan ini mengatur akses dan penggunaan Pengguna atas Sistem ERP Folarium, situs web https://www.folarium.co.id dan microsite, beserta konten dan produk-produk yang Folarium sediakan didalamnya (selanjutnya secara bersama-sama disebut sebagai "Platform Folarium").</p></li>
                    <li className='p__poppins'><p>Dengan menyetujui Ketentuan Penggunaan ini, Pengguna juga menyetujui Ketentuan Penggunaan tambahan, termasuk Ketentuan Penggunaan pada masing-masing Layanan, beserta setiap perubahannya yang merupakan bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini (selanjutnya, Ketentuan Penggunaan, Ketentuan Penggunaan tambahan dan setiap perubahannya secara bersama-sama disebut sebagai "Ketentuan Penggunaan"). Meskipun merupakan satu kesatuan, Ketentuan Penggunaan tambahan akan berlaku dalam hal terdapat perbedaan dengan Ketentuan Penggunaan.</p></li>
                </ol>

                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Sehubungan dengan hal tersebut di atas, Pengguna setuju atas syarat dan ketentuan seperti sebagaimana tercantum di bawah ini:
                </p>

                {/* Definisi */}
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                1. Definisi
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Kecuali secara tegas ditentukan lain dalam Ketentuan Penggunaan ini, istilah-istilah yang digunakan memiliki arti sebagai berikut:
                </p>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Afiliasi adalah (i) setiap perusahaan atau badan lainnya yang memiliki kendali atas salah satu Pihak, (ii) setiap perusahaan atau badan lainnya yang mana salah satu Pihak memiliki kendali atas perusahaan atau badan lainnya tersebut, atau (iii) setiap perusahaan atau badan lainnya yang berada di bawah kendali yang sama dengan salah satu Pihak.</p></li>
                    <li className='p__poppins'><p>Aplikasi Folarium adalah aplikasi perangkat lunak yang Folarium kembangkan dari waktu ke waktu yang berfungsi sebagai suatu sarana elektronik untuk membantu Pengguna dalam melaksanakan fungsi pengelolaan Perusahaan melalui perangkat keras.</p></li>
                    <li className='p__poppins'><p>Dokumen Administratif adalah dokumen yang menunjukkan legalitas Pengguna.</p></li>
                    <li className='p__poppins'><p>Formulir Pengguna adalah formulir pendaftaran Layanan dan/atau formulir-formulir lainnya dalam bentuk elektronik, yang berisi mengenai keterangan data dan informasi Pengguna, termasuk namun tidak terbatas pada nama, alamat dan nomor telepon Pengguna yang merupakan satu kesatuan yang tidak terpisahkan dengan Ketentuan Penggunaan ini.</p></li>
                    <li className='p__poppins'><p>Perusahaan adalah usaha yang dimiliki, dikelola dan didaftarkan oleh Pengguna di dalam Platform Folarium sebagaimana dapat diubah dan ditambah dari waktu ke waktu oleh Pengguna.</p></li>
                    <li className='p__poppins'><p>Hak Kekayaan Intelektual adalah:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Hak paten, merek dagang, hak cipta (termasuk hak dalam perangkat lunak), nama dagang, nama domain internet, topografi, hak desain, hak moral, hak-hak dalam data basis, rahasia dagang, cara penggunaan dan Informasi Rahasia lainnya, ilmu pengetahuan (know-how), ciptaan, kode piranti lunak dan hak-hak kekayaan intelektual lainnya, baik terdaftar maupun tidak terdaftar, dan termasuk sedang dalam aplikasi untuk pendaftaran, dan seluruh hak atau bentuk lain dari perlindungan yang memiliki efek yang serupa dimanapun di dunia ini yang daripadanya merupakan Hak Kekayaan Intelektual;</p></li>
                        <li className='p__poppins'><p>Hak berdasarkan lisensi, persetujuan, perintah, peraturan perundang-undangan atau berdasarkan apapun sehubungan dengan poin a di atas;</p></li>
                        <li className='p__poppins'><p>Hak yang memiliki dampak atau asal yang sama atau serupa dengan poin a dan b yang saat ini atau di kemudian hari mungkin timbul; dan</p></li>
                        <li className='p__poppins'><p>Hak untuk menuntut pelanggaran yang sudah ada dari hak-hak yang disebutkan di atas.</p></li>
                    </ol>
                    <li className='p__poppins'><p>Hari Kalender berarti periode 24 (dua puluh empat) jam berturut-turut berakhir pada Pukul 12.00 tengah malam.</p></li>
                    <li className='p__poppins'><p>Hari Kerja berarti hari yang bukan merupakan Sabtu atau Minggu atau hari libur publik atau hari libur bank di Indonesia.</p></li>
                    <li className='p__poppins'><p>Informasi Rahasia adalah data dan/atau informasi yang:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Diberikan oleh salah satu Pihak kepada Pihak lainnya, sehubungan dengan pelaksanaan Layanan oleh Folarium kepada Pengguna;</p></li>
                        <li className='p__poppins'><p>Merupakan hak milik dari, mengenai atau dibuat oleh salah satu Pihak; dan</p></li>
                        <li className='p__poppins'><p>Mengenai salah satu Pihak yang memberikan Pihak yang lain suatu manfaat bisnis atau kesempatan untuk memperoleh manfaat tersebut atau pengungkapan dari hal mana dapat merugikan kepentingan Pihak tersebut.</p></li>
                    </ol>
                    <li className='p__poppins'><p>Kebijakan Privasi adalah kebijakan privasi atas penggunaan Layanan yang dapat diakses pada https://www.folarium.co.id/privacy, sebagaimana diterapkan serta dapat diubah atau ditambahkan dari waktu ke waktu oleh Folarium yang merupakan bagian dan satu kesatuan yang tidak terpisahkan dari Ketentuan Penggunaan ini.</p></li>
                    <li className='p__poppins'><p>Kontrak Elektronik adalah perjanjian Para Pihak yang dibuat melalui sistem elektronik sebagaimana diatur dalam Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik sebagaimana telah diubah dengan Undang-Undang No. 19 Tahun 2016 tentang Perubahan Atas Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik dan Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.</p></li>
                    <li className='p__poppins'><p>Layanan adalah Sistem Folarium ERP, Fitur Modular dan/atau layanan lainnya yang Folarium sediakan dan kembangkan dari waktu ke waktu.</p></li>
                    <li className='p__poppins'><p>Mitra Pihak Ketiga Penyedia Layanan adalah pihak ketiga yang memiliki hubungan kerja sama dengan Folarium, termasuk namun tidak terbatas pada pihak ketiga yang bekerja sama dengan Folarium untuk menyelenggarakan Layanan.</p></li>
                    <li className='p__poppins'><p>Transaksi adalah setiap transaksi jual beli barang dan/atau jasa yang diproses menggunakan dan melalui Layanan.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                2. Penggunaan Platform Folarium dan Layanan
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Akses dan penggunaan Platform Folarium tunduk pada Ketentuan Penggunaan ini. Pengguna mempunyai kebebasan penuh untuk memilih menggunakan Platform Folarium atau aplikasi lain, menggunakan Layanan yang tersedia pada Platform Folarium atau tidak, atau berhenti menggunakan Platform Folarium.</p></li>
                    <li className='p__poppins'><p>Dalam hal ini Folarium memfasilitasi Pengguna dalam menyediakan piranti lunak yang mendukung kegiatan operasional usaha Pengguna yang mencakup tetapi tidak terbatas pada penyediaan Layanan dan pengelolaan Perusahaan.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                3. Pembukaan dan Pengaksesan akun Folarium
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Sebelum mengakses dan menggunakan Platform Folarium, Pengguna harus menyetujui Ketentuan Penggunaan ini dan Kebijakan Privasi, dan mendaftarkan diri dengan menyelesaikan pengisian Formulir Pengguna serta mengunggah seluruh Dokumen Administratif yang dimintakan di dalam Platform Folarium selama proses pendaftaran. Pengguna lebih lanjut dapat mengubah informasi data Pengguna yang telah dilengkapi pada fitur pengaturan dalam Platform Folarium.</p></li>
                    <li className='p__poppins'><p>Setelah melakukan pendaftaran, sistem Folarium akan menghasilkan tautan aktivasi secara otomatis dan mengirim tautan aktivasi tersebut melalui surat elektronik Pengguna yang terdaftar. Pengguna perlu melakukan aktivasi dengan menge-klik tautan tersebut. Tautan Aktivasi dihasilkan secara otomatis oleh sistem Folarium. Folarium tidak mengetahui dan tidak pernah meminta tautan aktivasi Pengguna. Jangan pernah menge-klik tautan apabila merasa tidak melakukan permintaan aktivasi.</p></li>
                    <li className='p__poppins'><p>Setelah melakukan aktivasi, sistem Folarium akan membuatkan akun untuk Pengguna yang dapat digunakan untuk mengakses Folarium dan menggunakan Layanan yang tersedia di dalamnya ("Akun"). Alamat surat elektronik yang telah Pengguna daftarkan akan melekat pada Akun Pengguna sehingga Pengguna tidak bisa membuat Akun baru dengan alamat surat elektronik yang sudah didaftarkan. Dalam hal Pengguna telah keluar dari Akun, maka Pengguna perlu memasukkan alamat surat elektronik yang telah didaftarkan.</p></li>
                    <li className='p__poppins'><p>Folarium dapat menolak proses pendaftaran Pengguna dengan alasan-alasan bahwa Pengguna diketahui, dicurigai, atau terindikasi sebagai berikut, termasuk namun tidak terbatas pada:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Tidak memiliki legalitas usaha yang valid;</p></li>
                        <li className='p__poppins'><p>Terlibat tindakan kriminal atau melanggar norma hukum, sosial, agama dan moral;</p></li>
                        <li className='p__poppins'><p>Terlibat dalam kelompok atau organisasi terlarang; dan/atau</p></li>
                        <li className='p__poppins'><p>Pertimbangan jenis lain yang ditentukan oleh Folarium dan/atau Mitra Pihak Ketiga Penyedia Layanan yang bekerja sama dengan Folarium.</p></li>
                    </ol>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='akun'>
                4. Akun
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Akun hanya dapat digunakan oleh Pengguna yang telah terdaftar di platform Folarium dan tidak bisa dialihkan kepada pihak ketiga lainnya yang tidak terotorisasi dengan alasan apapun. Folarium berhak menolak untuk memfasilitasi penggunaan Platform Folarium dan/atau Layanan jika Folarium mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Pengguna telah mengalihkan atau membiarkan Akun digunakan oleh pihak ketiga lainnya.</p></li>
                    <li className='p__poppins'><p>Keamanan dan kerahasiaan Akun, termasuk namun tidak terbatas pada nama terdaftar, alamat surat elektronik terdaftar, password, nomor telepon genggam terdaftar, rincian pembayaran dan Fitur Modular, serta kode verifikasi yang dihasilkan dan dikirim oleh sistem Folarium sepenuhnya merupakan tanggung jawab pribadi Pengguna. Semua kerugian dan risiko yang ada akibat kelalaian Pengguna menjaga keamanan dan kerahasiaan sebagaimana disebutkan ditanggung oleh Pengguna sendiri. Dalam hal demikian, Folarium akan menganggap setiap penggunaan yang dilakukan melalui Akun Pengguna sebagai permintaan yang sah dari Pengguna.</p></li>
                    <li className='p__poppins'><p>Pengguna perlu memahami bahwa Folarium atau petugas Folarium tidak akan pernah meminta detail informasi log-in Pengguna dengan cara apapun dan untuk alasan apapun, termasuk namun tidak terbatas pada username, password maupun kode verifikasi, oleh karena itu Folarium menghimbau Pengguna agar tidak memberikan data tersebut kepada pihak ketiga manapun termasuk pihak yang mengatasnamakan Folarium.</p></li>
                    <li className='p__poppins'><p>Segera beritahukan Folarium jika Pengguna mengetahui atau menduga bahwa Akun telah digunakan tanpa sepengetahuan dan persetujuan Pengguna. Folarium akan melakukan tindakan yang Folarium anggap perlu dan dapat Folarium lakukan terhadap penggunaan tanpa persetujuan tersebut.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='informasi'>
                5. Informasi Pribadi
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengumpulan, penyimpanan, pengolahan, penggunaan dan pembagian informasi pribadi Pengguna yang Pengguna berikan ketika melakukan aktivasi Akun akan tunduk pada Kebijakan Privasi, yang merupakan bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini.</p></li>
                    <li className='p__poppins'><p>Pengguna memahami dan setuju bahwa ketika Pengguna melakukan aktivasi Akun, mengakses dan/atau menggunakan Platform Folarium dan/atau Layanan, data dan informasi pribadi Pengguna yang diberikan kepada Folarium, dapat dibagikan kepada Afiliasi Folarium dan/atau Mitra Pihak Ketiga Penyedia Layanan untuk mendukung layanan Folarium kepada Pengguna. Pengguna memahami bahwa pengiriman data ini diperlukan untuk mendukung dan meningkatkan pengalaman Pengguna dalam menggunakan Platform Folarium dan/atau Layanan dan dengan ini Pengguna menyetujui pembagian data tersebut. Folarium mendorong Pengguna untuk membaca dan meninjau Kebijakan Privasi yang relevan secara menyeluruh.</p></li>
                    <li className='p__poppins'><p>Pengguna bertanggung jawab sepenuhnya atas kebenaran data dan/atau keterangan dan/atau dokumen lainnya yang diserahkan oleh Pengguna kepada Folarium dan Pengguna dengan ini membebaskan Folarium dari segala klaim, gugatan dan/atau tuntutan hukum dalam bentuk apapun dan dari pihak manapun termasuk dari Pengguna sehubungan dengan setiap informasi dan/atau data yang disampaikan oleh Pengguna kepada Folarium.</p></li>
                    <li className='p__poppins'><p>Folarium tidak akan mengungkapkan informasi pribadi Pengguna kepada pihak manapun, kecuali sebagaimana yang diizinkan berdasarkan Ketentuan Penggunaan ini dan/atau Kebijakan Privasi.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                6. Konten, Informasi dan Promosi
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Folarium dengan ini memberikan Pengguna hak untuk mengunggah dan/atau mengubah data dan/atau informasi mengenai Perusahaan, termasuk namun tidak terbatas pada katalog produk, harga produk, foto produk dan nama produk, yang ditampilkan pada Platform Folarium. Pengguna bertanggung jawab secara penuh atas seluruh konten atau substansi yang diunggahnya dan laporan atau pengaduan mengenai konten yang diunggah oleh Pengguna tersebut.</p></li>
                    <li className='p__poppins'><p>Ketika Pengguna mengunggah suatu konten ke dalam Layanan, Pengguna dengan ini memberikan Folarium suatu hak non-eksklusif di seluruh dunia yang berlaku secara terus menerus, tidak dapat dibatalkan, bebas royalti dan dapat disublisensikan untuk keperluan pelaksanaan setiap dan semua semua hak cipta, publisitas, merek dagang, hak basis data dan Hak Kekayaan Intelektual yang Pengguna miliki dalam konten, di media manapun yang dikenal sekarang atau di masa depan. Selanjutnya, untuk sepenuhnya diizinkan oleh hukum yang berlaku, Pengguna mengesampingkan hak moral dan berjanji untuk tidak menuntut hak-hak tersebut kepada Folarium.</p></li>
                    <li className='p__poppins'><p>Folarium atau pihak lain yang bekerja sama dengan Folarium dapat memberikan penawaran atau promosi ("<b>Penawaran</b>") yang dapat ditukar dengan barang, Layanan atau manfaat lain terkait dengan penggunaan Platform Folarium. Dalam hal Penawaran disediakan oleh pihak lain yang bekerja sama dengan Folarium ("<b>Penyedia Penawaran</b>"), Folarium tidak bertanggung jawab atas bagian apapun dari isi Penawaran tersebut. Akses atau penggunaan Pengguna terhadap Penawaran merupakan bentuk persetujuan Pengguna untuk tunduk pada syarat dan ketentuan yang ditetapkan oleh Folarium atau Penyedia Penawaran, termasuk terhadap Kebijakan Privasi atau Penyedia Penawaran.</p></li>
                    <li className='p__poppins'><p>Semua informasi dan Penawaran yang terdapat di Platform Folarium hanya dimaksudkan untuk memberikan Pengguna pengalaman terbaik ketika menggunakan Platform Folarium dan/atau Layanan. Pengguna tidak boleh menyalahgunakan Penawaran yang Pengguna terima selama penggunaan Platform Folarium dan/atau Layanan.</p></li>
                    <li className='p__poppins'><p>Pengguna setuju untuk menggunakan Penawaran tersebut sesuai dengan syarat, ketentuan, dan maksud dari pemberian Penawaran dan tidak akan menyalahgunakan, menguangkan, mengalihkan, menggunakan untuk kepentingan komersial atau mengambil keuntungan dengan tidak wajar dari Penawaran tersebut dengan bentuk atau cara apapun.</p></li>
                    <li className='p__poppins'><p>Pengguna memahami bahwa Penawaran tidak dapat ditukar dengan uang tunai, memiliki masa keberlakuan yang terbatas dan tunduk pada ketentuan yang berlaku untuk setiap Penawaran tersebut.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}} id='biaya'>
                7. Biaya & Pembayaran
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Folarium tidak akan mengenakan biaya apapun kepada Pengguna atas penggunaan Platform Folarium dan/atau Layanan selama tidak berlangganan Perusahaan.</p></li>
                    <li className='p__poppins'><p>Harga biaya berlangganan yang tertera di Platform Folarium adalah harga untuk setiap Perusahaan yang menggunakan Platform Folarium tanpa biaya tambahan untuk fitur modular. Harga biaya berlangganan yang tertera pada Platform Folarium dapat berubah sewaktu-waktu dengan pemberitahuan terlebih dahulu kepada Pengguna melalui sarana apapun yang ditetapkan oleh Folarium.</p></li>
                    <li className='p__poppins'><p>Pengguna memahami bahwa pembayaran atas total harga biaya berlangganan dilakukan dengan mengikuti proses pembayaran yang terdapat di dalam Platform Folarium. Pengguna wajib melakukan pembayaran dalam jangka waktu yang ditentukan di dalam Platform Folarium.</p></li>
                    <li className='p__poppins'><p>Pengguna memahami dan menyetujui bahwa seluruh biaya penggunaan Folarium sudah termasuk PPN (Pajak Pertambahan Nilai). Pajak Penghasilan Pengguna akan dilaporkan dan diurus sendiri oleh Pengguna sesuai dengan ketentuan pajak yang berlaku di peraturan perundang-undangan di Indonesia.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                8. Aplikasi Folarium
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Folarium hanya menyediakan Aplikasi Folarium yang resmi pada pasar digital resmi dimana Folarium adalah pengembang dari aplikasi tersebut, termasuk namun tidak terbatas pada pasar digital seperti Google Play Store atau Apple App Store, dan untuk digunakan hanya pada perangkat personal komputer, telepon genggam atau tablet. Mengunduh Aplikasi Folarium dari tempat lain selain pasar digital resmi dan/atau ke dalam perangkat lain selain telepon genggam atau tablet dan platform Folarium merupakan pelanggaran terhadap Ketentuan Penggunaan ini dan terhadap Hak Kekayaan Intelektual Folarium.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                9. Penambahan Perusahaan
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Pengguna dapat melakukan penambahan Perusahaan secara langsung melalui fitur pembukaan Perusahaan baru yang terdapat di dalam Platform Folarium sesuai dengan kebutuhan Pengguna. Pengguna memahami bahwa Pengguna wajib untuk memberikan detail informasi Perusahaan yang akan Pengguna tambahkan ke dalam Platform Folarium, termasuk namun tidak terbatas pada nama Perusahaan, alamat Perusahaan dan nomor telepon Perusahaan.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                10. Hak Kekayaan Intelektual
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Platform Folarium dan Layanan, termasuk namun tidak terbatas pada, nama, logo, kode program, desain, merek dagang, teknologi, basis data, proses dan model bisnis, dilindungi oleh hak cipta, merek, paten dan Hak Kekayaan Intelektual lainnya yang tersedia berdasarkan hukum Republik Indonesia yang terdaftar baik atas nama Folarium ataupun Afiliasi Folarium. Folarium (dan pemberi lisensi Folarium) memiliki seluruh hak dan kepentingan atas Platform Folarium dan Layanan, termasuk seluruh Hak Kekayaan Intelektual terkait dengan seluruh fitur yang terdapat didalamnya dan Hak Kekayaan Intelektual terkait.</p></li>
                    <li className='p__poppins'><p>Tunduk pada Ketentuan Penggunaan ini, Folarium memberikan Pengguna lisensi terbatas yang tidak eksklusif, dapat ditarik kembali, tidak dapat dialihkan (tanpa hak sublisensi) untuk mengunduh dan/atau mengakses serta menggunakan Platform Folarium, sebagaimana adanya, terbatas hanya untuk keperluan penggunaan Platform Folarium dan Layanan baik melalui aplikasi maupun web-dashboard. Hak istimewa lainnya yang tidak secara tegas diberikan dalam Ketentuan Penggunaan ini, adalah hak Folarium atau pemberi lisensi Folarium.</p></li>
                    <li className='p__poppins'><p>Folarium dapat menggunakan nama, logo, lambang, simbol, merek dagang milik Pengguna untuk tujuan promosi atau publikasi terkait penggunaan Platform Folarium dan Layanan, tanpa adanya pengalihan Hak Kekayaan Intelektual dari Pengguna kepada Folarium.</p></li>
                    <li className='p__poppins'><p>Setiap penggandaan, distribusi, pembuatan karya turunan, penjualan atau penawaran untuk menjual, penampilan baik sebagian atau seluruhnya, serta penggunaan Platform Folarium dan/atau Layanan, baik secara digital atau lainnya, termasuk namun tidak terbatas pada penggunaan aplikasi tambahan seperti aplikasi modifikasi, emulator, dan lain-lain, yang menyimpang dari Ketentuan Penggunaan ini, maupun tujuan penggunaan yang ditentukan oleh Folarium, merupakan pelanggaran terhadap Hak Kekayaan Intelektual Folarium.</p></li>
                    <li className='p__poppins'><p>Pengguna tidak boleh:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>menghapus setiap pemberitahuan hak cipta, merek dagang atau pemberitahuan hak milik lainnya yang terkandung dalam Platform Folarium;</p></li>
                        <li className='p__poppins'><p>menyalin, memodifikasi, mengadaptasi, menerjemahkan, membuat karya turunan dari, mendistribusikan, memberikan lisensi, menjual, mengalihkan, menampilkan di muka umum baik sebagian maupun seluruhnya, merekayasa balik (reverse engineer), mentransmisikan, memindahkan, menyiarkan, menguraikan, atau membongkar bagian manapun dari atau dengan cara lain mengeksploitasi Platform Folarium (termasuk perangkat lunak, fitur dan Layanan di dalamnya);</p></li>
                        <li className='p__poppins'><p>memberikan lisensi, mensublisensikan, menjual, menjual kembali, memindahkan, mengalihkan, mendistribusikan atau mengeksploitasi secara komersial atau membuat tersedia kepada pihak lain Platform Folarium dan/atau perangkat lunak dengan cara menciptakan tautan (link) internet ke Platform Folarium atau "frame" atau "mirror" setiap perangkat lunak pada server lain atau perangkat nirkabel atau yang berbasis internet;</p></li>
                        <li className='p__poppins'><p>meluncurkan program otomatis atau script, termasuk, namun tidak terbatas pada, web spiders, web crawlers, web robots, web ants, web indexers, bots, virus atau worm, atau program apapun yang mungkin membuat beberapa permintaan server per detik, menciptakan beban berat atau menghambat operasi dan/atau kinerja Platform Folarium;</p></li>
                        <li className='p__poppins'><p>menggunakan aplikasi pencarian atau pengambilan kembali situs, perangkat manual atau otomatis lainnya untuk mengambil (scraping), indeks (indexing), survei (surveying), tambang data (data mining), atau dengan cara apapun memperbanyak atau menghindari struktur navigasi atau presentasi dari Platform Folarium atau isinya;</p></li>
                        <li className='p__poppins'><p>menerbitkan, mendistribusikan atau memperbanyak dengan cara apapun materi yang dilindungi hak cipta, merek dagang, atau informasi lain yang Folarium miliki tanpa persetujuan tertulis terlebih dahulu dari Folarium atau pemilik hak yang melisensikan hak-nya kepada Folarium; dan</p></li>
                        <li className='p__poppins'><p>menggunakan dan/atau mengakses secara tidak resmi Platform Folarium untuk (i) merusak, melemahkan atau membahayakan setiap aspek dari Platform Folarium, Layanan atau sistem dan jaringan terkait; dan/atau (ii) membuat produk atau layanan tandingan serupa menggunakan ide, fitur, fungsi atau grafik menyerupai Platform Folarium.</p></li>
                    </ol>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                11. Tanggung Jawab Pengguna
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengguna bertanggung jawab penuh atas keputusan yang Pengguna buat untuk menggunakan atau mengakses Platform Folarium, Layanan dan Penawaran. Pengguna bertanggung jawab secara penuh atas setiap kerugian dan/atau klaim yang timbul dari penggunaan Platform Folarium, Layanan dan/atau Penawaran melalui Akun, baik oleh Pengguna atau pihak ketiga lainnya yang Pengguna otorisasi untuk menggunakan Akun, dengan cara yang bertentangan dengan Ketentuan Penggunaan, Kebijakan Privasi, Ketentuan Penggunaan tambahan, termasuk syarat dan ketentuan dan kebijakan privasi yang ditentukan Mitra Pihak Ketiga Penyedia Layanan, Penyedia Penawaran dan peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas untuk tujuan anti pencucian uang, anti pendanaan terorisme, aktivitas kriminal, penipuan dalam bentuk apapun (termasuk namun tidak terbatas pada kegiatan phishing dan/atau social engineering), pelanggaran Hak Kekayaan Intelektual, dan/atau aktivitas lain yang merugikan publik dan/atau pihak lain manapun atau yang dapat atau dianggap dapat merusak reputasi Folarium.</p></li>
                    <li className='p__poppins'><p>Pengguna memahami dan menyetujui bahwa Folarium dapat meminta tambahan Dokumen Administratif selama Pengguna menggunakan Platform Folarium dan Layanan. Pengguna wajib untuk memberikan Dokumen Administratif tersebut dengan cara mengunggahnya ke dalam Platform Folarium dan/atau dengan cara lain yang diinformasikan oleh Folarium.</p></li>
                    <li className='p__poppins'><p>Dalam menggunakan Platform Folarium dan Layanan, Pengguna wajib untuk memiliki seluruh lisensi dan perizinan yang diperlukan untuk terlibat dalam kegiatan usaha penyediaan barang dan/atau jasa sesuai dengan bidang usaha Pengguna. Pengguna lebih lanjut bertanggung jawab penuh apabila dikemudian hari kegiatan usaha Pengguna dinyatakan melanggar hukum, peraturan perundang-undangan dan ketertiban umum.</p></li>
                    <li className='p__poppins'><p>Pengguna bertanggung jawab sepenuhnya atas penggunaan Platform Folarium dan Layanan dalam cara yang wajar dan setuju untuk tidak meminta pertanggungjawaban dari Folarium atas segala tuntutan, kerugian, dan/atau kehilangan sehubungan dengan penggunaan Platform Folarium dan Layanan dalam cara yang tidak wajar atau tidak sesuai dengan Ketentuan Penggunaan ini dan peraturan perundang-undangan yang berlaku. Pengguna setuju bahwa Pengguna tidak akan mengaitkan Platform Folarium dan Layanan dengan aktivitas apapun yang mungkin dianggap, termasuk namun tidak terbatas, sebagai:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Melanggar Hak Kekayaan Intelektual pihak ketiga manapun;</p></li>
                        <li className='p__poppins'><p>Melanggar hak publikasi atau hak privasi pihak ketiga manapun;</p></li>
                        <li className='p__poppins'><p>Ilegal atau mendorong atau sehubungan dengan, baik secara langsung maupun tidak langsung, tindakan ilegal apapun;</p></li>
                        <li className='p__poppins'><p>Menjual penggunaan, akses, atau mereproduksi Platform Folarium dan Layanan kepada pihak ketiga manapun; dan/atau</p></li>
                        <li className='p__poppins'><p>Suatu penipuan, memperdaya, atau menyesatkan dengan cara apapun.</p></li>
                    </ol>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                12. Batasan Tanggung Jawab Folarium
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Folarium menyediakan Platform Folarium sebagaimana adanya dan Folarium tidak menyatakan atau menjamin bahwa keandalan, ketepatan waktu, kualitas, kesesuaian, ketersediaan, akurasi, kelengkapan atau keamanan dari Platform Folarium dapat memenuhi kebutuhan dan akan sesuai dengan harapan Pengguna, termasuk namun tidak terbatas pada Layanan dan Penawaran yang sepenuhnya menjadi tanggung jawab Mitra Pihak Ketiga Penyedia Layanan dan Penyedia Penawaran. Folarium tidak bertanggung jawab atas setiap kerugian atau kerusakan yang disebabkan oleh setiap kegagalan atau kesalahan yang dilakukan oleh Mitra Pihak Ketiga Penyedia Layanan dan Penyedia Penawaran ataupun kegagalan atau kesalahan Pengguna dalam mematuhi Ketentuan Penggunaan Folarium, Mitra Pihak Ketiga Penyedia Layanan dan Penyedia Penawaran.</p></li>
                    <li className='p__poppins'><p>Platform Folarium dapat mengalami keterbatasan, penundaan, dan masalah-masalah lain yang terdapat dalam penggunaan internet dan komunikasi elektronik, termasuk namun tidak terbatas pada telepon genggam, tablet dan/atau perangkat komputer Pengguna, Mitra Pihak Ketiga Penyedia Layanan dan/atau Penyedia Penawaran rusak, tidak terhubung dengan internet, berada di luar jangkauan, dimatikan atau tidak berfungsi. Folarium tidak bertanggung jawab atas keterlambatan, kegagalan pengiriman, kerusakan atau kerugian yang diakibatkan oleh masalah-masalah tersebut.</p></li>
                    <li className='p__poppins'><p>Folarium akan berusaha semaksimal mungkin untuk mengelola dan merawat Platform Folarium dan Layanan agar tetap lancar serta atas kebijakannya dapat memberikan Pengguna rekomendasi perangkat keras dan konfigurasi jaringan yang sesuai dengan Platform Folarium dan Layanan milik Folarium. Folarium dengan ini bertanggung jawab untuk memberikan bantuan teknis dan/atau operasional kepada Pengguna dalam hal terjadi gangguan yang masih termasuk dalam batas kewajaran sesuai dengan standar servis Folarium, termasuk memberikan edukasi terkait penggunaan Platform Folarium dan Layanan kepada Pengguna.</p></li>
                    <li className='p__poppins'><p>Pengguna mengakui bahwa Folarium dapat menggunakan jasa pihak ketiga untuk menyediakan perangkat keras, perangkat lunak, jaringan, sambungan, teknologi dan/atau jasa lainnya yang bertujuan untuk menunjang penggunaan Platform Folarium dan/atau Layanan. Tindakan dan kelalaian atas jasa pihak ketiga adalah di luar kendali Folarium, dan Folarium tidak menerima tanggung jawab atas kerugian atau kerusakan yang diderita sebagai akibat dari segala tindakan atau kelalaian pihak ketiga tersebut.</p></li>
                    <li className='p__poppins'><p>Folarium tidak berkewajiban untuk mengawasi akses atau penggunaan Pengguna atas Platform Folarium. Namun dari waktu ke waktu Folarium dapat melakukan pengawasan untuk memastikan kelancaran penggunaan Platform Folarium dan untuk memastikan kepatuhan terhadap Ketentuan Penggunaan ini, peraturan perundang-undangan yang berlaku, putusan pengadilan, dan/atau ketentuan lembaga administratif atau badan pemerintahan lainnya.</p></li>
                    <li className='p__poppins'><p>Folarium tidak mempunyai kewajiban apapun, termasuk untuk mengambil tindakan lebih jauh atau tindakan hukum yang dianggap perlu oleh Pengguna, Mitra Pihak Ketiga Penyedia Layanan, atau Penyedia Penawaran, terhadap setiap permasalahan atau perselisihan yang timbul antara Pengguna dan Mitra Pihak Ketiga Penyedia Layanan, atau Penyedia Penawaran. Tetapi, Folarium akan menjembatani Pengguna dan Mitra Pihak Ketiga Penyedia Layanan atau Penyedia Penawaran atas setiap permasalahan atau perselisihan yang timbul antara Pengguna dan Mitra Pihak Ketiga Penyedia Layanan atau Penyedia Penawaran dengan upaya wajar yang diperlukan. Ketika Folarium memfasilitasi penyelesaian permasalahan atau perselisihan antara Pengguna dan Mitra Pihak Ketiga Penyedia Layanan, atau Penyedia Penawaran, Folarium tidak bertindak sebagai mediator dan hal tersebut tidak menimbulkan kewajiban lebih jauh apapun terhadap Folarium.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                13. Batasan Tanggung Jawab Folarium
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pelaporan</p></li>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Apabila Pengguna mengalami gangguan sistem, mengetahui atau menduga bahwa Akun Pengguna diretas, digunakan atau disalahgunakan oleh pihak lain yang tidak terotorisasi, atau apabila perangkat telepon genggam atau tablet pribadi Pengguna hilang, dicuri, diretas atau terkena virus, segera laporkan kepada Folarium sehingga Folarium dapat segera mengambil tindakan yang diperlukan untuk menghindari penggunaan, penyalahgunaan, atau kerugian yang timbul atau mungkin timbul lebih lanjut.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Apabila Pengguna mengalami kendala atau masalah terkait Layanan atau Penawaran maka Pengguna dapat menyampaikan keluhan Pengguna melalui fitur yang Folarium sediakan atau dengan menghubungi Folarium secara langsung ke kontak yang tertera di bagian akhir Ketentuan Penggunaan ini.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Untuk menyampaikan keluhan, pertanyaan, sanggahan, dan lain-lain ("Laporan"), Pengguna perlu memberikan informasi yang cukup, termasuk namun tidak terbatas pada, ringkasan fakta yang terjadi, bukti-bukti yang Pengguna miliki, dan informasi pribadi, seperti alamat surat elektronik dan nomor telepon genggam terdaftar.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Untuk menanggapi setiap Laporan yang Pengguna sampaikan, Folarium akan melakukan verifikasi terlebih dahulu dengan mencocokan informasi yang Pengguna berikan dan informasi terkait Pengguna yang terdapat dalam sistem Folarium. Jika diperlukan, Folarium dapat secara langsung meminta Pengguna memberikan informasi yang diperlukan untuk tujuan verifikasi.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Folarium dapat menolak untuk menindaklanjuti Laporan Pengguna jika informasi yang Pengguna berikan tidak cocok dengan informasi terkait Pengguna yang terdapat dalam sistem Folarium atau apabila Laporan disampaikan terkait, terhadap, atas nama atau oleh pihak lain yang berbeda dengan pemilik Akun yang bersangkutan yang terdaftar secara resmi pada sistem Folarium. Folarium dapat memberhentikan tindak lanjut terhadap Laporan Pengguna jika Folarium, dengan kebijakan Folarium sepenuhnya, menganggap bahwa Laporan Pengguna tidak didukung oleh fakta-fakta yang cukup dan jelas, atau telah selesai.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Folarium juga dapat meneruskan Laporan Pengguna kepada Mitra Pihak Ketiga Penyedia Layanan, atau Penyedia Penawaran untuk diselesaikan secara langsung oleh Pengguna dan Mitra Pihak Ketiga Penyedia Layanan , atau Penyedia Penawaran.
                    </p>
                    <li className='p__poppins'><p>Penyelesaian Sengketa</p></li>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Setiap dan seluruh perselisihan yang timbul dari penggunaan Platform Folarium atau Layanan ("<b>Sengketa</b>") akan diselesaikan secara musyawarah untuk mufakat terlebih dahulu dalam jangka waktu 30 (tiga puluh) Hari Kalender sejak adanya pemberitahuan mengenai Sengketa tersebut.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Apabila Sengketa tidak dapat diselesaikan melalui musyawarah mufakat dalam kurun waktu 30 (tiga puluh) Hari Kalender sejak Sengketa diberitahukan, Para Pihak sepakat untuk menyelesaikan Sengketa secara final melalui arbitrase yang diselenggarakan oleh Badan Arbitrase Nasional Indonesia (BANI) sesuai dengan ketentuan-ketentuan Badan Arbitrase Nasional Indonesia (BANI) yang berlaku pada saat itu. Arbitrase akan dipimpin oleh 1 (satu) orang arbiter yang ditunjuk oleh Ketua Badan Arbitrase Nasional Indonesia (BANI) dan dilaksanakan di Jakarta, Indonesia, menggunakan Bahasa Indonesia. Putusan arbitrase akan dianggap sebagai putusan yang berkekuatan hukum tetap, mengikat dan tidak dapat digugat kembali dan karenanya Pengguna atau Folarium tidak dapat memulai suatu persidangan atau memasukan suatu gugatan di pengadilan manapun sehubungan dengan Sengketa yang timbul dari dan sehubungan dengan Ketentuan Penggunaan ini.
                    </p>
                    <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                    Setiap dan seluruh perselisihan yang timbul akibat penggunaan Layanan Mitra Pihak Ketiga Penyedia Layanan dan/atau Penyedia Penawaran diselesaikan dengan jalur penyelesaian Sengketa yang disepakati secara langsung oleh Pengguna dan Mitra Pihak Ketiga Penyedia Layanan dan Penyedia Penawaran tersebut.
                    </p>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                14. Tindakan yang Folarium Anggap Perlu
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Apabila Folarium mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Pengguna telah melakukan tindakan pelanggaran, kejahatan atau tindakan lain yang bertentangan dengan Ketentuan Penggunaan ini dan/atau peraturan perundang-undangan yang berlaku, baik yang dirujuk dalam Ketentuan Penggunaan ini atau tidak, maka Folarium berhak untuk dan dapat membekukan Akun, baik sementara atau permanen, atau menghentikan akses Pengguna terhadap Platform Folarium, termasuk Layanan dan/atau Penawaran yang terdapat di dalamnya, melakukan pemeriksaan, menuntut ganti kerugian, melaporkan kepada pihak berwenang dan/atau mengambil tindakan lain yang Folarium anggap perlu, termasuk tindakan hukum pidana maupun perdata.
                </p> 
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                15. Pernyataan dan Jaminan Pengguna
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengguna menjamin kepada Folarium bahwa jika Pengguna adalah (i) orang perorangan maka Pengguna adalah orang perorangan yang berwenang untuk melakukan tindakan hukum berdasarkan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia dan tidak sedang dalam pengampuan; atau (ii) badan hukum maka Pengguna adalah badan hukum yang didirikan berdasarkan hukum dan peraturan perundang-undangan yang berlaku di Negara Republik Indonesia.</p></li>
                    <li className='p__poppins'><p>Pengguna dengan ini menyatakan dan menjamin bahwa seluruh data, informasi pribadi dan/atau konten yang dimasukkan ke dalam Platform Folarium adalah data, informasi pribadi dan/atau konten yang sepenuhnya dimiliki oleh Pengguna, termasuk namun tidak terbatas pada informasi pribadi Pelanggan yang dimasukkan oleh Pengguna ke dalam Platform Folarium. Pengguna lebih lanjut menjamin kepada Folarium bahwa Pengguna telah mendapatkan persetujuan dari Pelanggan ataupun pemilik data atau informasi untuk bisa menggunakan dan/atau mengolah informasi pribadi Pelanggan, termasuk untuk keperluan penggunaan Layanan yang terdapat di dalam Platform Folarium.</p></li>
                    <li className='p__poppins'><p>Pengguna menjamin akan mematuhi seluruh kebijakan Know Your Business (KYB) yang diadopsi oleh Folarium sesuai dengan Ketentuan Penggunaan ini, Ketentuan Penggunaan Khusus dan/atau hukum serta peraturan yang berlaku, termasuk namun tidak terbatas pada mengumpulkan seluruh dokumentasi dan informasi lainnya yang diperlukan dari Pengguna.</p></li>
                    <li className='p__poppins'><p>Pengguna menjamin bahwa pelaksanaan hak dan/atau kewajiban yang terdapat di dalam Ketentuan Penggunaan ini tidak akan melanggar: (i) ketentuan anggaran dasar Pengguna (dalam hal Pengguna adalah badan hukum), (ii) perjanjian apapun di mana Pengguna terikat menjadi pihak di dalamnya, dan (iii) peraturan perundang-undangan yang berlaku.</p></li>
                    <li className='p__poppins'><p>Dalam menggunakan Platform Folarium dan Layanan, Pengguna wajib untuk memiliki seluruh lisensi dan perizinan yang diperlukan untuk melakukan kegiatan usaha penyediaan barang dan/atau jasa sesuai dengan bidang usaha Pengguna dan Pengguna berjanji akan menaati hukum dan perundang-undangan yang berlaku, termasuk namun tidak terbatas kepada setiap peraturan perundang-undang anti korupsi, anti suap dan anti pencucian uang yang berlaku di Negara Republik Indonesia.</p></li>
                    <li className='p__poppins'><p>Dalam melaksanakan Ketentuan Penggunaan ini, Pengguna menjamin untuk tidak menawarkan, menjanjikan, menyetujui dan mengesahkan setiap pembayaran atau pemberian, baik secara langsung maupun tidak langsung, barang atau materi yang memiliki nilai (termasuk namun tidak terbatas pada hadiah, hiburan, makanan, diskon atau kredit pribadi, atau manfaat lainnya yang tidak dibayarkan pada nilai pasar) yang mempunyai tujuan atau efek penyuapan dan korupsi yang berlaku di Indonesia atau peraturan dan hukum yang melarang setiap tindakan yang melanggar hukum untuk tujuan mendapatkan manfaat komersial bisnis.</p></li>
                    <li className='p__poppins'><p>Pengguna dengan ini menyatakan dan menjamin bahwa Pengguna tidak menyediakan konten, barang dan/atau jasa yang merupakan bagian ataupun dicurigai dan/atau sedang dalam proses hukum, namun tidak terbatas sebagai berikut:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Barang dan/atau jasa ilegal ataupun yang mengandung materi ilegal;</p></li>
                        <li className='p__poppins'><p>Terdiri dari barang dan/atau jasa yang melanggar hak kekayaan intelektual atau hak kepemilikan lainnya dari pihak ketiga;</p></li>
                        <li className='p__poppins'><p>Memfasilitasi kegiatan yang ilegal, melanggar hukum, atau tindakan pidana lainnya;</p></li>
                        <li className='p__poppins'><p>Mencantumkan kalimat penjelasan yang ambigu dan/atau tidak jelas, informasi menyesatkan serta konten dan informasi yang melanggar hukum dan peraturan yang berlaku;</p></li>
                        <li className='p__poppins'><p>Berpotensi menimbulkan konflik yang berkaitan dengan etnis, agama, ras dan kelompok;</p></li>
                        <li className='p__poppins'><p>Mengandung pornografi atau hal yang melanggar norma-norma etika; dan/atau</p></li>
                        <li className='p__poppins'><p>Mengandung penghinaan, pemerasan dan/atau konten pemfitnahan.</p></li>
                    </ol>
                    <li className='p__poppins'><p>Dengan melanjutkan akses atau penggunaan terhadap Platform Folarium dan/atau Layanan, Pengguna setuju untuk tunduk dan mematuhi semua ketentuan peraturan perundang-undangan terkait dan Ketentuan Penggunaan ini, termasuk semua perubahannya dan syarat dan ketentuan dan kebijakan privasi yang ditentukan oleh Mitra Pihak Ketiga Penyedia Jasa, dan Penyedia Penawaran. <b>Segera hentikan akses atau penggunaan Platform Folarium dan/atau Layanan jika Pengguna tidak setuju dengan Pasal apapun dari Ketentuan Penggunaan ini.</b></p></li>
                    <li className='p__poppins'><p>Dalam hal Pengguna melakukan pelanggaran atas ketentuan Pasal ini, maka Folarium berhak untuk (i) melakukan tindakan penghapusan, pembatalan dan/atau pemblokiran terhadap konten yang dilarang; (ii) menghentikan akses Pengguna terhadap Platform Folarium dan/atau Layanan; dan/atau (iii) mengakhiri Ketentuan Penggunaan ini dengan segera secara sepihak, tanpa pemberitahuan terlebih dahulu kepada Pengguna.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                16. Ganti Rugi dan Pembatasan Tanggung Jawab
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengguna dengan ini setuju untuk mengganti kerugian dan membebaskan Folarium dan/atau Afiliasi Folarium dari setiap dan seluruh klaim, kewajiban, atau tuntutan kerugian terhadap, atau diancam untuk dibawa terhadap Folarium dan/atau Afiliasi Folarium, oleh pihak manapun, sehubungan dengan:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>tindakan penipuan, kriminal atau tindakan tidak sah yang dilakukan Pengguna atau karyawan Pengguna;</p></li>
                        <li className='p__poppins'><p>setiap akses pihak ketiga yang tidak sah atau ilegal terhadap Informasi Rahasia yang diakibatkan oleh kesalahan dan/atau kelalaian Pengguna;</p></li>
                        <li className='p__poppins'><p>setiap tindakan kelalaian atau kesalahan oleh Pengguna dan/atau karyawan Pengguna;</p></li>
                        <li className='p__poppins'><p>pelanggaran Pengguna terhadap Ketentuan Penggunaan ini maupun sehubungan dengan Layanan, atau Penyedia Penawaran;</p></li>
                        <li className='p__poppins'><p>setiap pelanggaran atas ketentuan manajemen konten yang disebabkan oleh tindakan kelalaian atau kesalahan dari Pengguna dan/atau karyawan Pengguna; dan</p></li>
                        <li className='p__poppins'><p>setiap hal sehubungan dengan kerugian yang diderita oleh Pelanggan.</p></li>
                    </ol>
                    <li className='p__poppins'><p>Kewajiban Folarium atas setiap klaim yang diajukan sehubungan dengan pemberian Layanan tidak akan melebihi jumlah yang setara dengan keseluruhan biaya yang dibayarkan oleh Pengguna kepada Folarium sehubungan dengan pemberian Layanan dalam periode 1 (satu) tahun sebelum terjadinya pelanggaran.</p></li>
                    <li className='p__poppins'><p>Pengguna sepenuhnya bertanggung jawab atas Informasi Rahasia karyawan Pengguna dan Informasi Rahasia Pelanggan yang diterima oleh Pengguna. Pengguna setuju untuk melepaskan Folarium dan/atau Afiliasi Folarium dari klaim apapun yang timbul sehubungan dengan penggunaan Informasi Rahasia karyawan dan/atau Informasi Rahasia Pelanggan baik oleh Pengguna dan/atau pihak ketiga lainnya. Ketentuan dalam Pasal ini akan terus berlaku kepada Para Pihak baik setelah berakhirnya Ketentuan Penggunaan ini.</p></li>
                    <li className='p__poppins'><p>Pengguna dengan ini setuju untuk melepaskan Folarium dari klaim apapun yang timbul sehubungan dengan virus, kerusakan, gangguan, atau bentuk lain dari gangguan sistem, termasuk klaim sehubungan dengan akses tanpa otorisasi oleh pihak ketiga dan/atau klaim sebagai akibat dari penggunaan perangkat keras dan/atau jaringan yang tidak sesuai dengan rekomendasi Folarium. Pengguna wajib untuk memberitahu Folarium sesegera mungkin jika Pengguna mengalami gangguan sistem apapun sebagaimana disebutkan di atas sehingga Folarium dapat berusaha memperbaiki gangguan tersebut.</p></li>
                    <li className='p__poppins'><p>Masing-masing Pihak tidak bertanggung jawab kepada Pihak yang lainnya atas kerugian tidak langsung, konsekuensial, insidental atau hilangnya data, peluang pendapatan, keuntungan, gangguan usaha atau biaya asuransi terlepas dari apakah kerugian tersebut dapat Pihak tersebut duga atau perkirakan atau Pihak tersebut telah diberitahu akan kemungkinan kerugian tersebut.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                17. Kerahasiaan
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengguna sepakat bahwa pertukaran informasi yang muncul karena Ketentuan Penggunaan ini dikategorikan sebagai Informasi Rahasia dan untuk itu Pengguna sepakat untuk saling menjaga kerahasiaan informasi tersebut kecuali telah mendapatkan izin tertulis dari Folarium dan/atau informasi tersebut telah berlaku dan diketahui secara umum atau telah disepakati dalam Ketentuan Penggunaan ini.</p></li>
                    <li className='p__poppins'><p>Pengguna sepakat untuk tidak mengungkapkan Informasi Rahasia yang Pengguna terima kepada pihak ketiga lainnya tanpa memperoleh terlebih dahulu persetujuan dari Folarium dan akan mengambil langkah-langkah yang dinilai wajar guna mencegah pengungkapan Informasi Rahasia tersebut. Pengguna sepakat untuk tidak menggunakan, menggandakan atau mengalihkan Informasi Rahasia milik Folarium selain daripada yang diperlukan dalam melaksanakan kewajibannya dalam Ketentuan Penggunaan ini, tanpa memperoleh terlebih dahulu persetujuan dari Folarium, dan akan melakukan tindakan-tindakan pencegahan yang dinilai wajar guna mencegah terjadinya penggunaan, penggandaan atau pengalihan atas Informasi Rahasia tersebut.</p></li>
                    <li className='p__poppins'><p>Pengguna sepakat bahwa akses terhadap Informasi Rahasia yang diberikan Folarium hanya akan diberikan kepada direktur/pemilik, karyawan, akuntan dan/atau penasehat Pengguna yang memerlukan akses terhadap Informasi Rahasia untuk kepentingan pelaksanaan Ketentuan Penggunaan ini dan dengan ketentuan bahwa Pengguna bertanggung jawab atas penggunaan Informasi Rahasia oleh pihak-pihak tersebut di atas.</p></li>
                    <li className='p__poppins'><p>Pengguna wajib untuk menjaga kerahasiaan Informasi Rahasia dan sepakat untuk tidak memberitahukan dan/atau memberikan Informasi Rahasia, baik sebagian ataupun seluruhnya, kepada pihak ketiga manapun juga, selain daripada yang diperbolehkan berdasarkan Ketentuan Penggunaan ini. Untuk menghindari keraguan, ketentuan kerahasiaan sebagaimana diatur dalam Pasal ini akan berlaku dan mengikat sejak Ketentuan Penggunaan ini berlaku efektif dan akan tetap bertahan dan berlaku sampai dengan 5 (lima) tahun setelah penggunaan Pengguna atas Platform Folarium berakhir.</p></li>
                    <li className='p__poppins'><p>Folarium berhak untuk mengungkapkan Informasi Rahasia jika diwajibkan atau diminta atas perintah pengadilan atau oleh otoritas pemerintah manapun.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                18. Keadaan Kahar
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Platform Folarium dapat diinterupsi oleh kejadian di luar kewenangan atau kendali Folarium ("Keadaan Kahar"), termasuk namun tidak terbatas pada bencana alam, penyebaran wabah penyakit, gangguan listrik, gangguan telekomunikasi, kebijakan pemerintah, dan lain-lain. Pengguna setuju untuk membebaskan Folarium dari setiap tuntutan dan tanggung jawab, jika Folarium tidak dapat memfasilitasi Layanan, termasuk memenuhi instruksi yang Pengguna berikan melalui Platform Folarium dan/atau Layanan, baik sebagian maupun seluruhnya, karena suatu Keadaan Kahar.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                19. Tidak ada Persekutuan atau Keagenan
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Tidak ada bagian dalam Ketentuan Penggunaan ini yang dimaksudkan untuk, atau dapat dianggap sebagai, pendirian persekutuan atau usaha bersama apapun antara Pengguna dengan Folarium, menjadikan Pengguna sebagai bagian dan/atau perwakilan dari Folarium, atau mengizinkan Pengguna untuk membuat atau menyepakati apapun untuk dan/atau atas Folarium. Pengguna menyatakan bahwa Pengguna bertindak untuk dan atas nama Pengguna sendiri dan tidak untuk keuntungan orang lain.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                20. Pembekuan Akun
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Pengguna dapat menghapus Aplikasi Folarium dari komputer, telepon genggam dan/atau tablet Pengguna setiap saat. Folarium tidak memiliki kewajiban apapun kepada Pengguna terhadap hal-hal yang timbul sejak penghapusan Aplikasi Folarium, pembekuan sementara atau pembekuan permanen Akun. Akan tetapi, Pengguna tetap bertanggung jawab untuk menyelesaikan kewajiban-kewajiban Pengguna yang telah timbul, termasuk namun tidak terbatas pada, setiap kewajiban yang mungkin timbul akibat adanya sengketa, tuntutan, maupun tindakan hukum lainnya yang telah ada, sebelum tanggal penghapusan Aplikasi Folarium, pembekuan sementara atau pembekuan permanen Akun Pengguna.</p></li>
                    <li className='p__poppins'><p>Akun Pengguna dapat dibekukan karena hal-hal, termasuk namun tidak terbatas pada, sebagai berikut:</p></li>
                    <ol style={{ marginBottom: '20px', marginTop: '20px'}}>
                        <li className='p__poppins'><p>Melakukan pelanggaran atas Ketentuan Penggunaan ini dan/atau Kebijakan Privasi;</p></li>
                        <li className='p__poppins'><p>Laporan Pengguna bahwa Akun digunakan atau diduga digunakan atau disalahgunakan oleh pihak ketiga;</p></li>
                        <li className='p__poppins'><p>Laporan Pengguna bahwa komputer atau telepon genggam atau tablet pribadi Pengguna hilang, dicuri atau diretas;</p></li>
                        <li className='p__poppins'><p>Folarium mengetahui atau mempunyai alasan yang cukup untuk menduga bahwa Akun telah dialihkan atau digunakan oleh pihak lain tanpa persetujuan terlebih dahulu dari Folarium;</p></li>
                        <li className='p__poppins'><p>Folarium mengetahui atau dengan alasan yang cukup menduga bahwa telah terjadi hal-hal yang menurut pandangan Folarium telah atau dapat merugikan Folarium, Mitra Pihak Ketiga Penyedia Layanan, Penyedia Penawaran, atau pihak lainnya;</p></li>
                        <li className='p__poppins'><p>Sistem Folarium mendeteksi adanya tindakan yang tidak wajar dari penggunaan Akun atau adanya kewajiban berdasarkan Ketentuan Penggunaan dan/atau Kebijakan Privasi yang tidak dipenuhi oleh Pengguna;</p></li>
                        <li className='p__poppins'><p>Pengguna tidak melakukan pembayaran atas biaya berlangganan selama jangka waktu yang ditentukan di dalam Platform Folarium;</p></li>
                        <li className='p__poppins'><p>Pengguna telah meninggal dunia, ditempatkan di bawah perwalian atau pengampuan atau mengalami ketidakmampuan lainnya yang menjadikan Pengguna tidak cakap hukum berdasarkan peraturan perundang-undangan yang berlaku;</p></li>
                        <li className='p__poppins'><p>Dalam hal Pengguna mengajukan atau diajukan oleh pihak lain permohonan kepada instansi yang berwenang untuk dinyatakan pailit atau untuk diberikan penundaan membayar hutang-hutang atau telah dinyatakan berada dalam keadaan pailit atau diberikan penundaan membayar hutang-hutang oleh instansi yang berwenang;</p></li>
                        <li className='p__poppins'><p>Penggunaan Platform Folarium atau Layanan oleh Pengguna atau pihak lain yang terotorisasi (yang menggunakan Akun) dengan cara yang bertentangan dengan Ketentuan Penggunaan ini, Kebijakan Privasi atau peraturan perundang-undangan yang berlaku; dan/atau</p></li>
                        <li className='p__poppins'><p>Penggunaan Platform Folarium atau Layanan oleh Pengguna atau pihak lain yang terotorisasi (yang menggunakan Akun) dengan cara yang bertentangan dengan Ketentuan Penggunaan ini, Kebijakan Privasi atau peraturan perundang-undangan yang berlaku; dan/atau</p></li>
                    </ol>
                    <li className='p__poppins'><p>Jika Akun dibekukan dan Pengguna memiliki bukti yang jelas bahwa Akun seharusnya tidak dibekukan, Pengguna dapat membuat Laporan kepada Folarium untuk menyampaikan bukti-bukti tersebut. Setelah melakukan pemeriksaan lebih lanjut terhadap Laporan Pengguna, Folarium akan, atas kebijakan Folarium sepenuhnya, menentukan untuk mengakhiri atau melanjutkan pembekuan terhadap Akun Pengguna. Pembekuan tidak akan diteruskan secara tidak wajar apabila Folarium memutuskan bahwa hal-hal yang mengakibatkan terjadinya pembekuan telah diselesaikan.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                21. Pengakhiran Penggunaan Platform Folarium
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Akses dan/atau penggunaan Pengguna atas Platform Folarium berakhir jika Akun Pengguna dibekukan seperti sebagaimana dimaksud pada Pasal 20 di atas.</p></li>
                    <li className='p__poppins'><p>Apabila pada saat berakhirnya Ketentuan Penggunaan masih terdapat hak dan kewajiban yang belum Pengguna selesaikan, maka ketentuan-ketentuan dalam Ketentuan Penggunaan tetap berlaku dan mengikat sampai dengan Pengguna menyelesaikan sisa hak dan kewajiban tersebut.</p></li>
                    <li className='p__poppins'><p>Folarium, berdasarkan pertimbangan dan kebijakannya sendiri, berhak untuk secara sepihak mengakhiri Ketentuan Penggunaan ini (baik seluruhnya maupun sebagian) untuk seketika dan secara langsung.</p></li>
                    <li className='p__poppins'><p>Para Pihak untuk mengesampingkan berlakunya ketentuan Pasal 1266 Kitab Undang-Undang Hukum Perdata, sehingga pengakhiran yang dimaksud dapat dilakukan tanpa memerlukan putusan pengadilan dan cukup dilakukan dengan pemberitahuan tertulis.</p></li>
                </ol>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                22. Cara Menghubungi Folarium
                </h1>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Pengguna dapat menghubungi Folarium melalui surat elektronik ke support@folarium.co.id atau melalui telepon ke nomor 0812-588-0505. Semua korespondensi Pengguna akan dicatat, direkam dan disimpan untuk arsip Folarium.
                </p>
                <h1 className='p__poppins sb-24' style={{ marginBottom: '20px'}}>
                23. Lain-lain
                </h1>
                <ol style={{ marginBottom: '20px'}}>
                    <li className='p__poppins'><p>Jika, sewaktu-waktu, suatu ketentuan dari Ketentuan Penggunaan ini menjadi tidak sah, tidak berlaku, atau tidak dapat dilaksanakan berdasarkan hukum dari yurisdiksi manapun, maka keabsahan, keberlakuan atau pelaksanaan dari ketentuan lainnya maupun keabsahan, keberlakuan atau pelaksanaan dari ketentuan tersebut berdasarkan hukum dari yurisdiksi lain tidak akan menjadi terpengaruh atau terganggu.</p></li>
                    <li className='p__poppins'><p>Pengguna tidak memiliki hak untuk mengalihkan hak dan kewajiban Pengguna, baik sebagian maupun keseluruhan berdasarkan Ketentuan Penggunaan ini, tanpa persetujuan terlebih dahulu dari Folarium. Namun, Folarium dapat mengalihkan hak Folarium berdasarkan Ketentuan Penggunaan ini setiap saat kepada Afiliasi Folarium dan/atau pihak lain yang Folarium tunjuk tanpa perlu mendapatkan persetujuan terlebih dahulu dari Pengguna atau memberikan pemberitahuan sebelumnya kepada Pengguna.</p></li>
                    <li className='p__poppins'><p>Folarium tidak menjanjikan adanya eksklufitas dan karenanya Folarium memiliki hak untuk memberikan Layanan kepada setiap pesaing Pengguna. Apabila diperlukan, Folarium juga memiliki hak untuk meminta dokumen legalitas tambahan, surat pernyataan dan/atau dokumen pendukung lainnya yang berhubungan dengan Pengguna dan/atau kegiatan usaha Pengguna.</p></li>
                    <li className='p__poppins'><p>Pengguna setuju dan sepakat bahwa segala perubahan, amandemen atas Ketentuan Penggunaan ini dapat dilakukan oleh Folarium atas dasar pertimbangan Folarium sendiri. Perubahan atas Ketentuan Penggunaan ini akan berlaku setelah Folarium mengumumkan perubahan atas Ketentuan Penggunaan tersebut melalui sarana apapun yang dipilih oleh Folarium (termasuk dengan mengirimkan pemberitahuan tertulis secara langsung kepada Pengguna). Dengan melanjutkan akses dan penggunaan Platform Folarium dan/atau Layanan setelah diterimanya pemberitahuan tersebut maka Pengguna akan dianggap telah menyetujui perubahan atau amandemen tersebut dan setuju untuk terikat dengan Ketentuan Penggunaan yang sebagaimana telah diubah atau ditambahkan.</p></li>
                    <li className='p__poppins'><p>Dengan tunduk pada ketentuan yang mengatur mengenai Kontrak Elektronik, Pengguna setuju dan sepakat bahwa Ketentuan Penggunaan ini merupakan perjanjian dalam bentuk elektronik dan tindakan Pengguna menekan tombol "<b>Register</b>" pada saat pembukaan Akun atau tombol "<b>Login</b>" pada saat akan mengakses Akun merupakan persetujuan aktif Pengguna untuk mengikatkan diri dalam perjanjian dengan Folarium sehingga keberlakuan Ketentuan Penggunaan ini dan Kebijakan Privasi adalah sah dan mengikat secara hukum dan terus berlaku sepanjang penggunaan Platform Folarium dan/atau Layanan oleh Pengguna.</p></li>
                    <li className='p__poppins'><p>Pengguna setuju bahwa Pengguna tidak akan memulai atau melakukan tuntutan atau keberatan apapun sehubungan dibuatnya maupun keabsahan Ketentuan Penggunaan ini dalam bentuk Kontrak Elektronik.</p></li>
                    <li className='p__poppins'><p>Bila Pengguna tidak mematuhi atau melanggar ketentuan dalam Ketentuan Penggunaan ini, dan Folarium tidak mengambil tindakan secara langsung, bukan berarti Folarium mengesampingkan hak Folarium untuk mengambil tindakan yang diperlukan di kemudian hari.</p></li>
                    <li className='p__poppins'><p>Ketentuan Penggunaan ini diatur berdasarkan hukum Republik Indonesia.</p></li>
                </ol>
                <p className='p__poppins' style={{ marginBottom: '20px', textIndent: '45px'}}>
                Pengguna telah membaca dan mengerti seluruh Ketentuan Penggunaan ini dan konsekuensinya
dan dengan ini menerima setiap hak, kewajiban, dan ketentuan
yang diatur di dalamnya.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Term