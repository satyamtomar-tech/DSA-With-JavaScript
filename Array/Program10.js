//  Move all negative numbers to the left side and positive numbers to the right side.

function moveElementStableInPlace(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            let temp = arr[i];
            let k = i;
            while(k > j){
                arr[k] = arr[k-1];
                k--;
            }
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}
console.log(moveElementStableInPlace([-1, 5, -3, 7]));

// Extra Space

function moveElementStable(arr){
    let result = [];
    
    for (let num of arr){
        if(num < 0) result.push(num);
    }
    for (let num of arr){
        if(num >= 0) result.push(num);
    }
    return result;
}

console.log(moveElementStable([5, -1, 7, -3])); 

