// Strong number check
// Perfect number check
// Find ASCII of character

function checkStrongNumber(num){
    if(typeof num !== "number" || !Number.isFinite(num) || num < 0)
        return "Invalid Input";
    let originalNumber = num;
    let sum1 = 0;
    while(num > 0){
        sum1 = sum1 + factorial(num % 10);
        num = Math.floor(num / 10);
    }
   return sum1 === originalNumber ? "Strong Number" : "Not a Strong Number";
   
}
function factorial(n){
    let fact = 1;
    for(let i = 2; i <= n; i++){
       fact *= i;
    }
    return fact
}
console.log(checkStrongNumber(145));



// Perfect number check

function checkPerfactNumber(num){
    if(typeof num !== "number" || !Number.isFinite(num) || num < 0)
        return "Invalid Number";
    return num === divisor(num) ? "Perfect Number" : "Not a Perfect Number"
}
function divisor(n){
    let sum = 0;
    for(let i = 1; i  < n; i++){
        if(n % i === 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(checkPerfactNumber(28));
