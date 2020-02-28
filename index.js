function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function(adjective = "special") {
        return `You are ${string}${adjective}${string}!`
    }
}

const Calculator = {
    add: function() {return 1 + 3}, 
    subtract: function() {return 1 - 3}, 
    multiply: function() {return 1 * 3}, 
    divide: function() {return 10 / 5}
}

function actionApplyer(integer, array) {
    if (array.length === 0) {
        return integer 
    } 
    if (array.length !== 0) {
        const [calc1, calc2, calc3] = array
        let answer1 = calc1(integer);
        let answer2 = calc2(answer1);
        return calc3(answer2)
    }
}
