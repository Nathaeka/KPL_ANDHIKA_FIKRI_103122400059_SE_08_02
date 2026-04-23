# Tugas Mandiri : Design by Contract dan Defensive Programming

andhika fikri ekanatha

103122400059

SE-08-02

Dosen Pengampu: Yudha Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman

## Soal

Tugas pada kesempatan kali ini adalah membuat fungsi yang menguraikan isi robots.txt menjadi POJO (plain old JavaScript object). Empat properti yang perlu diuraikan dijabarkan di bawah berikut.

User-agent adalah nama robot perayapnya
Allow adalah daftar halaman-halaman yang boleh dirayap
Disallow adalah daftar halaman-halaman yang tidak boleh dirayap
Sitemap adalah sebuah pranala yang menunjuk pada "denah" situs web (biasanya berformat XML)
Kamu akan mengerjakannya di dalam sebuah fungsi bernama parseRobots di index.js dan. Buka direktori 07 di sini untuk mengunduh berkas yang dimaksud, berkas-berikas robots.txt di dalam direktori daftar, dan berkas pengujiannya yaitu test.js.

Jadi, strukturnya harus seperti ini:

<img src="./WhatsApp Image 2026-04-23 at 9.23.38 PM.jpeg" width="650">

Agar kode yang kamu tulis di index.js bekerja atau tidak, jalankan test.js. Jika kamu membuat proyek Node (yang ada package.json), pastikan untuk membuat impor menjadi CommonJS dengan type: commonjs.

Beberapa petunjuk:

Manajemen state akan membantu
Nilai tambah jika kamu bisa mendeskripsikannya secara code tracing
Tidak perlu program untuk membaca TXT, itu sudah dilakukan oleh test.js
Hubungi asprak jika ada kendala atau kesalahan

## Kode Sumber

Tersedia di [index.js](./index.js) dan [test.js](./test.js)

## Output

<img src="./WhatsApp Image 2026-04-23 at 9.08.21 PM.jpeg" width="550">

<img src="./WhatsApp Image 2026-04-23 at 9.08.20 PM.jpeg" width="550">




## Deskripsi

Fungsi parseRobots memproses teks dengan memecahnya per baris, lalu membersihkan spasi dan mengabaikan komentar (#). Teks yang sudah bersih dipotong pada tanda titik dua (:) untuk memisahkan kata kunci (seperti user-agent atau allow) dengan nilainya.

Program ini melacak nama user-agent yang sedang dibaca, sehingga aturan allow atau disallow di bawahnya otomatis masuk ke kelompok agen tersebut. Sementara itu, data sitemap dan host langsung disimpan di luar kelompok karena berlaku global untuk seluruh situs.