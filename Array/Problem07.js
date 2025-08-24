// Alternate elements of an array
// Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// Examples:

// Input: arr = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr = [-5, 1, 4, 2, 12]
// Output: -5 4 12

// Using Loop

const arr1 = [-5, 1, 4, 2, 12]

function alternateElement(arr){
    const  result = []
    for(let i = 0; i < arr.length; i+=2)
         result.push(arr[i]);
    return result;
}
console.log(alternateElement([-5, 1, 4, 2, 12]));
console.log(alternateElement([10, 20, 30, 40, 50]));


// Using filter()
 function alternateElementFilter(arr){
     return arr.filter((element, i) => {
        return i % 2 === 0})
}

console.log(alternateElementFilter(arr1));

// Using reduce

function alternateElementReduce(arr){
 return arr.reduce((acc, value, i) => {
     if(i%2 ===0)
        acc.push(value);
     return acc;
  },[])
}
console.log(alternateElementReduce(arr1));
