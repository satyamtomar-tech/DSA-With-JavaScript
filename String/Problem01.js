// Palindrome check
// Reverse a string


// Palindrome check

function checkPalindrome(str){
    if(typeof str !== "string" )
        throw new TypeError("Invalid input: Expected a string");
    const normalizedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = normalizedStr.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// console.log(checkPalindrome("madam"));


// Second Approach

function checkPalindromeStr(str){
    if(typeof str !== "string" )
        throw new TypeError("Invalid input: Expected a string");
   const normalizedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "") 
   const revStr = normalizedStr.split('').reverse().join('');
   return normalizedStr === revStr
}
// console.log(checkPalindromeStr("madam"))



// Reverse a string

function revStr(str){
  if(typeof str !== "string" )
        throw new TypeError("Invalid input: Expected a string");
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  let arr = normalizedStr.split('')
  for(let i = 0, j = arr.length - 1; i < j; i++,j--){
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.join('');
}
console.log(revStr("false"));


// Second Approach

function revStr(str){
  if(typeof str !== "string" )
        throw new TypeError("Invalid input: Expected a string");
   return str.toLowerCase().replace(/[^a-z0-9]/g, "").split('').reverse().join('');
  
}
console.log(revStr("false"));
