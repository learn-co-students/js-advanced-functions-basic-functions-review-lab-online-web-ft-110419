// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight) {
    let wrapFunc = function(adjective) {
        return `You are ${highlight} ${adjective} ${highlight}!`
    }
    return wrapFunc
}

const Calculator = {
    add : () => 1 + 3,
    subtract : () => 1 - 3,
    multiply : () => 1 * 3,
    divide : () => 10 / 5
}