// Your code here
function saturdayFun(input = "roller-skate") {
    return `This Saturday, I want to ${input}!`
}

function mondayWork(input = "go to the office") {
    return "This Monday, I will " + input + "."    
}

function wrapAdjective(flair = "*") {
    return function(char = "special") {
        return `You are ${flair}${char}${flair}!`
    }    
}
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add: function add(a, b) {
        return a + b
    },
    subtract: function subtract(a, b) {
        return a - b
    },
    multiply: function multiply(a, b) {
        return a * b
    },
    divide: function divide(a, b) {
        return a / b
    }
}

function actionApplyer(num, arry) {
    let finalNum = num
    arry.forEach(element => {
       finalNum += element(num)
    });
    return finalNum
}


