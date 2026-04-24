# Website Desa Sepadu - Panduan Quick Start

## 🚀 Cara Membuka Website

### Metode 1: Direct Open (Paling Mudah)
1. Buka folder `website`
2. Double-click file `index.html`
3. Website akan terbuka di browser default Anda

### Metode 2: Dengan Live Server (Rekomendasi untuk Development)
1. Install VS Code (https://code.visualstudio.com)
2. Install extension "Live Server" di VS Code
3. Buka folder website di VS Code
4. Right-click pada `index.html`
5. Pilih "Open with Live Server"
6. Browser akan otomatis membuka di `http://localhost:5500`

### Metode 3: Deploy ke Hosting (Untuk Production)
1. Upload semua file ke web hosting menggunakan FTP
2. Pastikan struktur folder tetap sama
3. Update Google Maps API key jika diperlukan

---

## 📱 Daftar Halaman Website

| No | Nama Halaman | File | Deskripsi |
|---|---|---|---|
| 1 | Beranda | index.html | Halaman utama dengan hero, info desa, berita |
| 2 | Aparatur Desa | aparatur.html | Profil aparatur pemerintahan desa |
| 3 | Lapak Desa | lapak.html | Direktori UMKM dan toko lokal |
| 4 | Galeri UMKM | galeri.html | Galeri produk UMKM dengan preview |
| 5 | Berita | berita.html | Daftar berita terbaru dengan pagination |
| 6 | Detail Berita | berita-detail.html | Halaman detail berita dengan komentar |
| 7 | Layanan Publik | layanan.html | Informasi layanan publik desa |
| 8 | Layanan Mandiri | layanan-mandiri.html | Jadwal sholat + maps + layanan online |

---

## ⚙️ Konfigurasi Awal

### 1. Google Maps API Key
File: `layanan-mandiri.html` (baris ke-84)
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

Ganti `YOUR_API_KEY` dengan API key Anda dari Google Cloud Console.

### 2. Informasi Kontak
File: Semua halaman (footer)
Perbarui dengan informasi kontak desa Anda di bagian footer.

### 3. Data Jadwal Sholat
File: `assets/js/jadwal-sholat.js`
Update data jadwal sholat bulanan sesuai dengan lokasi desa.

---

## 🎨 Kustomisasi Warna & Desain

### Warna Utama
File: `assets/css/style.css` (baris awal)
```css
:root {
    --primary-color: #1b9034;      /* Hijau utama */
    --secondary-color: #f0ad4e;    /* Oranye */
    --dark-color: #333;
    --light-color: #f5f5f5;
    --border-color: #ddd;
}
```

### Logo
Ganti file di `../aset/Logo-Kab-Sambas.png` dengan logo desa Anda.

---

## 📸 Menambah Gambar

1. Letakkan gambar di folder `../aset/`
2. Update path gambar di HTML file
3. Contoh: `<img src="../aset/nama-gambar.jpg" alt="Deskripsi">`

---

## ✅ Checklist Sebelum Launch

- [ ] Ganti logo desa
- [ ] Update informasi kontak di footer
- [ ] Konfigurasi Google Maps API Key
- [ ] Update data jadwal sholat
- [ ] Test semua link dan halaman
- [ ] Test responsive di mobile
- [ ] Update data aparatur desa
- [ ] Tambah berita/konten asli
- [ ] Sesuaikan warna dengan identitas desa

---

## 🔧 Troubleshooting

### Gambar tidak muncul
- Pastikan path gambar benar
- Cek apakah folder `aset` ada di parent folder website

### Google Maps tidak muncul
- Verifikasi API key sudah benar
- Pastikan API Maps sudah enable di Google Cloud Console
- Check console browser untuk error message

### Menu mobile tidak berfungsi
- Pastikan JavaScript file sudah load
- Check console browser untuk error

### Jadwal sholat tidak tampil
- Pastikan jadwal-sholat.js sudah linked di halaman
- Check console untuk error

---

## 📞 Support

Untuk bantuan lebih lanjut, silahkan hubungi:
- Email: sepadukoordintor@gmail.com
- Telepon: 0812-345-6789

---

**Dibuat dengan ❤️ untuk Desa Sepadu**
**Versi: 1.0 | Updated: 2026**
