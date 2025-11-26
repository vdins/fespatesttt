# FESPA 11th - Festival Smantripa

Website resmi FESPA (Festival Smantripa) edisi ke-11 dengan tema **"Inovasi Digital, Prestasi Optimal"**

## 📋 Deskripsi

FESPA 11th adalah acara tahunan yang mengundang pelajar tingkat SD, SMP, dan SMA untuk berkompetisi dalam berbagai olimpiade akademik dan non-akademik. Website ini didesain dengan tema technology untuk mencerminkan semangat inovasi digital dan kemajuan teknologi.

## ✨ Fitur

### 0. **Splash Screen** (`splash.html`) ⭐ START HERE!
- Logo FESPA dengan animasi glow & rotating rings
- Background animasi technology (circuit board, particles)
- Klik untuk masuk ke website utama
- 🎵 **Welcome sound play saat transition**

### 1. **Halaman Home** (`index.html`)
- Hero section dengan efek glitch dan animasi technology
- Informasi tentang FESPA 11th
- Timeline kegiatan
- Statistik event (animated counter)
- Call-to-action untuk pendaftaran

### 2. **Halaman Daftar Lomba** (`lomba.html`)
- Filter berdasarkan jenjang pendidikan (SD/SMP/SMA)
- 20+ kategori lomba akademik dan non-akademik
- Detail lengkap setiap lomba (biaya, tipe peserta)
- Responsive card design

### 3. **Halaman Pendaftaran** (`pendaftaran.html`)
- Form pendaftaran lengkap dengan validasi
- Informasi pembayaran
- Upload bukti pembayaran
- Support pendaftaran individu dan tim
- Timeline pendaftaran

### 4. **Halaman Kontak** (`kontak.html`)
- Multiple contact methods (email, phone, WhatsApp)
- Contact form dengan validasi
- Google Maps integration
- FAQ accordion
- Team section
- Social media links

## 🎵 Splash Screen & Continuous Background Music (NEW!)

Website dimulai dengan **splash screen animasi** dan dilengkapi **background music continuous**!

### Cara Kerja:
1. **Buka splash.html** - Splash screen dengan logo FESPA muncul
2. **Klik logo** atau tekan **Enter** - Masuk ke website utama
3. **Music "Welcome FESPA.mp3"** otomatis play sekali saja
4. **Music terus bermain** di semua halaman sampai selesai
5. **Tidak restart** - Music lanjut dari posisi terakhir saat pindah halaman
6. **Tombol Toggle** - Pojok kanan bawah untuk mute/unmute

### File yang Dibutuhkan:
- **Welcome FESPA.mp3** - Audio welcome sound (wajib)
- **logo-fespa.png** - Logo FESPA (gunakan gambar dari attachment)

### Fitur Audio:
- ✅ **Continuous play** - Music tidak putus saat pindah halaman
- ✅ **Resume from last position** - Tidak restart dari awal
- ✅ **Play once** - Audio play sekali saja, tidak loop
- ✅ **Toggle button** - Kontrol mute/unmute dengan icon
- ✅ **SessionStorage** - Track audio state antar halaman

📖 **Detail lengkap**: Lihat [AUDIO_SETUP.md](AUDIO_SETUP.md)

## 🎨 Desain & Teknologi

### Color Palette
- **Primary**: `#00d4ff` (Cyan/Electric Blue) - Technology vibe
- **Secondary**: `#7b2cbf` (Purple) - Innovation
- **Accent**: `#ff006e` (Pink) - Energy
- **Background**: Dark theme (`#0a0e27`, `#131842`)

### Typography
- **Heading**: Orbitron (Futuristic, tech-inspired)
- **Body**: Rajdhani (Modern, readable)
- **Monospace**: Share Tech Mono (Code-like elements)

### Features
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Dark theme dengan technology aesthetic
- ✅ Smooth animations & transitions
- ✅ Interactive elements (hover effects, accordion, filters)
- ✅ Form validation
- ✅ Notification system
- ✅ Back to top button
- ✅ Animated statistics counter
- ✅ FAQ accordion
- ✅ Mobile navigation menu
- ✅ **Splash screen dengan logo animasi** 🎨
- ✅ **Continuous background music** 🎵
- ✅ **Music toggle control** 🔊
- ✅ **Cross-page audio persistence** 📻

## 📁 Struktur File

```
FESPA-11th/
├── splash.html             # ⭐ ENTRY POINT - Splash screen (BUKA INI DULU!)
├── index.html              # Halaman utama
├── lomba.html              # Daftar lomba
├── pendaftaran.html        # Form pendaftaran
├── kontak.html             # Kontak & FAQ
├── styles.css              # Styling lengkap
├── script.js               # JavaScript interactivity
├── logo-fespa.png          # Logo FESPA (PERLU DITAMBAHKAN)
├── Welcome FESPA.mp3       # Welcome sound (PERLU DITAMBAHKAN)
├── README.md               # Dokumentasi
└── AUDIO_SETUP.md          # Setup guide untuk audio
```

## 🚀 Cara Menggunakan

### Quick Start:

1. **Download semua files** ke satu folder
2. **Tambahkan file audio** "Welcome FESPA.mp3" (wajib untuk sound)
3. **Tambahkan logo** "logo-fespa.png" (gambar di attachment)
4. **Buka splash.html** di browser ← MULAI DARI SINI!

### With Live Server (Recommended):

1. Install extension "Live Server" di VS Code
2. Right-click pada `splash.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka dengan hot reload

### Testing:

- Desktop: Buka di Chrome/Firefox/Edge
- Mobile: Gunakan developer tools → Device mode
- Audio: Pastikan volume tidak mute

## 📱 Kategori Lomba

### SD (Akademik)
- Olimpiade IPA (Rp 40.000)
- Olimpiade IPS (Rp 40.000)
- Olimpiade Matematika (Rp 40.000)
- Olimpiade PAI (Rp 40.000)
- Olimpiade Tahfidz/Sederajat (Rp 40.000)

### SMP
**Akademik:**
- Olimpiade IPA (Rp 50.000)
- Olimpiade IPS (Rp 50.000)
- Olimpiade Matematika (Rp 50.000)
- Olimpiade PAI (Rp 50.000)

**Non-Akademik:**
- Lomba Baca Puisi (Rp 50.000)
- Story Telling (Rp 50.000)
- Musabaqah Hifdzil Qur'an (MHQ) (Rp 50.000)

### SMA
**Akademik:**
- Olimpiade Fisika (Rp 60.000)
- Olimpiade Kimia (Rp 60.000)
- Olimpiade Biologi (Rp 60.000)
- Olimpiade Ekonomi (Rp 60.000)
- Olimpiade Matematika (Rp 60.000)
- Olimpiade Astronomi (Rp 60.000)
- Olimpiade Geografi (Rp 60.000)
- Olimpiade Kebumian (Rp 60.000)
- Olimpiade Komputer (Rp 60.000)

**Non-Akademik:**
- Akustik (Rp 100.000)
- Pidato Bahasa Inggris (Speech) (Rp 60.000)
- Lomba Baca Puisi (Rp 60.000)
- Tournament Volly - Siswa Putra SMA (Rp 200.000)
- Smantripa CUP - Siswa SMA (Rp 300.000)

## 📅 Timeline

- **Pendaftaran Dibuka**: 1 Desember 2024
- **Pendaftaran Ditutup**: 15 Januari 2025
- **Pelaksanaan FESPA**: 1-2 Februari 2025

## 💳 Metode Pembayaran

- **BCA**: 1234567890 a.n. FESPA 11th
- **Mandiri**: 9876543210 a.n. FESPA 11th
- **OVO/GoPay**: 0812-3456-7890 a.n. FESPA 11th

## 📞 Kontak

- **Email**: info@fespa11th.com
- **Phone**: +62 812-3456-7890
- **WhatsApp**: +62 812-3456-7890
- **Alamat**: SMA Negeri 3 Semarang, Jl. Pemuda No.149, Semarang

## 🌐 Social Media

- Instagram: @fespa11th
- Twitter: @fespa11th
- YouTube: FESPA 11th
- TikTok: @fespa11th

## 🎯 Browser Compatibility

Website ini kompatibel dengan:
- ✅ Google Chrome (recommended)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

**Entry Point**: Selalu mulai dari `splash.html` untuk mendapatkan experience penuh dengan splash screen dan welcome sound.

## 📝 Notes

- Website ini menggunakan CDN untuk Font Awesome icons
- Tidak memerlukan dependencies tambahan
- Semua file static (HTML, CSS, JS)
- Form submission saat ini menggunakan simulasi (perlu integrasi backend untuk production)
- **Logo & sound opsional** - website tetap berjalan tanpa file tersebut
- **Entry point**: `splash.html` (splash screen) → `index.html` (homepage)

## 🔒 Security

- Form validation di client-side
- File upload size limit (max 5MB)
- Email & phone number format validation
- XSS prevention melalui proper input handling

## 🛠️ Customization

### Mengubah Warna
Edit variable CSS di `styles.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #7b2cbf;
    /* ... */
}
```

### Menambah Lomba
Edit section di `lomba.html` dan tambahkan card baru dengan struktur yang sama.

### Mengubah Kontak
Edit informasi kontak di `kontak.html` dan footer di semua halaman.

### Mengatur Volume Music
Edit di `script.js`:
```javascript
bgMusic.volume = 0.4; // 0.0 - 1.0 (0% - 100%)
```

### Disable Background Music
Jika tidak ingin music:
1. Hapus file `Welcome FESPA.mp3`
2. Atau comment code di `script.js` bagian "CONTINUOUS BACKGROUND MUSIC SYSTEM"

### Skip Splash Screen
Jika ingin langsung ke homepage tanpa splash:
- Buka `index.html` langsung (bukan `splash.html`)
- Music tidak akan autoplay (perlu klik toggle button)

## 🎵 Audio & Logo Requirements

### Audio (Welcome FESPA.mp3):
- **Format**: MP3 (recommended), WAV, OGG, M4A
- **Ukuran**: < 5MB
- **Bitrate**: 128kbps (optimal)
- **Durasi**: 10-60 detik (play sekali saja, tidak loop)
- **Nama File**: Harus "Welcome FESPA.mp3" (case sensitive)
- **Volume**: Default 40%, nyaman untuk welcome sound

### Logo (logo-fespa.png):
- **Format**: PNG (recommended untuk transparency), JPG, WebP
- **Ukuran**: Recommended 800x800px atau lebih
- **File Size**: < 2MB
- **Nama File**: Harus "logo-fespa.png" (case sensitive)
- **Background**: Transparent PNG lebih bagus
- **Gunakan gambar dari attachment!** ✅

## 📄 License

© 2025 FESPA 11th - Festival Smantripa. All Rights Reserved.

---

**Built with ❤️ for FESPA 11th**

🎵 *"Inovasi Digital, Prestasi Optimal"*

