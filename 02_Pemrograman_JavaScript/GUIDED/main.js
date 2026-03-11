function ganjilGenap(input){
    if (input % 2 == 0){
        return "True"
    }
    return false;
}

function absoluteValue(input){
  if (input < 0){
    return -input
      
  }    
  return input;
}

//let apakahGenap = ganjilGenap(10)
//console.log(apakahGenap)

//let nama = "Jowowo"
//console.log('halo, nama saya jowowo $(nama)')

const user = {
    firstName: "Jowowo",
    lastName: "Sawit",
    age: 85
};

console.log(user ["firstName"]);