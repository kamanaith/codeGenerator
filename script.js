let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let symbols = ["!","@","#","$","&"]

// let btn = document.querySelector(".generator");
let displayer = document.querySelector(".container");


function getrandomElement(array){

    return array[Math.floor(Math.random()*array.length)];
}

function generateCode(){
let result = [
    getrandomElement(upperCase),
    getrandomElement(upperCase),
    getrandomElement(lowerCase),
    getrandomElement(lowerCase),
    getrandomElement(numbers),
    getrandomElement(numbers),
    getrandomElement(symbols)
]

result = result.sort(() => Math.random()-0.5);

 displayer.value = result.join("");
}
