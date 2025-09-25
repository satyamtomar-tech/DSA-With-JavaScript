// Simple calculator

function calculator(choice, num1, num2){

  function Addition(num1, num2){
    if(typeof num1 !== "number"|| typeof num2 !== "number"|| 
        !Number.isFinite(num1)||!Number.isFinite(num2)){
        return "invalid Input";
    }
    return num1 + num2;
  }
  
  function Subtraction(num1, num2){
    if(typeof num1 !== "number"|| typeof num2 !== "number"|| 
        !Number.isFinite(num1)||!Number.isFinite(num2)){
        return "invalid Input";
    }
    return num1 - num2;
  }
  
  function Multiplication(num1, num2){
   if(typeof num1 !== "number"|| typeof num2 !== "number"|| 
        !Number.isFinite(num1)||!Number.isFinite(num2)){
        return "invalid Input";
    }
    return num1 * num2;
  }

  function Division(num1, num2){
   if(typeof num1 !== "number"|| typeof num2 !== "number"|| 
        !Number.isFinite(num1)||!Number.isFinite(num2)){
        return "invalid Input";
    }
    return num1 / num2;
  }

  if (choice === "Addition") return Addition(num1, num2);
  else if (choice === "Subtraction") return Subtraction(num1, num2);
  else if (choice === "Multiplication") return Multiplication(num1, num2);
  else if (choice === "Division") return Division(num1, num2);
  else return "Invalid Choice";
}

console.log(calculator("Addition", 5, 2));      
console.log(calculator("Subtraction", 5, 3));     
console.log(calculator("Multiplication", 5, 3));  
console.log(calculator("Division", 10, 2));       
console.log(calculator("Division", 10, 0)); 