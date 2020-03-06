function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair + adjective + flair}!`
    }
}

let Calculator = {
    add: (function(num1, num2){return num1 + num2}),
    subtract: (function(num1, num2){return num1 - num2}),
    multiply: (function(num1, num2){return num1 * num2}),
    divide: (function(num1, num2){return num1 / num2})
};

function actionApplyer(startingNum, functions) {
    if (functions.length === 0) {
        return startingNum
    } else {
        let endResult = startingNum;
        functions.forEach(func => {
            endResult = func(endResult);
        })
        return endResult
    }
}