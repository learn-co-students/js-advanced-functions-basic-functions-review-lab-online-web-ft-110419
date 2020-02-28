function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(string1 = '*') {
  return function(string2 = "special") {
    return `You are ${string1}${string2}${string1}!`;
  };
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(start, array) {
  let startingPoint = start;
  for (let i = 0; i < array.length; i++) {
    startingPoint = array[i](startingPoint);
  }
  return startingPoint;
}
