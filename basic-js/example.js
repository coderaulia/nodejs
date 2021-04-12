var uname = "Coderaulia";
var age = 23;
var punyaHobi = true;

function getUser(userName, userAge, userPunyaHobi) {
	return (
		"My name is " +
		userName +
		" I am " +
		userAge +
		" years old, and did I have hobbies? " +
		userPunyaHobi
	);
}

//arrow function
const ambilUser = (userName, userAge, userPunyaHobi) => {
	return (
		"My name is " +
		userName +
		" I am " +
		userAge +
		" years old, and did I have hobbies? " +
		userPunyaHobi
	);
};

//mengeluarkan value fungsi ke console log
console.log(getUser(uname, age, punyaHobi));
