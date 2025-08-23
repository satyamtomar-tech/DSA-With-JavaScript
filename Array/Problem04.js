// Reverse an array without using built-in reverse().
// Input: [1, 2, 3, 4] → Output: [4, 3, 2, 1]

const arr = [1, 2, 3, 4];
let temp;
function reverseArray(Arr){
  if(Arr.length < 1)
    return [];
  let temp;
  for(let i = 0, j = Arr.length - 1; i < j ; i++, j--){
      temp = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = temp;
  }
  return Arr;
}
console.log(reverseArray(arr));

// Use Build in method

console.log(arr.reverse());



// Methods to Preserve Original

const revArr = [...arr].reverse();

console.log(arr);      // original array safe
console.log(revArr);

