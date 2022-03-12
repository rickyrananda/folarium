import React from 'react';

import './Comparison.css'

const Comparison = () => (
    <div className='app__comparison'>
        <p className='heading p__poppins sb'>ERP COMPARISON</p>
        <p className='subheading p__poppins'>The Following Are Some Comparisons Between Folarium ERP And Other ERP Systems Based On Their Functions And Benefits.</p>
        <div className='app__comparison-body'>
            <div className='app__comparison-categories'>
                <div className='app__comparison-title'></div>
                <div className='app__comparison-category-items p__poppins sb'>License</div>
                <div className='app__comparison-category-items p__poppins sb'>Multi Office</div>
                <div className='app__comparison-category-items p__poppins sb'>Clean Cost</div>
                <div className='app__comparison-category-items p__poppins sb'>Realistic</div>
                <div className='app__comparison-category-items p__poppins sb'>Ease of Use</div>
                <div className='app__comparison-category-items p__poppins sb'>Customization</div>
                <div className='app__comparison-category-items p__poppins sb'>Localization</div>
            </div>
            <div className='app__comparison-folarium'>
                <div className='app__comparison-title-folarium p__poppins sb'>ERP Folarium</div>
                <div className='app__comparison-folarium-items p__poppins'>Unlimited Users untuk setiap perusahaan dengan sekali lisensi</div>
                <div className='app__comparison-folarium-items p__poppins'>Mendukung beberapa kantor dalam satu sistem</div>
                <div className='app__comparison-folarium-items p__poppins'>Tidak ada hidden cost karena seluruh biaya disampaikan di awal</div>
                <div className='app__comparison-folarium-items p__poppins'>Tahapan implementasi transparasi dan dapat dijelaskan secara pasti</div>
                <div className='app__comparison-folarium-items p__poppins'>Dilengkapi dengan interface yang mudah dipahami pengguna</div>
                <div className='app__comparison-folarium-items p__poppins'>Kustomisasi lebih mudah karena sistem dikembangkan in-house</div>
                <div className='app__comparison-folarium-items p__poppins'>Fitur-fitur terlokalisasi sesuai dengan regulasi pemerintah Indonesia</div>
            </div>
            <div className='app__comparison-lainnya'>
                <div className='app__comparison-title-lainnya p__poppins sb'>ERP Lainnya</div>
                <div className='app__comparison-lainnya-items p__poppins'>Biaya per-pengguna untuk setiap perusahaan dan biaya lisensi tahunan</div>
                <div className='app__comparison-lainnya-items p__poppins'>Belum tentu mendukung manajemen multi-office</div>
                <div className='app__comparison-lainnya-items p__poppins'>Mengenakan biaya tambahan selama & setelah implementasi</div>
                <div className='app__comparison-lainnya-items p__poppins'>Selalu menyatakan YA tanpa penjelasan yang dapat dijelaskan</div>
                <div className='app__comparison-lainnya-items p__poppins'>Diperlukan kemampuan khusus untuk memahami interface yang kompleks</div>
                <div className='app__comparison-lainnya-items p__poppins'>Kustomisasi lebih sulit karena sistem tidak dikembangkan sendiri atau menggunakan open source</div>
                <div className='app__comparison-lainnya-items p__poppins'>Belum tentu menyediakan fitur-fitur lokal sehingga tidak mendukung terhadap regulasi</div>
            </div>

        </div>
    </div>
)


export default Comparison;
