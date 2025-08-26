// Right rotaion by 1 element

function right_Rotate_By_One_Element(Arr){
     if(Arr.length === 0)
        return Arr;
        let last = Arr[Arr.length - 1]
    for(let i = Arr.length - 1; i > 0; i--){
       Arr[i] = Arr[i - 1];
    }
     Arr[0] = last;
    return Arr;
}
console.log(right_Rotate_By_One_Element([1, 2, 3, 4, 5]));
console.log(right_Rotate_By_One_Element([-1, -2, -3, -4]));
console.log(right_Rotate_By_One_Element([5, 5, 5, 5]));




// using shift + push

function rigthRotateByOne(Arr){
    if(Arr.length === 0)
        return Arr;
     Arr.unshift(Arr.pop());
    return Arr;
}
console.log(rigthRotateByOne([1, 2, 3, 4, 5]));
console.log(rigthRotateByOne([-1, -2, -3, -4]));
console.log(rigthRotateByOne([5, 5, 5, 5]));

