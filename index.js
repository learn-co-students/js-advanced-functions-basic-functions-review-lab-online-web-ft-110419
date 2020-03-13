// Your code here
function saturdayFun (day= "roller-skate") {
   return `This Saturday, I want to ${day}!`;
}
saturdayFun("bathe my dog");

 function mondayWork (arg= "go to the office")  {
  return `This Monday, I will ${arg}.`  
}

mondayWork("work from home")

function wrapAdjective (val= "*") {
 let innerFn = function(ele = "special") {
   return `You are ${val}${ele}${val}!`
 }
 return innerFn
}
let somehing = wrapAdjective("||")

let add = (a,b)=> a + b
let subtract = (a,b)=>  a - b
let multiply = (a,b)=>  a * b
let divide = (a,b)=>  a / b

let Calculator = {
  add,
  subtract,
  multiply,
  divide
}
 let arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]

function actionApplyer (a) {
  return (a % 9);
}
actionApplyer(...arrayOfTransforms)