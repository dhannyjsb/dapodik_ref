# Dapodik Reference Static API

Proyek ini adalah situs statis yang menampilkan dan menyajikan data referensi Dapodik dalam format JSON.

Karena hanya menggunakan HTML, CSS, JavaScript, dan file JSON statis, repo ini cocok di-host langsung di GitHub Pages.

## Struktur

- `index.html` sebagai halaman utama
- `css/style.css` untuk tampilan
- `js/app.js` untuk logika fetch dan render Vue
- `api/*.json` untuk endpoint daftar data
- `api/<nama_tabel>/<id>.json` untuk endpoint detail per ID

## Menjalankan Lokal

Jangan buka file langsung dengan skema `file:///` karena browser dapat memblokir `fetch` ke file JSON lokal.

Gunakan server HTTP sederhana, misalnya:

```bash
python -m http.server 8123
```

Lalu buka:

```text
http://localhost:8123/
```

## Deploy ke GitHub Pages

1. Push repo ini ke GitHub.
2. Buka `Settings` repo.
3. Masuk ke menu `Pages`.
4. Pada `Build and deployment`, pilih source: `Deploy from a branch`.
5. Pilih branch `main` atau `master`.
6. Pilih folder `/ (root)`.
7. Simpan konfigurasi.

Setelah aktif, situs biasanya tersedia di:

```text
https://<username>.github.io/<nama-repo>/
```

## Endpoint Contoh

Jika repo dipublikasikan sebagai `https://<username>.github.io/dapodik_ref/`, maka contoh endpoint menjadi:

- `https://<username>.github.io/dapodik_ref/api/index.json`
- `https://<username>.github.io/dapodik_ref/api/ref_hobby.json`
- `https://<username>.github.io/dapodik_ref/api/ref_hobby/1.json`

## Catatan

- Path endpoint di proyek ini sudah menggunakan path relatif, sehingga aman untuk GitHub Pages.
- Tidak ada backend, build step, atau dependency server-side yang dibutuhkan.
- Hasil verifikasi lokal menunjukkan seluruh file detail JSON yang direferensikan oleh `api/index.json` tersedia dan konsisten.