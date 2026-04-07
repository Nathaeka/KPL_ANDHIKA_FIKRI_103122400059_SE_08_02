/**
 * Memeriksa suatu angka apakah kelipatan 3, 5, atau keduanya.
 * @param {number} num - Bilangan bulat yang ingin dievaluasi.
 * @returns {string|number} Mengembalikan "Fizz", "Buzz", "FizzBuzz", atau angka aslinya.
 */
function zzzzOrNum(num) {
    let result = "";
    
    
    if (num % 3 === 0) result += "Fizz";
   
    if (num % 5 === 0) result += "Buzz";

    return result || num;
}

/**
 * Memproses sekumpulan bilangan bulat menjadi array FizzBuzz.
 * @param {number[]} numbers - Kumpulan bilangan bulat dalam bentuk array.
 * @returns {(string|number)[]} - Array baru dengan hasil transformasi FizzBuzz.
 */
function fizzBuzz(numbers) {
   
    return numbers.map(zzzzOrNum);
}

module.exports = {
    fizzBuzz,
    zzzzOrNum
};


const testData = [1, 2, 3, 5, 15];
console.log(fizzBuzz(testData));