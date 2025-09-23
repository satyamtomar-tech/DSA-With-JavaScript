// Even or Odd check
// Reverse digits of number

// using % operator
function evenOdd(num){
    if(typeof num !== "number")
        return "Not a Number"
    return (num % 2 === 0) ? "Even" : "Odd"
}
console.log(evenOdd(2));


// Using bitwise operator
function evenOddBitwise(num){
    if(typeof num !== "number")
        return "Not a Number";
    return (num & 1 === 1) ? "Odd" : "Even";      
}
console.log(evenOddBitwise(16));



// Reverse digits of number
function reverseDigit(num){
  if(typeof num !== "number" || !Number.isInteger(num)){
    return "Invalid Input";
  }
   return String(num).split("").reverse().join("");
   
}
console.log(reverseDigit(54863));


//  Second Approach

function reverseDigit(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return "Invalid Input";
  }

  let rev = 0;
  while (num > 0) {
    let digit = num % 10;   
    rev = rev * 10 + digit;   
    num = Math.floor(num / 10); 
  }
  return rev;
}

console.log(reverseDigit(54863)); 
