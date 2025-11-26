// Data Lomba FESPA 11th
const lombaData = {
    // ========== SD ==========
    'sd-ipa': {
        id: 'sd-ipa',
        nama: 'Olimpiade IPA',
        jenjang: 'sd',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 40.000',
        icon: 'fas fa-flask',
        poster: 'posters/sd-ipa.jpg',
        deskripsi: `
            <p>Olimpiade Ilmu Pengetahuan Alam untuk tingkat Sekolah Dasar merupakan kompetisi bergengsi yang menguji pemahaman siswa tentang konsep-konsep dasar sains.</p>
            <p>Lomba ini dirancang untuk mengasah kemampuan siswa dalam memahami fenomena alam, eksperimen sederhana, dan penerapan prinsip-prinsip IPA dalam kehidupan sehari-hari.</p>
            <p>Materi yang diujikan meliputi:</p>
            <ul>
                <li>Makhluk Hidup dan Lingkungannya</li>
                <li>Benda dan Sifatnya</li>
                <li>Energi dan Perubahannya</li>
                <li>Bumi dan Alam Semesta</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SD kelas 4, 5, atau 6</li>
                <li>Setiap peserta hanya boleh mengikuti satu kategori lomba</li>
                <li>Peserta wajib membawa kartu pelajar dan identitas diri</li>
                <li>Lomba dilaksanakan secara tertulis (pilihan ganda dan isian)</li>
                <li>Durasi lomba: 90 menit</li>
                <li>Tidak diperbolehkan membawa kalkulator atau alat bantu hitung</li>
                <li>Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sd-ips': {
        id: 'sd-ips',
        nama: 'Olimpiade IPS',
        jenjang: 'sd',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 40.000',
        icon: 'fas fa-globe',
        poster: 'posters/sd-ips.jpg',
        deskripsi: `
            <p>Olimpiade Ilmu Pengetahuan Sosial tingkat SD mengajak siswa untuk memahami dinamika sosial, budaya, sejarah, dan geografi Indonesia.</p>
            <p>Kompetisi ini bertujuan untuk menumbuhkan kesadaran sosial dan cinta tanah air sejak dini.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Sejarah Indonesia</li>
                <li>Geografi dan Peta Indonesia</li>
                <li>Kebudayaan Nusantara</li>
                <li>Ekonomi Sederhana</li>
                <li>Pengetahuan Sosial</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SD kelas 4, 5, atau 6</li>
                <li>Kompetisi berbentuk tes tertulis</li>
                <li>Durasi lomba: 90 menit</li>
                <li>Peserta wajib membawa kartu pelajar</li>
                <li>Materi sesuai kurikulum nasional</li>
                <li>Dilarang membawa buku atau catatan</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sd-matematika': {
        id: 'sd-matematika',
        nama: 'Olimpiade Matematika',
        jenjang: 'sd',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 40.000',
        icon: 'fas fa-calculator',
        poster: 'posters/sd-matematika.jpg',
        deskripsi: `
            <p>Olimpiade Matematika SD dirancang untuk mengasah kemampuan logika, pemecahan masalah, dan berpikir kritis siswa dalam bidang matematika.</p>
            <p>Kompetisi ini menguji pemahaman konsep dasar matematika hingga soal-soal yang menantang kreativitas berpikir.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Operasi Hitung Dasar</li>
                <li>Bilangan dan Pola</li>
                <li>Geometri Sederhana</li>
                <li>Pengukuran</li>
                <li>Logika dan Pemecahan Masalah</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SD kelas 4, 5, atau 6</li>
                <li>Lomba berbentuk tes tertulis</li>
                <li>Durasi lomba: 90 menit</li>
                <li>Tidak boleh menggunakan kalkulator</li>
                <li>Peserta wajib membawa alat tulis sendiri</li>
                <li>Jawaban harus ditulis dengan jelas</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sd-pai': {
        id: 'sd-pai',
        nama: 'Olimpiade PAI',
        jenjang: 'sd',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 40.000',
        icon: 'fas fa-mosque',
        poster: 'posters/sd-pai.jpg',
        deskripsi: `
            <p>Olimpiade Pendidikan Agama Islam untuk siswa SD bertujuan meningkatkan pemahaman dan pengamalan nilai-nilai Islam.</p>
            <p>Kompetisi ini menguji pengetahuan siswa tentang dasar-dasar agama Islam, akhlak, ibadah, dan sejarah Islam.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Al-Qur'an dan Hadits</li>
                <li>Aqidah dan Akhlak</li>
                <li>Fiqih (Ibadah)</li>
                <li>Sejarah Kebudayaan Islam</li>
                <li>Praktik Keagamaan</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SD kelas 4, 5, atau 6 beragama Islam</li>
                <li>Lomba terdiri dari tes tertulis dan praktik</li>
                <li>Durasi tes tertulis: 90 menit</li>
                <li>Peserta wajib berpakaian sopan dan rapi</li>
                <li>Membawa kartu pelajar dan identitas</li>
                <li>Materi sesuai kurikulum PAI</li>
                <li>Keputusan juri bersifat mutlak</li>
            </ul>
        `
    },
    
    'sd-tahfidz': {
        id: 'sd-tahfidz',
        nama: 'Olimpiade Tahfidz/Sederajat',
        jenjang: 'sd',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 40.000',
        icon: 'fas fa-quran',
        poster: 'posters/sd-tahfidz.jpg',
        deskripsi: `
            <p>Olimpiade Tahfidz Al-Qur'an untuk siswa SD merupakan ajang bergengsi bagi para penghafal Qur'an muda.</p>
            <p>Kompetisi ini menguji kemampuan menghafal, membaca dengan tartil, dan pemahaman makna ayat-ayat Al-Qur'an.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Kelancaran Hafalan</li>
                <li>Tajwid dan Makharijul Huruf</li>
                <li>Adab Membaca Al-Qur'an</li>
                <li>Fashohah (Kefasihan)</li>
                <li>Pemahaman Ayat</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SD beragama Islam</li>
                <li>Minimal hafalan 1 Juz (Juz 30)</li>
                <li>Peserta akan diuji secara acak oleh juri</li>
                <li>Berpakaian muslim/muslimah yang sopan</li>
                <li>Membawa Al-Qur'an sendiri (untuk referensi)</li>
                <li>Penilaian meliputi hafalan, tajwid, dan adab</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },

    // ========== SMP ==========
    'smp-ipa': {
        id: 'smp-ipa',
        nama: 'Olimpiade IPA',
        jenjang: 'smp',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-flask',
        poster: 'posters/smp-ipa.jpg',
        deskripsi: `
            <p>Olimpiade IPA SMP menguji pemahaman mendalam tentang Fisika, Kimia, dan Biologi tingkat menengah pertama.</p>
            <p>Kompetisi ini dirancang untuk mengasah kemampuan analisis, eksperimen, dan penerapan konsep sains.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Fisika: Gerak, Gaya, Energi, Listrik</li>
                <li>Kimia: Unsur, Senyawa, Reaksi Kimia</li>
                <li>Biologi: Sel, Jaringan, Sistem Organ</li>
                <li>Eksperimen dan Praktikum</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP kelas 7, 8, atau 9</li>
                <li>Lomba terdiri dari tes tertulis dan praktikum</li>
                <li>Durasi tes tertulis: 120 menit</li>
                <li>Membawa alat tulis dan kalkulator non-programmable</li>
                <li>Peserta wajib membawa kartu pelajar</li>
                <li>Materi sesuai silabus OSN</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'smp-ips': {
        id: 'smp-ips',
        nama: 'Olimpiade IPS',
        jenjang: 'smp',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-globe',
        poster: 'posters/smp-ips.jpg',
        deskripsi: `
            <p>Olimpiade IPS SMP mengintegrasikan pengetahuan Geografi, Sejarah, Ekonomi, dan Sosiologi.</p>
            <p>Kompetisi ini menguji kemampuan analisis sosial, pemahaman sejarah, dan wawasan ekonomi siswa.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Geografi Indonesia dan Dunia</li>
                <li>Sejarah Nasional dan Internasional</li>
                <li>Ekonomi dan Kewirausahaan</li>
                <li>Sosiologi dan Antropologi</li>
                <li>Isu Sosial Kontemporer</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP kelas 7, 8, atau 9</li>
                <li>Lomba berbentuk tes tertulis</li>
                <li>Durasi lomba: 120 menit</li>
                <li>Peserta wajib membawa kartu pelajar</li>
                <li>Materi terintegrasi sesuai kurikulum</li>
                <li>Soal mencakup analisis kasus dan wawasan umum</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'smp-matematika': {
        id: 'smp-matematika',
        nama: 'Olimpiade Matematika',
        jenjang: 'smp',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-calculator',
        poster: 'posters/smp-matematika.jpg',
        deskripsi: `
            <p>Olimpiade Matematika SMP menantang siswa dengan soal-soal yang kompleks dan membutuhkan pemikiran kreatif.</p>
            <p>Kompetisi ini mengasah kemampuan problem solving, logika, dan penalaran matematis tingkat lanjut.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Aljabar dan Persamaan</li>
                <li>Geometri dan Trigonometri</li>
                <li>Teori Bilangan</li>
                <li>Kombinatorika</li>
                <li>Logika Matematika</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP kelas 7, 8, atau 9</li>
                <li>Lomba berbentuk tes tertulis</li>
                <li>Durasi lomba: 120 menit</li>
                <li>Tidak boleh menggunakan kalkulator</li>
                <li>Membawa alat tulis, penggaris, dan jangka</li>
                <li>Soal berbasis OSN dan olimpiade internasional</li>
                <li>Keputusan juri bersifat mutlak</li>
            </ul>
        `
    },
    
    'smp-pai': {
        id: 'smp-pai',
        nama: 'Olimpiade PAI',
        jenjang: 'smp',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-mosque',
        poster: 'posters/smp-pai.jpg',
        deskripsi: `
            <p>Olimpiade PAI SMP menguji pemahaman mendalam tentang ajaran Islam, praktik ibadah, dan penerapan nilai-nilai Islam dalam kehidupan.</p>
            <p>Kompetisi mencakup aspek kognitif, afektif, dan psikomotorik dalam beragama Islam.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Al-Qur'an dan Tajwid</li>
                <li>Hadits dan Ilmu Hadits</li>
                <li>Fiqih dan Ushul Fiqh</li>
                <li>Akhlak dan Tasawuf</li>
                <li>Sejarah Islam dan Peradaban</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP beragama Islam</li>
                <li>Lomba terdiri dari tes tertulis dan praktik</li>
                <li>Durasi tes tertulis: 120 menit</li>
                <li>Berpakaian muslim/muslimah</li>
                <li>Membawa Al-Qur'an (untuk tes praktik)</li>
                <li>Materi sesuai kurikulum PAI SMP</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'smp-puisi': {
        id: 'smp-puisi',
        nama: 'Lomba Baca Puisi',
        jenjang: 'smp',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-book-reader',
        poster: 'posters/smp-puisi.jpg',
        deskripsi: `
            <p>Lomba Baca Puisi untuk siswa SMP adalah ajang untuk mengekspresikan jiwa seni melalui pembacaan puisi dengan penghayatan mendalam.</p>
            <p>Kompetisi ini menilai kemampuan vokal, interpretasi, ekspresi, dan penghayatan peserta.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Intonasi dan Artikulasi</li>
                <li>Penghayatan dan Ekspresi</li>
                <li>Gesture dan Body Language</li>
                <li>Pemilihan Puisi</li>
                <li>Keseluruhan Penampilan</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP kelas 7, 8, atau 9</li>
                <li>Durasi penampilan: maksimal 5 menit</li>
                <li>Puisi yang dibawakan adalah karya sendiri atau penyair terkenal</li>
                <li>Wajib menyerahkan naskah puisi kepada juri</li>
                <li>Berpakaian rapi dan sopan</li>
                <li>Tidak menggunakan properti berlebihan</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'smp-storytelling': {
        id: 'smp-storytelling',
        nama: 'Story Telling',
        jenjang: 'smp',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-microphone',
        poster: 'posters/smp-storytelling.jpg',
        deskripsi: `
            <p>Story Telling adalah seni bercerita yang menggabungkan kemampuan berbicara, ekspresi, dan kreativitas.</p>
            <p>Peserta ditantang untuk menyampaikan cerita dengan menarik, menghibur, dan menginspirasi.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Alur Cerita dan Konten</li>
                <li>Ekspresi Wajah dan Vokal</li>
                <li>Gesture dan Movement</li>
                <li>Kreativitas dan Originalitas</li>
                <li>Audience Engagement</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP</li>
                <li>Durasi story telling: 5-7 menit</li>
                <li>Cerita berbahasa Indonesia atau Inggris</li>
                <li>Cerita bebas (fiksi, non-fiksi, legenda, dll)</li>
                <li>Tidak menggunakan naskah saat tampil</li>
                <li>Boleh menggunakan properti sederhana</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'smp-mhq': {
        id: 'smp-mhq',
        nama: 'Musabaqah Hifdzil Qur\'an (MHQ)',
        jenjang: 'smp',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Individu',
        harga: 'Rp 50.000',
        icon: 'fas fa-quran',
        poster: 'posters/smp-mhq.jpg',
        deskripsi: `
            <p>Musabaqah Hifdzil Qur'an (MHQ) adalah kompetisi menghafal Al-Qur'an yang bergengsi untuk siswa SMP.</p>
            <p>Lomba ini menguji kemampuan hafalan, tajwid, dan pemahaman ayat-ayat suci Al-Qur'an.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Kelancaran dan Kuantitas Hafalan</li>
                <li>Tajwid dan Makharijul Huruf</li>
                <li>Fashohah dan Tartil</li>
                <li>Adab Membaca</li>
                <li>Ghorib (Bacaan Sulit)</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMP beragama Islam</li>
                <li>Minimal hafalan 2 Juz</li>
                <li>Peserta akan diuji secara acak oleh dewan juri</li>
                <li>Berpakaian muslim/muslimah yang sopan dan rapi</li>
                <li>Membawa Al-Qur'an sendiri</li>
                <li>Penilaian meliputi hafalan, tajwid, fashohah</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },

    // ========== SMA (akan dilanjutkan di komentar berikutnya karena panjang) ==========
    'sma-fisika': {
        id: 'sma-fisika',
        nama: 'Olimpiade Fisika',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-atom',
        poster: 'posters/sma-fisika.jpg',
        deskripsi: `
            <p>Olimpiade Fisika SMA adalah kompetisi sains prestisius yang menguji pemahaman mendalam tentang hukum-hukum alam dan fenomena fisika.</p>
            <p>Peserta akan dihadapkan pada soal-soal yang menantang kemampuan analisis, perhitungan, dan penalaran ilmiah.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Mekanika (Kinematika, Dinamika, Usaha & Energi)</li>
                <li>Termodinamika dan Kalor</li>
                <li>Gelombang dan Optik</li>
                <li>Listrik dan Magnet</li>
                <li>Fisika Modern (Atom, Nuklir, Kuantum)</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba terdiri dari tes tertulis dan eksperimen</li>
                <li>Durasi tes tertulis: 180 menit</li>
                <li>Boleh menggunakan kalkulator scientific non-programmable</li>
                <li>Membawa alat tulis lengkap</li>
                <li>Materi setara OSN dan IPhO</li>
                <li>Keputusan juri bersifat mutlak</li>
            </ul>
        `
    },
    
    'sma-kimia': {
        id: 'sma-kimia',
        nama: 'Olimpiade Kimia',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-vial',
        poster: 'posters/sma-kimia.jpg',
        deskripsi: `
            <p>Olimpiade Kimia SMA menguji kemampuan siswa dalam memahami struktur materi, reaksi kimia, dan aplikasi ilmu kimia.</p>
            <p>Kompetisi ini mencakup teori kimia hingga praktikum laboratorium.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Struktur Atom dan Sistem Periodik</li>
                <li>Ikatan Kimia dan Molekul</li>
                <li>Stoikiometri dan Reaksi Kimia</li>
                <li>Kimia Organik dan Anorganik</li>
                <li>Kimia Fisik (Termodinamika, Kinetika)</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba terdiri dari tes tertulis dan praktikum</li>
                <li>Durasi tes tertulis: 180 menit</li>
                <li>Menggunakan sistem periodik yang disediakan panitia</li>
                <li>Boleh menggunakan kalkulator scientific</li>
                <li>Materi setara OSN dan IChO</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-biologi': {
        id: 'sma-biologi',
        nama: 'Olimpiade Biologi',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-dna',
        poster: 'posters/sma-biologi.jpg',
        deskripsi: `
            <p>Olimpiade Biologi SMA mengeksplorasi kehidupan dari tingkat molekuler hingga ekosistem.</p>
            <p>Kompetisi ini menguji pemahaman tentang organisme hidup, evolusi, genetika, dan bioteknologi.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Biologi Sel dan Molekuler</li>
                <li>Genetika dan Biologi Molekuler</li>
                <li>Anatomi dan Fisiologi</li>
                <li>Ekologi dan Evolusi</li>
                <li>Bioteknologi</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba terdiri dari tes tertulis dan praktikum</li>
                <li>Durasi tes tertulis: 180 menit</li>
                <li>Membawa alat tulis dan kalkulator</li>
                <li>Menggunakan alat lab yang disediakan</li>
                <li>Materi setara OSN dan IBO</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sma-ekonomi': {
        id: 'sma-ekonomi',
        nama: 'Olimpiade Ekonomi',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-chart-line',
        poster: 'posters/sma-ekonomi.jpg',
        deskripsi: `
            <p>Olimpiade Ekonomi menguji pemahaman tentang teori ekonomi, pasar, keuangan, dan isu-isu ekonomi kontemporer.</p>
            <p>Kompetisi ini mengasah kemampuan analisis ekonomi dan pengambilan keputusan bisnis.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Mikroekonomi dan Makroekonomi</li>
                <li>Ekonomi Pembangunan</li>
                <li>Keuangan dan Perbankan</li>
                <li>Ekonomi Internasional</li>
                <li>Studi Kasus Ekonomi</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba berbentuk tes tertulis dan analisis kasus</li>
                <li>Durasi lomba: 150 menit</li>
                <li>Boleh menggunakan kalkulator</li>
                <li>Membawa alat tulis</li>
                <li>Materi mencakup ekonomi mikro, makro, dan internasional</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-matematika': {
        id: 'sma-matematika',
        nama: 'Olimpiade Matematika',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-calculator',
        poster: 'posters/sma-matematika.jpg',
        deskripsi: `
            <p>Olimpiade Matematika SMA adalah kompetisi bergengsi yang menantang siswa dengan soal-soal matematis tingkat tinggi.</p>
            <p>Membutuhkan kreativitas, logika tajam, dan kemampuan problem solving yang luar biasa.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Aljabar dan Teori Bilangan</li>
                <li>Geometri Euclid dan Analitik</li>
                <li>Kombinatorika</li>
                <li>Kalkulus</li>
                <li>Problem Solving dan Proof</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba berbentuk tes tertulis essay</li>
                <li>Durasi lomba: 180 menit</li>
                <li>Tidak boleh menggunakan kalkulator</li>
                <li>Membawa alat geometri lengkap</li>
                <li>Soal setara OSN dan IMO</li>
                <li>Keputusan juri bersifat mutlak</li>
            </ul>
        `
    },
    
    'sma-astronomi': {
        id: 'sma-astronomi',
        nama: 'Olimpiade Astronomi',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-satellite',
        poster: 'posters/sma-astronomi.jpg',
        deskripsi: `
            <p>Olimpiade Astronomi mengajak siswa menjelajahi alam semesta, dari bumi hingga galaksi terjauh.</p>
            <p>Kompetisi ini menguji pemahaman tentang benda langit, mekanika orbit, dan fenomena astronomi.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Tata Surya dan Planet</li>
                <li>Bintang dan Evolusi Bintang</li>
                <li>Galaksi dan Kosmologi</li>
                <li>Mekanika Langit</li>
                <li>Observasi Astronomi</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba meliputi teori, observasi, dan analisis data</li>
                <li>Durasi tes tertulis: 180 menit</li>
                <li>Boleh menggunakan kalkulator scientific</li>
                <li>Observasi dilakukan dengan teleskop (jika cuaca mendukung)</li>
                <li>Materi setara OSN Astronomi</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-geografi': {
        id: 'sma-geografi',
        nama: 'Olimpiade Geografi',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-map-marked-alt',
        poster: 'posters/sma-geografi.jpg',
        deskripsi: `
            <p>Olimpiade Geografi menguji pemahaman tentang bumi, lingkungan, dan interaksi manusia dengan alam.</p>
            <p>Kompetisi mencakup geografi fisik, manusia, dan aplikasi teknologi GIS.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Geografi Fisik (Geomorfologi, Klimatologi)</li>
                <li>Geografi Manusia dan Ekonomi</li>
                <li>Peta dan Kartografi</li>
                <li>GIS dan Remote Sensing</li>
                <li>Isu Lingkungan Global</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba meliputi tes tertulis, peta, dan multimedia</li>
                <li>Durasi tes tertulis: 150 menit</li>
                <li>Membawa alat tulis dan penggaris</li>
                <li>Kemampuan membaca peta diperlukan</li>
                <li>Materi setara OSN Geografi</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sma-kebumian': {
        id: 'sma-kebumian',
        nama: 'Olimpiade Kebumian',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-mountain',
        poster: 'posters/sma-kebumian.jpg',
        deskripsi: `
            <p>Olimpiade Kebumian mempelajari struktur bumi, geologi, meteorologi, dan oseanografi.</p>
            <p>Kompetisi ini menguji pemahaman tentang dinamika planet bumi dan fenomena alam.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Geologi dan Mineralogi</li>
                <li>Tektonik Lempeng</li>
                <li>Meteorologi dan Klimatologi</li>
                <li>Oseanografi</li>
                <li>Bencana Alam dan Mitigasi</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba meliputi teori dan identifikasi sampel</li>
                <li>Durasi tes tertulis: 150 menit</li>
                <li>Membawa alat tulis</li>
                <li>Praktikum identifikasi batuan dan mineral</li>
                <li>Materi setara OSN Kebumian</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-komputer': {
        id: 'sma-komputer',
        nama: 'Olimpiade Komputer',
        jenjang: 'sma',
        kategori: 'Akademik',
        tipe: 'Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-laptop-code',
        poster: 'posters/sma-komputer.jpg',
        deskripsi: `
            <p>Olimpiade Komputer/Informatika menguji kemampuan programming, algoritma, dan computational thinking.</p>
            <p>Kompetisi ini menantang peserta dengan problem solving menggunakan bahasa pemrograman.</p>
            <p>Materi yang diujikan:</p>
            <ul>
                <li>Algoritma dan Struktur Data</li>
                <li>Pemrograman (C++, Python, Java)</li>
                <li>Matematika Diskrit</li>
                <li>Graph Theory dan Dynamic Programming</li>
                <li>Computational Thinking</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA kelas 10, 11, atau 12</li>
                <li>Lomba berbentuk competitive programming</li>
                <li>Durasi lomba: 240 menit (4 jam)</li>
                <li>Menggunakan komputer yang disediakan</li>
                <li>Bahasa pemrograman: C++, Java, atau Python</li>
                <li>Materi setara OSN Informatika dan IOI</li>
                <li>Keputusan juri bersifat mutlak</li>
            </ul>
        `
    },
    
    'sma-akustik': {
        id: 'sma-akustik',
        nama: 'Akustik',
        jenjang: 'sma',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Tim (2-5 orang)',
        harga: 'Rp 100.000',
        icon: 'fas fa-guitar',
        poster: 'posters/sma-akustik.jpg',
        deskripsi: `
            <p>Lomba Akustik adalah kompetisi musik untuk band/grup yang menampilkan musik dengan instrumen akustik.</p>
            <p>Peserta ditantang untuk menampilkan harmoni, aransemen, dan chemistry tim yang solid.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Vokal (Lead dan Harmony)</li>
                <li>Skill Instrumen</li>
                <li>Aransemen Musik</li>
                <li>Chemistry dan Kompak Tim</li>
                <li>Stage Performance</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA</li>
                <li>Tim terdiri dari 2-5 orang</li>
                <li>Durasi penampilan: 5-10 menit (maksimal 2 lagu)</li>
                <li>Instrumen akustik (gitar, cajon, ukulele, dll)</li>
                <li>Lagu bebas (Indonesia/Asing)</li>
                <li>Membawa instrumen sendiri</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sma-speech': {
        id: 'sma-speech',
        nama: 'Pidato Bahasa Inggris (Speech)',
        jenjang: 'sma',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-microphone-alt',
        poster: 'posters/sma-speech.jpg',
        deskripsi: `
            <p>Lomba Pidato Bahasa Inggris menguji kemampuan public speaking, grammar, dan kepercayaan diri.</p>
            <p>Peserta akan menyampaikan pidato tentang tema yang ditentukan dengan bahasa Inggris yang baik.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Konten dan Substansi</li>
                <li>Grammar dan Vocabulary</li>
                <li>Pronunciation dan Intonation</li>
                <li>Delivery dan Body Language</li>
                <li>Confidence dan Stage Presence</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA</li>
                <li>Durasi pidato: 5-7 menit</li>
                <li>Tema akan diberikan saat technical meeting</li>
                <li>Pidato prepared speech (sudah disiapkan)</li>
                <li>Tidak membaca naskah saat tampil</li>
                <li>Berpakaian formal</li>
                <li>Keputusan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-puisi': {
        id: 'sma-puisi',
        nama: 'Lomba Baca Puisi',
        jenjang: 'sma',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Individu',
        harga: 'Rp 60.000',
        icon: 'fas fa-book-reader',
        poster: 'posters/sma-puisi.jpg',
        deskripsi: `
            <p>Lomba Baca Puisi mengekspresikan jiwa seni melalui interpretasi dan penghayatan puisi dengan mendalam.</p>
            <p>Kompetisi ini menilai kemampuan vokal, ekspresi, dan penghayatan makna puisi.</p>
            <p>Aspek Penilaian:</p>
            <ul>
                <li>Pemilihan dan Kualitas Puisi</li>
                <li>Intonasi dan Artikulasi</li>
                <li>Penghayatan dan Interpretasi</li>
                <li>Ekspresi dan Gesture</li>
                <li>Totalitas Penampilan</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA</li>
                <li>Durasi penampilan: maksimal 5 menit</li>
                <li>Puisi karya sendiri atau penyair terkenal</li>
                <li>Menyerahkan naskah puisi kepada juri</li>
                <li>Berpakaian rapi dan sopan</li>
                <li>Boleh menggunakan properti sederhana</li>
                <li>Keputusan juri tidak dapat diganggu gugat</li>
            </ul>
        `
    },
    
    'sma-volly': {
        id: 'sma-volly',
        nama: 'Tournament Volly (Siswa Putra SMA)',
        jenjang: 'sma',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Tim (6-8 orang)',
        harga: 'Rp 200.000',
        icon: 'fas fa-volleyball-ball',
        poster: 'posters/sma-volly.jpg',
        deskripsi: `
            <p>Tournament Volly adalah kompetisi bola voli untuk siswa putra SMA yang menguji kekompakan tim, strategi, dan skill olahraga.</p>
            <p>Turnamen ini menggunakan sistem pertandingan yang fair dan kompetitif.</p>
            <p>Format Pertandingan:</p>
            <ul>
                <li>Sistem Gugur atau Grup (tergantung jumlah peserta)</li>
                <li>Best of 3 set (Rally Point 25)</li>
                <li>Menggunakan peraturan PBVSI</li>
                <li>Wasit resmi dari PBVSI</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa putra SMA/MA</li>
                <li>Tim terdiri dari 6 pemain inti + 2 cadangan</li>
                <li>Membawa seragam tim sendiri (2 stel berbeda warna)</li>
                <li>Wajib membawa kartu pelajar dan surat keterangan sekolah</li>
                <li>Menggunakan bola standar FIVB</li>
                <li>Tidak boleh ada pemain yang mengikuti klub profesional</li>
                <li>Keputusan wasit dan juri bersifat final</li>
            </ul>
        `
    },
    
    'sma-smantripa': {
        id: 'sma-smantripa',
        nama: 'Smantripa CUP (Siswa SMA)',
        jenjang: 'sma',
        kategori: 'Non-Akademik',
        tipe: 'Non-Akademik',
        peserta: 'Tim (10-15 orang)',
        harga: 'Rp 300.000',
        icon: 'fas fa-futbol',
        poster: 'posters/sma-smantripa.jpg',
        deskripsi: `
            <p>Smantripa CUP adalah turnamen sepak bola bergengsi untuk siswa SMA se-Indonesia.</p>
            <p>Kompetisi ini menguji skill, strategi, dan sportivitas dalam pertandingan sepak bola.</p>
            <p>Format Pertandingan:</p>
            <ul>
                <li>Sistem Gugur atau Grup (tergantung jumlah peserta)</li>
                <li>Durasi: 2 x 35 menit</li>
                <li>Menggunakan peraturan FIFA (disesuaikan)</li>
                <li>Wasit bersertifikat PSSI</li>
                <li>Fair Play Award untuk tim tersportif</li>
            </ul>
        `,
        ketentuan: `
            <ul>
                <li>Peserta adalah siswa SMA/MA (putra dan putri)</li>
                <li>Tim terdiri dari 11 pemain inti + 4-5 cadangan</li>
                <li>Membawa seragam tim sendiri (2 stel)</li>
                <li>Wajib membawa kartu pelajar dan surat keterangan</li>
                <li>Tidak boleh ada pemain yang terdaftar di klub profesional</li>
                <li>Menggunakan sepatu bola yang aman (tanpa spike besi)</li>
                <li>Setiap tim wajib memiliki official dan medical team</li>
                <li>Keputusan wasit bersifat mutlak dan tidak dapat diganggu gugat</li>
            </ul>
        `
    }
};

