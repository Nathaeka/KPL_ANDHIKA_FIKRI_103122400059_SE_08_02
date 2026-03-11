/** buatlah sebuah array berisi 3 minimum favorit kalian, dan simpan dalma variabel bersanam 
 * listMinuman
 * 2. setelah itu, ubah 2 element pertama menggunakan notasi dan penugasan
 * 3. terakhir, tambahkan minuman baru di depan arr */


/** buatlah sebuah array berisi 3 minuman favorit kalian, dan simpan dalam variabel bernama 
 * listMinuman
 * 2. setelah itu, ubah 2 elemen pertama menggunakan notasi dan penugasan
 * 3. terakhir, tambahkan minuman baru di depan array */

// 1. definisi array
const listMinuman = [
  'teh',
  'kopi',
  'jus'];


console.log('Awal:', listMinuman);

// 2. ubah dua elemen pertama
listMinuman[0] = 'susu';
listMinuman[1] = 'air mineral';
console.log('Setelah modifikasi:', listMinuman);

// 3. tambahkan minuman baru di depan
listMinuman.unshift('es teh');
console.log('Setelah ditambahkan di depan:', listMinuman);