// Mengekspor fungsi hitungHuruf
export function hitungHuruf(teks) {
    // untuk mengambil hanya huruf alfabet A-Z baik itu besar/kecil
    const matchHuruf = teks.match(/[a-zA-Z]/g);
    return matchHuruf ? matchHuruf.length : 0;
}

// Mengekspor fungsi hitungKata
export function hitungKata(teks) {
    // Untul Menghapus spasi berlebih dari awal dan akhir
    const teksBersih = teks.trim();
    if (teksBersih === "") {
        return 0;
    }
    // Memecah teks berdasarkan spasi
    const arrayKata = teksBersih.split(/\s+/);
    return arrayKata.length;
}