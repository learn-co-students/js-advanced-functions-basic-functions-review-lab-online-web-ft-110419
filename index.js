// Your code here
function saturdayFun(doThis='roller-skate') {
    return `This Saturday, I want to ${doThis}!`
}

let mondayWork = function(doThis="go to the office") {
  return `This Monday, I will ${doThis}.`
}

let wrapAdjective = function(firstParam='*') {
  return function(secondParam='special') {
    return `You are ${firstParam}${secondParam}${firstParam}!`
  }
}

let Calculator = {
  add: function(num1, num2) {
    return num1 += num2
  },

  subtract: function(num1, num2) {
    return num1 -= num2
  },

  multiply: function(num1, num2) {
    return num1 *= num2
  },

  divide: function(num1, num2) {
    return num1 /= num2
  }
}

function actionApplyer(num, arr) {
  let a = num

  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a)
  }
  return a
}
