const editorElement = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");

function hitungHuruf(event) {
    const teks = event.target.value;
    const teksBaru = teks.split('');
    
    let panjang = 0;

    teksBaru.forEach(karakter => {
     const kriteria = /\w/;
                        
    if (kriteria.test(karakter)) {
            // Jika karakter adalah huruf/angka/underscore, 
            // fungsi ini langsung keluar dari iterasi saat ini.
      return;
        }

        // Menambah hitungan jika karakter TIDAK sesuai kriteria \w
        panjang += 1;
    }

);

    elemenHf.textContent = panjang;
}

elemenEditor.addEventListener("input", hitungHuruf);