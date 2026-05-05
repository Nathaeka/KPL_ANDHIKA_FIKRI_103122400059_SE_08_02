// Mengimpor pustaka menggunakan standar ESM
import { hitungHuruf, hitungKata } from 'pustaka-hitung-teks';

const teksUji = "Tes! hitung teks dari 123.";

console.log("--= HASIL PENGUJIAN PUSTAKA =--");
console.log("Teks Asli    :", teksUji);
console.log("Jumlah Huruf :", hitungHuruf(teksUji));
console.log("Jumlah Kata  :", hitungKata(teksUji));