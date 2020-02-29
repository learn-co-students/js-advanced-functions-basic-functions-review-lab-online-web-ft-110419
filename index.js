function saturdayFun(activity="roller-skate"){
	return `This Saturday, I want to ${activity}!`
}// Your code here

function mondayWork(activity="go to the office"){
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
	return ((name = "special") => `You are ${flair}${name}${flair}!`)
}

let Calculator = {
	add: ((num1,num2) => num1+num2),
	subtract: ((num1,num2) => num1-num2),
	multiply: ((num1,num2) => num1*num2),
	divide: ((num1,num2) => num1/num2)

}

function actionApplyer(int, array) {
	if (array.length === 0) {
		return int
	}
	else {
		let answer = array[0](int)
		for (let i=1; i<array.length; i++) {
			answer = array[i](answer)
		}
		return answer
	}
}
