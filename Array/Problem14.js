// Palindrome Number

function isPalindrome(x){
    if(x < 0)
        return false;
    let num = x.toString();
   for(let i = 0, j = num.length - 1; i < j; i++,j--){
     if(num[i] !== num[j])
        return false;
   }
   return true;
      
}
console.log(isPalindrome(10));



// 

function is_Palindrome(n){
    if(n < 0)
        return false;
    let nStr = String(n);
     return nStr === nStr.split('').reverse().join('');
}


console.log(is_Palindrome(-121));



