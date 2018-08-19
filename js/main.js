// #3 creating 5 strings in an array

var carsArray = ['Subaru', 'ACURA', 'nissan', 'TOYOTA', 'Honda'];
var newCar = [];

// looping through carsArray & changing carsArray to small case letters & pushing it to the newCar array
for(var i=0; i < carsArray.length; i++){
	newCar.push(carsArray[i].toLowerCase());
};

// looping through th new array and grabbing the first and last letter of each string
for(var i=0; i < newCar.length; i++) {
	console.log('First Letter is: ' + newCar[i].charAt(0), 'Last Letter is: ' + newCar[i].charAt(newCar[i].length-1));
};


var name = ["omar jemuel laruan aoay"]
// splits name by letter
var splitName = name.split("")
// looping throught the spliteName
for (var i=0; i < splitName.length; i++){
	console.log(splitName[i]);
};

// #8
// joining the splitname and replacing a letter from the string "name" and also logging it
var joinedName = splitName.join(" ");
var newName = joinedName.split('a').join('r');
console.log (newName);

// #9 function to validate email

function validateUserName() {

	var userName = document.getElementById('userName');
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
	// test username to see if it is valid
	console.log(regEx.test(userName.value));



};


// #10 using adeventlistener to add the function validateUsername

document.getElementById('testUserName').addEventListener("click", validateUserName)