// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = "*") {
  return function(string) {
    return `You are ${wrapper}${string}${wrapper}!`;
  };
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

function actionApplyer(num, arrOfFuncs) {
  let total = arrOfFuncs.reduce((sum, func) => func(num), 0);
  return arrOfFuncs.length == 0 ? num : total - (arrOfFuncs.length - 1);
}
