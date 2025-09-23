// Factorial (iterative)
// Sum of digits
// Power of number (x^n)


// Factorial (iterative)
function factorial(num){
    if(typeof num !== "number" || !Number.isInteger(num) || num < 0)
        return "Invalid input! Provide a non-negative integer";
    let fact = 1;
    for(let i = 1; i <= num; i++){
      fact *= i;
    }
    return fact;
}
console.log(factorial(6));



// Sum of digits
function SumDigit(num){
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    return "Invalid Input";
  }
  let sum = 0;
  while(num > 0){
    sum = sum + num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(SumDigit(12345));



// Power of number (x^n)
function power(num1, num2){
  if (!Number.isInteger(num2) || num2 < 0){
    return "Only non-negative integers allowed";
  }
  return num1**num2;
}
console.log(power(5,2));


// Second Approach

function power(num, exp) {
  if (exp < 0) return "Negative exponent not supported";
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
}
console.log(power(5, 2)); 
