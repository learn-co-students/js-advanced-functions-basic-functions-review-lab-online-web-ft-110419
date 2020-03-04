// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(travel='go to the office' ){
    return `This Monday, I will ${travel}.`;
}

function wrapAdjective(value='*') {
    return function(arg='special') {
        return `You are ${value}${arg}${value}!`;
    }
}

let Calculator = {}
Calculator.add = function(num1, num2){
    return num1 + num2;
}
Calculator.subtract = function(num1, num2){ 
    return num1 - num2;
}
Calculator.multiply = function(num1, num2) {
    return num1 * num2;
}
Calculator.divide = function(num1, num2) {
    return num1 / num2;
}
Calculator.modulo = function(num1) {
    return num1 % 7;
}


function actionApplyer(num, array){
    let arg = num;
    
    array.forEach(element => {
        arg = element(arg);
    });
    return arg;
}



