// Right rotaion by k element


const arr =  [1, 2, 3, 4, 5];

function rightRotateByOneElement(Arr, k){
     if(Arr.length === 0)
        return Arr;
        for(let j = 0; k > j; j++){
            let last = Arr[Arr.length - 1]
          for(let i = Arr.length - 1; i > 0; i--){
          Arr[i] = Arr[i - 1];
    }
     Arr[0] = last;
    }
    return Arr;
}

function print(){
    console.log(rightRotateByOneElement(arr, 7))
}
// print();


// Use different approach

function rightRotate(Arr, k) {
  const n = Arr.length;
  if (n === 0) return Arr;

  k = k % n; 
  return Arr.slice(n - k).concat(Arr.slice(0, n - k));
}
console.log(rightRotate(arr, 7));


