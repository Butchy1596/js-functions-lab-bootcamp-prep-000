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


function happyHolidaysTo(holiday, name){
	if(holiday){
		return "Happy holidays, "+ holiday + "!";
	} else if (name) {
		return "Happy holidays, " + name + "!";
	} else {
	  return "Happy holidays, " + holiday + name + "!";
	}
}
