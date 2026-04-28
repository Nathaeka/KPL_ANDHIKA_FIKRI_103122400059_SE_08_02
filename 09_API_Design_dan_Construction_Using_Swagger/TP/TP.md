# Tugas Mandiri 

Andhika Fikri Ekanatha

103122400059

SE-08-02

Dosen Pengampu: Yudha Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman

## Soal

Buatlah satu endpoint lagi beserta dokumentasi OpenAPI-nya, yaitu `GET /menu` yang menampilkan daftar semua nama kategori menu yang ada.


Hasil `GET`: <br>


## Kode Sumber

Tersedia di [index.js](./index.js) 

## Output

<img src="./Screenshot 2026-04-28 221923.png" width="550">
<img src="./Screenshot 2026-04-28 222210.png" width="550">

## Deskripsi

kode Express.js ini menjalankan server pada port 3000 dan menyediakan halaman dokumentasi interaktif Swagger di route /docs. Data daftar makanan dan harganya disimpan secara statis di dalam objek menuData.

Pada bagian endpoint GET /menu, kode diawali dengan anotasi komentar @swagger agar rute ini otomatis tercatat di halaman dokumentasi dengan status respons 200. Logika utamanya sangat ringkas: program memanggil Object.keys(menuData) untuk mengekstrak nama-nama kategori ("bakmi" dan "rames"), lalu mengembalikan array tersebut kepada client dalam format JSON melalui properti kategori_tersedia.