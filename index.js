/*  
    Implement a function called saturdayFun. It should return a String like "This
    Saturday, I want to ....!" Fill in the ... with the activity that's passed in
    as the first parameter. If nothing is passed in, default to "roller-skate". 
    Use the learn program to verify you've gotten a working implementation. Come
    back here once you've gotten just this set of tests passing.
*/

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

/*
    Implement a function called mondayWork.It should return a String like "This 
    Monday, I will ... ." Fill in the ... with the activity that's passed in as 
    the first parameter. If nothing is passed in, default to "go to the office".
    Use the learn program to verify you've gotten a working implementation.Come
    back here once you've gotten just this set of tests passing.
*/

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

/*
    Implement a function called wrapAdjective.
    It should return a function
    This "inner" function should:
    take a single parameter that should default to "special". Name it however you wish.
    return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
    It should take as parameter a String that will be used to create visual flair
    You may call the parameter whatever you like, but its default value should be "*"
    Call example: let encouragingPromptFunction = wrapAdjective("!!!")
    Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"
*/
function wrapAdjective(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
/*  defines an object called Calculator
      that has a function called add
      that has a function called subtract
      that has a function called multiply
      that has a function called divide
*/
const Calculator = {
    add: function (num1, num2) { return num1 + num2; },
    subtract: function (num1, num2) { return num1 - num2; },
    multiply: function (num1, num2) { return num1 * num2; },
    divide: function (num1, num2) { return num1 / num2; }
};
/*  Defines a function called actionApplyer
      receives two arguments: a starting integer and an array of functions
*/
function actionApplyer(int, functions){
    let result = int;
    if (functions.length != 0){
        for (let i = 0; i < functions.length; i++) {
            result = functions[i](result);
        }
    }
    return result;
}