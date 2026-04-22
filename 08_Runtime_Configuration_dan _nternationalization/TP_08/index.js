
const tanggalSekarang = new Date();
const opsiFormat = {
  weekday: 'long',   
  day: 'numeric',    
  month: 'long',     
  
 
};


const formatter = new Intl.DateTimeFormat('id-ID', opsiFormat);
console.log(formatter.format(tanggalSekarang));