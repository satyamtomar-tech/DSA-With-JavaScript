// “Find the maximum element in an array

// Using Loop

const arr = [10, 2, 78, 100, 4];

let loopMax = arr.length ? arr[0] : undefined;
for(let i = 1; i < arr.length; i++){
    if(arr[i] > loopMax)
      loopMax = arr[i];
}
console.log(loopMax);


// Using Math.max + spread

let mathMax = arr.length ?  Math.max(...arr) : undefined;

console.log(mathMax);


// Using reduce 

let reduMax = arr.length ? arr.reduce((acc,value) => (value > acc ? value : acc),arr[0]): undefined;
console.log(reduMax);