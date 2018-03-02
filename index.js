// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
	if(name){
		return "Happy holidays, " + name + "!";
	} else {
		return "Happy holidays";
	}
}

var holiday = "christmas"
var name = "Dominick"

function happyHolidaysTo(holiday, name){
	if(holiday + name){
		return "Happy holidays, "+ holiday + name + "!";
	} else {
		return "Happy holidays";
	}
}


