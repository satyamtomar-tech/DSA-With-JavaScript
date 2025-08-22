//  Sum of N element of  array

// Using reduece method 

const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((acc, element) =>   element + acc, 0)

console.log(sum);


// Using Loop
let Sum = 0;
for (const value of arr) {
    Sum += value;
}
console.log(Sum);