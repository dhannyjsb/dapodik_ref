# Dapodik Reference Static API

API statis referensi Dapodik berbasis GitHub Pages.

Proyek ini menampilkan contoh konsumsi data referensi dalam format JSON menggunakan `fetch` API dan Vue 3, tanpa backend dan tanpa proses build.

## Repository

- Source code: `https://github.com/dhannyjsb/dapodik_ref`
- GitHub Pages: `https://dhannyjsb.github.io/dapodik_ref/`

## Fitur

- Menyajikan data referensi dalam format JSON statis
- Menampilkan daftar endpoint dan contoh response
- Mendukung endpoint list dan detail per ID
- Cocok untuk demo, referensi, dan hosting gratis di GitHub Pages

## Struktur Proyek

- `index.html` untuk halaman utama
- `css/style.css` untuk styling
- `js/app.js` untuk logika aplikasi dan `fetch`
- `api/index.json` untuk daftar endpoint
- `api/<tabel>.json` untuk list data
- `api/<tabel>/<id>.json` untuk detail data per ID

## Endpoint Contoh

Base URL:

```text
https://dhannyjsb.github.io/dapodik_ref/api/
```

Contoh endpoint:

- `https://dhannyjsb.github.io/dapodik_ref/api/index.json`
- `https://dhannyjsb.github.io/dapodik_ref/api/ref_hobby.json`
- `https://dhannyjsb.github.io/dapodik_ref/api/ref_hobby/1.json`
- `https://dhannyjsb.github.io/dapodik_ref/api/ref_jenjang_pendidikan.json`
- `https://dhannyjsb.github.io/dapodik_ref/api/ref_penghasilan/11.json`

## Menjalankan Secara Lokal

Jangan membuka proyek langsung dengan skema `file:///`, karena browser bisa memblokir `fetch` ke file JSON lokal.

Gunakan server HTTP sederhana:

```bash
python -m http.server 8123
```

Lalu akses:

```text
http://localhost:8123/
```

## Deploy ke GitHub Pages

1. Push project ini ke repository GitHub.
2. Buka menu `Settings` pada repository.
3. Pilih menu `Pages`.
4. Pada bagian `Build and deployment`, pilih `Deploy from a branch`.
5. Pilih branch `main`.
6. Pilih folder `/ (root)`.
7. Simpan konfigurasi dan tunggu proses publish selesai.

Jika konfigurasi aktif, halaman akan tersedia di:

```text
https://dhannyjsb.github.io/dapodik_ref/
```

## Teknologi

- HTML5
- CSS3
- JavaScript
- Vue 3 CDN
- GitHub Pages

## Catatan

- Seluruh endpoint menggunakan path relatif, sehingga aman dijalankan di GitHub Pages.
- Tidak memerlukan backend, database server, atau build tool.
- Struktur data list dan detail JSON sudah diverifikasi konsisten dengan metadata di `api/index.json`.
