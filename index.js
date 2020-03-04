// Your code here
function saturdayFun(rollerSkate = 'roller-skate'){
  return `This Saturday, I want to ${rollerSkate}!`
}

function mondayWork(work = 'go to the office'){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(style = "*"){
  return function(adj = "special"){
    return `You are ${style}${adj}${style}!`
  }
}
const Calculator = {
  add: function(num1, num2){
    return num1 + num2
  },
  subtract: function(num1, num2){
    return num1 - num2
  },
  multiply: function(num1, num2){
    return num1 * num2
  },
  divide: function(num1, num2){
    return num1 / num2
  }
}

function actionApplyer(start, array){
  let act = start
  for(let i = 0; i < array.length; i++){
    act = array[i](act)
  }
  return act
}
