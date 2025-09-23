// Swap two numbers
// Find GCD


// Swap two numbers

// Using temp
function swapWithTemp(val1, val2){
  let temp;
  temp = val1;
  val1 = val2;
  val2 = temp;
  return {val1, val2}
}
console.log(swapWithTemp(20, 30));


// Without using temp
function swapWithoutTemp(val1, val2){
  val1 = val1 + val2;  //50
  val2 = val1 - val2   // 20
  val1 = val1 - val2   //30
  return {val1, val2}
}
console.log(swapWithoutTemp(20, 30));


// Destructuring assignment (ES6)
let a = 20, b = 30;
[a, b] = [b, a];
console.log(a, b); 



// Find GCD

function GCD(num1, num2){
   if (
    typeof num1 !== "number" || typeof num2 !== "number" ||
    !Number.isInteger(num1) || !Number.isInteger(num2)
  ) {
    return "Invalid Number";
  }
   let result =  Math.min(num1, num2);
  for(let i = result; i > 0; i--){
    if(num1 % i === 0 && num2 % i === 0)
      return i;
  }
}
console.log(GCD(20, 28));

// Second approach

function gcdEuclidean(a, b) {
  if (
    typeof a !== "number" || typeof b !== "number" ||
    !Number.isInteger(a) || !Number.isInteger(b)
  ) {
    return "Invalid Number";
  }

  while (b !== 0) {
    [a, b] = [b, a % b]; 
  }
  return a;
}
console.log(gcdEuclidean(20, 28)); 


