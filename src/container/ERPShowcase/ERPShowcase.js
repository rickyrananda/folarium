import React from 'react';

import images from '../../constants/images';
import './ERPShowcase.css';


const ERPShowcase = () => {
    const [toggleState, setToggleState ] = React.useState(1);
    const toggleTab = (index) => {
        console.log(index)
        setToggleState(index)
    }

    return (
        <div className='app__erpshowcase'>
            <div className='app__listContainer'>
                    <ul className='app__listContent'>
                        <li className={toggleState === 1 ? 'app__list-item active' : 'app__list-item'} onClick={() => toggleTab(1)} ><p className='p__poppins'><b>FINANCE</b> & CONTROLLING (FICO)</p></li>
                        <li className={toggleState === 2 ? 'app__list-item active' : 'app__list-item'} onClick={() => toggleTab(2)} ><p className='p__poppins'><b>HUMAN</b> CAPITAL MANAGEMENT (HCM)</p></li>
                        <li className={toggleState === 3 ? 'app__list-item active' : 'app__list-item'} onClick={() => toggleTab(3)} ><p className='p__poppins'><b>OFFICE</b>MANAGEMENT (OM)</p></li>
                        <li className={toggleState === 4 ? 'app__list-item active' : 'app__list-item'} onClick={() => toggleTab(4)} ><p className='p__poppins'><b>EMPLOYEE</b> SELF SERVICE (ESS)</p></li>
                    </ul>
                </div>
                <div className='app__bodyContainer'>
                    <div className={toggleState === 1 ? 'app__bodyContent bodyContent-active' : 'app__bodyContent'}>
                        <div className='app__bodyContent-row'>
                            <img src={images.Fa1} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Accounting Management</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Hasilkan Laporan Akuntansi Keseluruhan Dengan Data Transaksi Anda Secara Real-Time</li>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Lap. Neraca, Neraca Saldo, Rugi/Laba, Buku Besar, Arus Kas & Lap. Referensi.</li>
                                    <li className='app__bodyContent-item p__poppins'>Kelola Pengeluaran Perusahaan Dengan Menggunakan E-Approval yang Dirancang Untuk Atasan.</li>
                                    <li className='app__bodyContent-item p__poppins'>Alat Dukungan Untuk Validasi Entri Data</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Financial Analytic</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Metode Pelacakan dengan Transaksi Data Referensi</li>
                                    <li className='app__bodyContent-item p__poppins'>Analisa Keuangan dengan Proyeksi Arus Kas & Realisasi Anggaran</li>
                                    <li className='app__bodyContent-item p__poppins'>Analisa Rasio dengan Current, Cash, Debt, Profit Margin,Return On Total Assets, Return On Owner Equity, EBIT,EAIT, Net Earning Power Ratio, Total Aset Turn Over & ReceivableTurn Over</li>
                                </ul>
                            </div>
                            <img src={images.Fa2} />
                        </div>
                        <div className='app__bodyContent-row'>
                            <img src={images.Fa3} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Debts and Receivables</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Kelola Piutang / Hutang Mitra, Karyawan, Vendor atau Proyek</li>
                                    <li className='app__bodyContent-item p__poppins'>Lacak Dana berdasarkan Tanggal Penerimaan / Pembayaran Sejak Penjualan / Pembelian Dibuat.</li>
                                    <li className='app__bodyContent-item p__poppins'>Menerapkan Pembayaran ke Faktur Berdasarkan Nomor Pelacakan Unik (mis .: Nomor atau ID Faktur)</li>
                                    <li className='app__bodyContent-item p__poppins'>Transaksi Terintegrasi Secara Otomatis</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Automatic Journal</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Mudah Digunakan Oleh Junior atau Ahli Akuntansi</li>
                                    <li className='app__bodyContent-item p__poppins'>Mendukung Jurnal Otomatis dengan Pengajuan Anggaran</li>
                                    <li className='app__bodyContent-item p__poppins'>Sesuaikan Kode Akun Berdasarkan Kebutuhan Perusahaan Anda (Misal : Jenis Industri, dll.).</li>
                                    <li className='app__bodyContent-item p__poppins'>Kelola Arus Kas dan Dana dengan Mengintegrasikan Modul Lain pada Entri Jurnal, seperti Penjualan & Pembelian</li>
                                </ul>
                            </div>
                            <img src={images.Fa4} />
                        </div>
                    </div>
                    <div className={toggleState === 2 ? 'app__bodyContent bodyContent-active' : 'app__bodyContent'}>
                        <div className='app__bodyContent-row'>
                            <img src={images.HR1} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Employee Database & Work-Contract</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Informasi Secara Rinci Terkait Karyawan</li>
                                    <li className='app__bodyContent-item p__poppins'>Perhitungan Otomatis BPJS & Pph 21 Nett / Gross-Up</li>
                                    <li className='app__bodyContent-item p__poppins'>Terintegrasi dengan Portal Employee Self-Services Sebagai Rekam Jejak Kontrak Kerja</li>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Pengingat Kontrak Yang Hampir Habis</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Submission Review (E-Approval)</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Full Mendukung Kebutuhan Integrasi dengan Modul Human Resource</li>
                                    <li className='app__bodyContent-item p__poppins'>Mendukung Otorisasi Approval Via Divisi</li>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Notifikasi Bagi Pengguna Yang Mengajukan</li>
                                </ul>
                            </div>
                            <img src={images.HR2} />
                        </div>
                        <div className='app__bodyContent-row'>
                            <img src={images.HR3} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Payroll & Automatic Calculation</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Perhitungan Otomatis Pph21, BPJS, Pinjaman & Lembur</li>
                                    <li className='app__bodyContent-item p__poppins'>Lebih mudah melakukan pengajuan dengan 2 langkah</li>
                                    <li className='app__bodyContent-item p__poppins'>Terintegrasi dengan modul Finance Accounting Serta Jurnal Otomatis</li>
                                    <li className='app__bodyContent-item p__poppins'>Mendeteksi Kontrak Karyawan Terduplikasi</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Analytic & Reminder</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Analisa Statistik Usia, Pendidikan, Kemampuan,Kemahiran, Posisi dan lainnya.</li>
                                    <li className='app__bodyContent-item p__poppins'>Tersedia Notifikasi Kontrak Karyawan Habis, Ulang Tahun Karyawan Serta Kehadiran Harian Secara Real-Time</li>
                                    <li className='app__bodyContent-item p__poppins'>Lebih Mudah Dalam Menganalisa Perkembangan SertaData Informasi Karyawan</li>                               
                                </ul>
                            </div>
                            <img src={images.HR4} />
                        </div>
                    </div>
                    <div className={toggleState === 3 ? 'app__bodyContent bodyContent-active' : 'app__bodyContent'}>
                        <div className='app__bodyContent-row'>
                            <img src={images.om1} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Assets Management</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Lebih Mudah Melakukan Inventaris (Kendaraan,Peralatan, Lahan/Bangunan Serta Office Space) Serta Melacak Lokasi Aset</li>
                                    <li className='app__bodyContent-item p__poppins'>Melacak Persediaan Perlengkapan Secara Real-Time</li>
                                    <li className='app__bodyContent-item p__poppins'>Terdapat juga Integrasi dengan Fasilitas bagi Karyawan</li>
                                    <li className='app__bodyContent-item p__poppins'>Selain itu juga Terdokumentasi dengan Riwayat Asuransi Aset</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Submission Review (E-Approval)</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Approval Pengadaan Barang yang dapat terintegrasi langsung dengan inventaris sehingga meminimalisir duplikasi entri data</li>
                                    <li className='app__bodyContent-item p__poppins'>Approval Pemakaian Kendaraan & Terintegrasi dengan Driver Internal</li>
                                    <li className='app__bodyContent-item p__poppins'>Approval Pelenyapan Aset</li>
                                    <li className='app__bodyContent-item p__poppins'>Seluruh Status Pengajuan yang telah diproses akan diNotifikasi ke Pengaju</li>
                                </ul>
                            </div>
                            <img src={images.om2} />
                        </div>
                    </div>
                    <div className={toggleState === 4 ? 'app__bodyContent bodyContent-active' : 'app__bodyContent'}>
                        <div className='app__bodyContent-row'>
                            <img src={images.ess1} />
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>Employee Facilities</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Dilengkapi dengan Riwayat Kontrak Kerja, Payroll,Surat Peringatan, Pelatihan, Kehadiran, Rekam Medis,Dan Masih Banyak Lainnya.</li>
                                    <li className='app__bodyContent-item p__poppins'>Selain Itu, Karyawan juga Dapat Mengajukan Izin/Cuti,Pinjaman Karyawan, Reimburse Pengobatan Serta Pengunduran Diri Terkait Keperluan Personal</li>
                                    <li className='app__bodyContent-item p__poppins'>Seluruh Data Riwayat & Pengajuan Terintegrasi Secara Realtime Dengan Modul Operasional Lainnya.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='app__bodyContent-row'>
                            <div className='app__bodyContent-text'>
                                <p className='app__bodyContent-title p__poppins sb'>E-Presence</p>
                                <ul className='app__bodyContent-list'>
                                    <li className='app__bodyContent-item p__poppins'>Presensi Lebih Mudah Dengan Online Dari Laptop Atau Smartphone yang Dapat Mendukung Kondisi Pandemi Saat Ini</li>
                                    <li className='app__bodyContent-item p__poppins'>Terintegrasi dengan Pengajuan izin Pulang Lebih CepatAtau Meninggalkan Kantor Saat Jam Kerja</li>
                                    <li className='app__bodyContent-item p__poppins'>Selain ini E-Presence dilengkapi dengan Take Photo & Geolocation Untuk mengetahui Lokasi Karyawan Saat Melakukan Presensi</li>
                                </ul>
                            </div>
                            <img src={images.ess2} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
    


export default ERPShowcase;
