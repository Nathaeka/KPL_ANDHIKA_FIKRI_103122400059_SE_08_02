// Fungsi untuk melakukan pembagian
//function pembagian(a, b) {
//return a / b;
//}

//function dic(a.b){
  //  try {
    //    if (b === 0) {
      //      throw new Error("Tidak bisa membagi dengan nol");
        //}
        //return a / b;
    //} catch (error) {
      //  console.error("error:" , error);
    //}
//}
//console.log...

//====================================================

//function div(a, b) {
    //Guard clause
  //  if (b === 0) {
    //    console.debug("B:",b);
      //  return 0;
    //}
    //console.debug(a,b);
//}
//console.log(div(20, 40)

//); 

function div(a, b) {
//prakondisi
if (typeof a !== "number" && typeof b !== "number") {
    throw new TypeError("salah tioe data untuk argumen a");
}
if (b === 0) {
    return 0;
}
const hasil = a / b;

//PASCA KONDISI

if (hasil * b === a){
    return hasil;
}

return 0;
}
console.log(div(20, 40)
);