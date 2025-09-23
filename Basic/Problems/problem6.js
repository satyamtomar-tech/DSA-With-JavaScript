// Fibinacci Number
// Find largest of 3 numbers
// Temperature conversion (C ↔ F)

function fibinacci(num){
  if(typeof num !== "number" || !Number.isInteger(num) || num < 0)
    return "Invalid Input"; 
   let prev = 0;
   let curr = 1; 
   let fibo = [];
  for(let i = 0; i < num; i++){
    fibo.push(prev);
    [prev, curr] = [curr, curr + prev];
  }
  return fibo;
}
console.log(fibinacci(5))


// Find largest of 3 numbers
function largestNumber(num1,num2,num3){
    if(
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        typeof num3 !== "number" ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2) ||
        !Number.isFinite(num3) 
    ){
        return "Invalid Number";
    }
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log(largestNumber(1, 2, 3));
console.log(largestNumber(1, 2, -3));
console.log(largestNumber(5, 5, 5));


// Temperature conversion (C ↔ F)
function temperatureConversion(temp, scale) {
  if (typeof temp !== "number" || !Number.isFinite(temp)) {
    return "Invalid Temperature";
  }

  if (scale === "CtoF") {
    return (temp * 9/5) + 32; 
  } else if (scale === "FtoC") {
    return (temp - 32) * 5/9; 
  } else {
    return "Invalid Scale (use 'CtoF' or 'FtoC')";
  }
}

console.log(temperatureConversion(0, "CtoF"));  
console.log(temperatureConversion(100, "CtoF")); 
console.log(temperatureConversion(32, "FtoC"));  
console.log(temperatureConversion(98.6, "FtoC"));

