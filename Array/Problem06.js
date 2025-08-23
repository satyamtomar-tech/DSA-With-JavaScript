// Check if the array is sorted (increasing).

const arr = [1, 2, 3, 4, 5, 6];

function checkSortedArray(Arr){
   if(Arr.length === 0)
     return "Empty Array";
   for(let i = 0; i < Arr.length - 1; i++){
      if(Arr[i] > Arr[i + 1])
        return false;
   }
  return true;
}
// console.log(checkSortedArray(arr));


//  Using reduce 

function isSorted(arr) {
  if (arr.length === 0) return true; 

  return arr.reduce((sorted, curr, i, array) => {
    if (!sorted) return false;       
    if (i === 0) return true;         
    return array[i - 1] <= curr;      
  }, true);
}

console.log(isSorted([arr]));


