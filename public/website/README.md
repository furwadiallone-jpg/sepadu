# Website Desa Sepadu - Dokumentasi Lengkap

## 📋 Daftar Isi
1. [Pengenalan](#pengenalan)
2. [Struktur Folder](#struktur-folder)
3. [Fitur Utama](#fitur-utama)
4. [Halaman-Halaman](#halaman-halaman)
5. [Cara Menggunakan](#cara-menggunakan)
6. [Instalasi & Setup](#instalasi--setup)
7. [Customization](#customization)

---

## 🎯 Pengenalan

Website Desa Sepadu adalah website resmi pemerintah Desa Sepadu, Kecamatan Semparuk, Kabupaten Sambas, Kalimantan Barat. Website ini dibuat dengan desain modern, responsif, dan user-friendly untuk menyediakan informasi lengkap kepada masyarakat desa.

### Teknologi yang Digunakan:
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Maps**: Google Maps API
- **Framework CSS**: Custom CSS (Responsive Design)
- **Browser Compatibility**: Chrome, Firefox, Safari, Edge (terbaru)

---

## 📁 Struktur Folder

```
website/
├── index.html                 # Halaman utama/home
├── aparatur.html             # Halaman aparatur desa
├── lapak.html                # Halaman UMKM/Lapak Desa
├── galeri.html                 # Halaman galeri UMKM
├── berita.html               # Halaman berita desa
├── layanan.html              # Halaman layanan publik
├── layanan-mandiri.html      # Halaman layanan mandiri + jadwal sholat
├── assets/
│   ├── css/
│   │   └── style.css         # File CSS utama
│   └── js/
│       ├── script.js         # JavaScript utama
│       └── jadwal-sholat.js  # Script jadwal sholat dan maps
└── README.md                 # File dokumentasi
```

---

## ✨ Fitur Utama

### 1. **Navigasi & Layout Responsif**
- Menu navigasi yang sticky di atas halaman
- Mobile-friendly dengan hamburger menu
- Responsive design untuk semua ukuran layar
- Breadcrumb navigation untuk kemudahan navigasi

### 2. **Jadwal Sholat Terintegrasi**
- Jadwal sholat real-time untuk Kabupaten Sambas
- Data akurat berdasarkan koordinat geografis
- Tampilan tabel jadwal bulanan
- Update otomatis setiap jam

### 3. **Google Maps Integration**
- Peta lokasi kantor desa
- Marker interaktif dengan informasi
- Zoom dan kontrol peta lengkap

### 4. **Filter & Search**
- Fitur pencarian untuk lapak/UMKM
- Filter kategori produk
- Search di halaman berita dan layanan

### 5. **Carousel & Slider**
- Auto-rotating image carousel
- Carousel controls dengan dots
- Smooth transitions dan animations

### 6. **Social Media Links**
- Integrasi link media sosial
- Icon dari Font Awesome
- Hover effects yang menarik

### 7. **Responsive Images**
- Images dioptimalkan untuk berbagai ukuran
- Lazy loading support
- Object-fit untuk aspect ratio yang konsisten

---

## 📄 Halaman-Halaman

### 1. **index.html - Halaman Utama**
- Hero banner dengan search
- Quick links untuk menu cepat
- Sambutan kepala desa dengan statistik
- Informasi desa dan maps
- Jam kerja dan anggaran desa
- Berita dan gallery terbaru

### 2. **aparatur.html - Halaman Aparatur Desa**
- Daftar dan profil aparatur desa
- Gambar, nama, jabatan, kontak
- Struktur organisasi pemerintahan
- Detail tugas dan tanggung jawab

### 3. **lapak.html - Halaman Lapak/UMKM**
- Grid display UMKM/lapak desa
- Filter berdasarkan kategori
- Rating dan review sistem
- Detail lokasi dan informasi

### 4. **galeri.html - Halaman Galeri UMKM**
- Gallery view produk UMKM
- Modal lightbox untuk preview gambar
- Filter kategori produk
- Informasi tentang UMKM lokal

### 5. **berita.html - Halaman Berita**
- Daftar berita terbaru
- Featured image untuk setiap berita
- Metadata: tanggal, penulis
- Pagination untuk halaman berita
- Tombol "Baca Selengkapnya"

### 6. **layanan.html - Halaman Layanan Publik**
- 9 layanan publik utama:
  - Surat keterangan domisili
  - Surat keterangan kematian
  - Surat keterangan kelahiran
  - Izin usaha mikro
  - Bantuan sosial
  - Beasiswa pendidikan
  - Konsultasi kesehatan
  - Pelatihan keterampilan
  - Pengaduan masyarakat
- Detail persyaratan untuk setiap layanan
- Jam operasional kantor desa

### 7. **layanan-mandiri.html - Layanan Mandiri & Jadwal Sholat**
- **Jadwal Sholat Terintegrasi**:
  - Waktu sholat hari ini
  - Tabel jadwal sholat bulanan
  - Data akurat untuk Kabupaten Sambas
- **Layanan Publik 6 Kategori**:
  - Surat Keterangan
  - Izin Usaha
  - Bantuan Sosial
  - Beasiswa
  - Kesehatan
  - Pendidikan
- **Google Maps Lokasi Kantor Desa**
- **Informasi Kontak Lengkap**

---

## 🚀 Cara Menggunakan

### Membuka Website
1. Extract semua file ke folder tertentu
2. Buka file `index.html` dengan web browser
3. Atau gunakan live server (disarankan untuk development)

### Navigasi Utama
- **Menu Header**: Klik untuk pindah ke halaman lain
- **Quick Links**: Klik icon untuk akses cepat fitur tertentu
- **Search Bar**: Gunakan untuk mencari konten di halaman
- **Footer**: Akses informasi kontak dan media sosial

### Fitur Interaktif
- **Filter Produk**: Pilih kategori untuk filter UMKM
- **Search**: Ketik untuk mencari berita atau produk
- **Carousel**: Klik dots untuk navigasi manual
- **Modal Gambar**: Klik "Lihat" untuk preview gambar besar
- **Maps**: Zoom dan drag untuk explore lokasi

---

## ⚙️ Instalasi & Setup

### Minimal Setup
Tidak memerlukan instalasi khusus. Cukup:
1. Download semua file
2. Pastikan file struktur terorganisir dengan baik
3. Buka index.html di browser

### Setup dengan Live Server (Rekomendasi)
1. Install VS Code extension: "Live Server"
2. Right-click pada index.html
3. Pilih "Open with Live Server"
4. Browser akan otomatis buka di `http://localhost:5500`

### Setup Google Maps API
1. Dapatkan API key dari Google Cloud Console
2. Replace `AIzaSyDGiLGNW8JfViBhOlnHdJukjBvj6SgF_-o` dengan API key Anda di `layanan-mandiri.html`
3. Jangan lupa enable Maps API di Google Cloud Console

---

## 🎨 Customization

### Mengubah Warna
File: `assets/css/style.css`
```css
:root {
    --primary-color: #1b9034;      /* Warna hijau utama */
    --secondary-color: #f0ad4e;    /* Warna oranye/warning */
    --dark-color: #333;             /* Warna gelap */
    --light-color: #f5f5f5;         /* Warna terang */
}
```

### Menambah Data Jadwal Sholat
File: `assets/js/jadwal-sholat.js`
Tambahkan data baru ke object `jadwalSholatData`:
```javascript
'2026-07': [
    { tanggal: '2026-07-01', subuh: '04:00', dzuhur: '12:20', asar: '15:50', maghrib: '19:20', isya: '20:35' },
    // ... data lainnya
]
```

### Menambah UMKM/Lapak Baru
Edit file `lapak.html` atau `galeri.html`, tambahkan card baru:
```html
<div class="lapak-card" data-category="kategori">
    <div class="lapak-image">
        <img src="path/to/image.jpg" alt="Nama">
    </div>
    <div class="lapak-info">
        <h3>Nama UMKM</h3>
        <p class="location"><i class="fas fa-map-marker-alt"></i> Lokasi</p>
        <p class="description">Deskripsi</p>
    </div>
</div>
```

### Menambah Berita Baru
Edit file `berita.html`, tambahkan di `.berita-full-grid`:
```html
<article class="berita-full-card">
    <div class="berita-featured-image">
        <img src="path/to/image.jpg" alt="Judul">
    </div>
    <div class="berita-content">
        <h3>Judul Berita</h3>
        <div class="berita-meta">
            <span><i class="fas fa-calendar"></i> Tanggal</span>
            <span><i class="fas fa-user"></i> Admin</span>
        </div>
        <p>Konten berita...</p>
        
    </div>
</article>
```

### Mengubah Data Aparatur Desa
Edit `aparatur.html`, update card aparatur:
```html
<div class="aparatur-card">
    <div class="aparatur-image">
        <img src="path/to/photo.jpg" alt="Nama">
    </div>
    <div class="aparatur-info">
        <h3>Nama Lengkap</h3>
        <p class="position">Jabatan</p>
        <p class="description">Deskripsi tugas...</p>
        <div class="contact-info">
            <p><i class="fas fa-phone"></i> Nomor Telepon</p>
            <p><i class="fas fa-envelope"></i> Email</p>
        </div>
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

Website ini responsive untuk:
- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 600px

---

## 🔒 Catatan Keamanan

1. **API Key Google Maps**: Saat ini menggunakan public API key. Untuk production, gunakan API key dengan restrictions.
2. **Form Submission**: Semua form belum terhubung ke backend. Perlu implementasi server-side untuk submit.
3. **Data Jadwal Sholat**: Data hardcoded. Untuk akurasi maksimal, integrasikan dengan API jadwal sholat real-time.

---

## 📞 Informasi Kontak

- **Alamat**: Jalan Semparuk NO 1031, Desa Sepadu, Kecamatan Semparuk, Kabupaten Sambas
- **Telepon**: 0812-345-6789
- **Email**: sepadukoordintor@gmail.com
- **Jam Kerja**: Senin-Jumat 08:00-13:00

---

## 📄 License

Website ini adalah milik Pemerintah Desa Sepadu. Hak cipta dilindungi.

---

## 🙏 Terima Kasih

Terima kasih telah menggunakan Website Desa Sepadu. Untuk saran dan perbaikan, hubungi kami melalui email atau telepon.

**Dibuat dengan ❤️ untuk Desa Sepadu**
