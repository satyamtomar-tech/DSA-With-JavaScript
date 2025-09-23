// Prime number check
// Palindrome number check


function checkPrimeNumber(num){
    if(typeof num !== "number" || !Number.isFinite(num) || !Number.isInteger(num))
        return false

     if (num <= 1) return false;
     if (num === 2) return true;       
     if (num % 2 === 0) return false;

    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
console.log(checkPrimeNumber(97));



// Palindrome number check
function checkPalindromeNumber(num){
    if(typeof num !== "number" || !Number.isInteger(num) || num > 0){
        return false
    }
    let result = String(num);
   for(let i = 0, j = result.length -1; i < j; i++, j--){
     if(result[i] !== result[j]){
        return false;
     }
   }
   return true;
}
console.log(checkPalindromeNumber(12321));
