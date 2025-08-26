// Left rotaion by 1 element

function leftRotateByOne(Arr){
    if(Arr.length === 0)
        return Arr;
    let first = Arr[0];
    for(let i = 0; i < Arr.length; i++){
        Arr[i] = Arr[i + 1];
    }
    Arr[(Arr.length) - 1] = first;
    return Arr;
}
console.log(leftRotateByOne([1, 2, 3, 4, 5]));
console.log(leftRotateByOne([-1, -2, -3, -4]));
console.log(leftRotateByOne([5, 5, 5, 5]));


// using shift + push 

function leftRotateByOne(arr) {
    if (arr.length === 0) return arr;
    arr.push(arr.shift()); 
    return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]));
