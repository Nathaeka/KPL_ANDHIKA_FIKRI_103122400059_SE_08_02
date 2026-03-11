/** tulislah sebuah fungsi yg menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. 
Contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (1+2+3+4+5.)
*/

function sumValues(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
return total;
}
console.log(sumValues(1000));


