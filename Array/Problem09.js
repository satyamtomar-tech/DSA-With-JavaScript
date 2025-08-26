//  segregate 0s and 1s

const arr =  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0];

function segregateZerosAndOnes(Arr){
    
    if(Arr.length === 0)
        return [];
    let j = 0;
    for(let i = 0; i < Arr.length; i++){
        if(Arr[i] === 0){
            [Arr[i],Arr[j]] = [Arr[j],Arr[i]]
            j++;
        }
    }
    return Arr;
}
console.log(segregateZerosAndOnes(arr));
