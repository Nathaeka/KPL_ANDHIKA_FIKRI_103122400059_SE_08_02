# Tugas Mandiri 

Andhika Fikri Ekanatha

103122400059

SE-08-02

Dosen Pengampu: Yudha Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman

## Soal

Buatlah pustaka JavaScript yang menyediakan utilitas berupa dua fungsi yang menghitung jumlah huruf dan jumlah kata.

Kriteria:

Hanya alfabet A hingga Z yang dihitung (besar dan kecil)
Spasi tidak dihitung
Pustaka bisa diimpor


## Kode Sumber

Tersedia di [index.js](./index.js) 

## Output

<img src="./Screenshot 2026-05-05 201933.png" width="550">
<img src="./Screenshot 2026-05-05 202224.png" width="550">

## Deskripsi

Kode Node.js ini menerapkan standar ECMAScript Modules (ESM) dengan memisahkan pustaka pustaka-hitung-teks dari direktori aplikasi utamanya. Pustaka tersebut didaftarkan sebagai dependensi lokal di dalam file package.json agar dapat diimpor secara langsung layaknya pustaka bawaan.

Pada bagian pustaka, fungsi hitungHuruf dan hitungKata diekspor menggunakan sintaks export. Logika utamanya sangat ringkas: program menggunakan ekspresi reguler /[a-zA-Z]/g untuk memfilter dan menghitung alfabet, serta memecah teks yang sudah dibersihkan menggunakan .split(/\s+/) untuk menghitung total kata, lalu mengembalikan nilai numerik tersebut ke aplikasi pemanggil.