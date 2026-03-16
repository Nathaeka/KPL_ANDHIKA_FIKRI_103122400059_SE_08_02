const editorKecil = document.getElementById("editor-kecil");
const hfElement = document.getElementById("hf");
const hbElement = document.getElementById("hb");
const hkElement = document.getElementById("hk");

function updateStatistik() {
    const teks = editorKecil.value;
    
    // Menghitung total karakter
    hfElement.textContent = teks.length;
    
    // Menghitung huruf besar
    const hitungBesar = (teks.match(/[A-Z]/g) || []).length;
    hbElement.textContent = hitungBesar;

    // Menghitung huruf kecil sesuai instruksi soal
    const hitungKecil = (teks.match(/[a-z]/g) || []).length;
    hkElement.textContent = hitungKecil;
}

editorKecil.addEventListener("input", updateStatistik);

// Mengubah teks di editor-kecil ke huruf besar
document.getElementById("huruf-besar").addEventListener("click", () => {
    editorKecil.value = editorKecil.value.toUpperCase();
    updateStatistik(); 
});

// Mengubah teks di editor-kecil ke huruf kecil
document.getElementById("huruf-kecil").addEventListener("click", () => {
    editorKecil.value = editorKecil.value.toLowerCase();
    updateStatistik(); 
});