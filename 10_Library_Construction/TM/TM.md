# Tugas Mandiri 10: Library Construction

**Nama:** Andhika Fikri  <br>
**NIM:** 103122400069 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Buatkan pustaka yang rapi!

Pada tugas ini buatlah sebuah proyek baru bernama `mtk-gampang`. Struktur proyeknya wajib diatur seperti di bawah ini.

```
|── package.jso
├── index.js
├── lib/
   ├── kuadrat.js
   ├── pangkat.js
   |── bulat.js
```
Setiap berkas lib hanya memiliki satu fungsi saja.

1. `pangkat.js` berisi fungsi `pangkat(x, y)` yang mengembalikan nilai akhir dari x pangkat y.
2. `bulat.js` berisi fungsi `bulat(x)` yang mengubah bentuk bilangan non-bulat menjadi bulat (mis. `-4.25` menjadi `-4`) .
3. `kuadrat.js` berisi fungsi `kuadrat(x)` yang mengembalikan nilai akar kuadrat 2 dari `x`.

Satu batasannya adalah fungsi-fungsi ini harus diakses dari `index.js` (sebagai nilai dari properti `main`), bukan dari `lib` masing-masing.

Jika sudah selesai, buatlah proyek baru lagi dan instal pustaka yang kamu buat secara lokal. Pada `index.js`-nya, gunakan kode ini untuk memastikan bahwa kamu berhasil melakukannya.

```
import { kuadrat, pangkat, bulat } from "libr";

const narasi = `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam. Ketika sensor mengirimkan data arus sisa yang berantakan seperti 85.95 ampere, ia kalibrasikan menjadi ${bulat(85.95)} agar sistem keamanan memutus aliran tepat pada angka bulat tanpa koma.`;

/**
 * Seorang insinyur menetapkan luas panel 3 meter persegi, lalu menggunakan kapasitas penyimpanan sebesar 1024 watt-jam. Ketika sensor mengirimkan data arus sisa yang berantakan seperti 85.95 ampere, ia kalibrasikan menjadi 85 agar sistem keamanan memutus aliran tepat pada angka bulat tanpa koma.
 * /

console.log(narasi);
```

## Kode Progam
Kode Program tersedia di [index.js](Testing/index.js)

## Output
<img src="./Screenshot 2026-05-17 171759.png" width="500">

"Berfokus pada pembuatan library matematika kustom bernama mtk-gampang berbasis ES Modules. Modul ini menyediakan tiga operasi dasar di dalam direktori lib: pangkat, kuadrat, dan bulat. Untuk memudahkan penggunaan, ketiga fungsi tersebut digabungkan dan diekspor secara terpusat melalui file index.js. Agar library ini dapat menggunakan fitur ekspor/impor modern, properti "type": "module" ditambahkan ke dalam file package.json. Pada tahap validasi, sebuah proyek pengujian dibuat di dalam folder testing yang memuat library ini sebagai dependensi lokal. File index.js pada proyek pengujian tersebut bertugas mengimpor ketiga fungsi dari mtk-gampang dan mengeksekusinya dengan data uji coba, yang kemudian merangkai hasilnya menjadi sebuah output string di terminal.