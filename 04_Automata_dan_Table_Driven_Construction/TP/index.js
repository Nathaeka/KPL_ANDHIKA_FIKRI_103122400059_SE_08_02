const editorKecil = document.getElementById("editor-kecil");
const hfElement = document.getElementById("hf");
const hbElement = document.getElementById("hb");
const hkElement = document.getElementById("hk");

function updateStatistik() {
    const teks = editorKecil.value;
    
    hfElement.textContent = teks.length;
    
    const hitungBesar = (teks.match(/[A-Z]/g) || []).length;
    hbElement.textContent = hitungBesar;

    const hitungKecil = (teks.match(/[a-z]/g) || []).length;
    hkElement.textContent = hitungKecil;
}

editorKecil.addEventListener("input", updateStatistik);

document.getElementById("huruf-besar").addEventListener("click", () => {
    editorKecil.value = editorKecil.value.toUpperCase();
    updateStatistik(); 
});

document.getElementById("huruf-kecil").addEventListener ("click", () => {
    editorKecil.value = editorKecil.value.toLowerCase();
    updateStatistik(); 
}
  );

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");


buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
}
  );


buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
}
 );