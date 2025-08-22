// Find the second largest element in an array


// Using reduce

const arr = [10, 30, 56, 43, 29, 64, 49, 60];
function findSecondLargest(arr) {
  if (arr.length < 2) return null; 

  const result = arr.reduce(
    (acc, value) => {
      if (value > acc.max) {
        acc.sMax = acc.max;   
        acc.max = value;      
      } else if (value > acc.sMax && value < acc.max) {
        acc.sMax = value;     
      }
      return acc;
    },
    { max: -Infinity, sMax: -Infinity } 
  );

  return result.sMax === -Infinity ? null : result.sMax;
}
console.log(findSecondLargest(arr))


// Using loop but same logic
function findSecondLargeElement(Arr){
let max =-Infinity;
let sMax = -Infinity;
if(Arr.length < 2)
    return null;
for(let i = 0; i < Arr.length; i++){
    if(Arr[i] > max){
        sMax = max;
        max = Arr[i];
    }
    else if(Arr[i] > sMax && Arr[i] < max){
        sMax = Arr[i]
   }
 }
  return sMax;
}
console.log(findSecondLargeElement(arr));