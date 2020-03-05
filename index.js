// Your code here
function saturdayFun(activity = "roller-skate") {
     return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flare = "*") {
    return function (params = "special") {
        return `You are ${flare}${params}${flare}!`
    }
}

let Calculator = {
     add:      (num1 = 0, num2 = 0) => { return (num1 + num2)},
     subtract: (num1 = 0, num2 = 0) => { return (num1 - num2)},
     multiply: (num1 = 0, num2 = 0) => { return (num1 * num2)},
     divide:   (num1 = 0, num2 = 0) => { return (num1 / num2)}
    }
    

function actionApplyer(integer, arr=[]) {
    if (Array.isArray(arr) && arr.length ===0) {
        return integer;
    } else {
        for (const i of arr) { integer = i(integer) } return integer }

}