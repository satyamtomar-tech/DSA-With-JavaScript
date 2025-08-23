// Find the sum of all elements in an array.

// using Loop

const arr = [1, 2, 3, 4, 5, 6, 7];

function sunArray(Arr){
   if(Arr.length === 0)
     return null;
   let s = 0;
   for(let i = 0; i < Arr.length; i++){
     s = s + Arr[i];
   }
   return s;
}
console.log(sunArray(arr));


// Using reduce method

const sum = arr.length > 0 ? arr.reduce((acc, value) => (acc + value),0) : null;

console.log(sum);


// Using forEach

function sumArr(Arr1){
  if(Arr1.length === 0)
    return null;
  let s1 = 0;
  Arr1.forEach(element => {
    s1 =  s1 + element;
  });
  return s1;
}
console.log(sumArr(arr));
