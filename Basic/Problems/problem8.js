// Leap year check
// Generate multiplication table
// Count digits in number


function leapyear(year){
   if(typeof year !== "number" || !Number.isFinite(year))
     return "Invalid Input";

    if(year % 100 === 0){
        if(year % 400 === 0)
            return true;
        else
            return false;
    }
    else{
        if(year % 4 === 0)
            return true;
        else 
            return false;
    }
}
console.log(leapyear(1900));


// second appraoch

function leapYear(year) {
  if (typeof year !== "number" || !Number.isFinite(year)) {
    return "Invalid Input";
  }
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(leapYear(1900));  


// Generate multiplication table

function table(value){
    if (typeof value !== "number") 
       return [];

    const arr = [];
    for(let i = 1; i <= 10; i++)
        arr.push(value * i);     
    return arr;
}
console.log(table('5'));



// Count digits in number

function digitCount(num){
     if (typeof num !== "number" || !Number.isInteger(num))
         throw new Error("Please provide a valid integer");
     num = Math.abs(num);
    if(num === 0)
        return 1;
    let count = 0;
    while(num > 0){
       count++;
       num = Math.floor(num / 10);
    }
    return  count;
}
console.log(digitCount(5468));
console.log(digitCount('0'));