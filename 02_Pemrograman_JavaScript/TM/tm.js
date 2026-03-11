function fizzBuzz(arr) {
 
  if (!Array.isArray(arr)) {
    return "Input tidak valid";
  }

  let hasil = "";

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
     if (num % 14 === 0) {
     hasil += "FizzBuzz";
    } 
    else if (num % 7 === 0) {
      hasil += "Buzz";
    } 
    else if (num % 2 === 0) {
      hasil += "Fizz";
    } 
    else {
      hasil += num;
    }
    if (i < arr.length - 1) {
      hasil += " ";
    }
}

  return hasil;
}

module.exports = fizzBuzz;
