/**
 * Task
 * Declare a function named divideNum that takes two numbers as parameters. Divide the first number by the second number and
 * return the result.
 *
 * @param  	dividend 	number being divided
 * @param 	divisor		number the dividend is divided by
 * @return				quotient (result of division).
 */
function divideNum(dividend, divisor) {
	var answer = dividend / divisor;
	return answer;
	//return result
}

/**
 * Task
 * Write a function named returnArray that accepts 3 car makes and returns them in an array
 *
 * @param  	makeA 	make of car
 * @param 	makeB	make of car
 * @param 	makeB	make of car
 * @return			Array of car makes (strings).
 */
function returnArray(makeA, makeB, makeC) {
	var carMakes = [];
	carMakes.push(makeA);
	carMakes.push(makeB);
	carMakes.push(makeC);
	return carMakes;
	//return array
}

/**
 * Task
 * Write a function named student that has firstname, lastname and email parameters and returns an object 
 * containing the passed parameters as properties only. 
 *
 * @param  	firstname 	Students first name
 * @param 	lastname	Students last name
 * @param 	email		Students email address
 * @return				Student object
 */
function student(firstname, lastname, email) {
	var newStudent = {}
	newStudent.firstname = firstname;
	newStudent.lastname = lastname;
	newStudent.email = email;
	//consider whether you want to use literal or object notation
	return newStudent;
	//return student
}

/**
 * Task
 * Write a function that returns the URL of the current page.
 *
 * @return 	URL of current page.
 */
function getCurrentURL() {
	return window.location;
	//return the url of the current page
}
/******************************************************************************************************
 *For the next set of tasks you may like to refer to the lecture slides about declaring objects, 
 *for example code, to start you off. 
/******************************************************************************************************/
/**
 * Task
 * Write a function named strungOut, that takes a string and a separate substring and returns and object that contains:
 * a property named original containing the string
 * a property called caps containing the string in uppercase
 * a property called subIndex containing the index value of the location of the substring in the string.
 *
 * @return 	Object containing information about a string.
 */
function strungOut(strString, strSubString) {
	var newString = {}
	newString.original = strString;
	newString.caps = strString.toUpperCase();
	newString.subIndex = strString.indexOf(strSubString);
	//consider whether you want to use literal or object notation

	//return string information object
	return newString;
}

/**
 * Task
 * Write a function named strungOut2 that takes a string and a separate substring and returns and object that contains:
 * a property named original containing the string
 * a method (implemented as a function) named getUpper that returns the string in uppercase
 * a method (implemented as a function) called getIndex that returns the index value of the location of the substring 
 * in the string 
 * @return 	Object containing information about a string.
 */
function strungOut2(strString, strSubString) {
	let newString2 = {};
	newString2.original = strString;
	newString2.getUpper = function getUpper() {
		return strString.toUpperCase();
	}
	newString2.getIndex = function getIndex() {
		return strString.indexOf(strSubString);
	}
	//consider whether you want to use literal or object notation

	//return string information object
	return newString2;
}

/******************************************************************************************************
/*For the next set of tasks you may like to refer to the lecture slides for examples to start you off. 
/******************************************************************************************************/
/** 
 * TASK : Write a function called 'Hotel' which defines a hotel object. It should have properties of 
 * name, number of rooms in total and the number of rooms currently occupied. 
 * Add a method (implemented as a function) to the object which determines the number of rooms the hotel currently has 
 * available. 
 */
/*Student version*/
function Hotel(name, totalRooms, bookedRooms) {
	this.name = name;
	this.rooms = totalRooms;
	this.booked = bookedRooms;
	this.roomsAvailable = function check() {
		return this.totalRooms - this.bookedRooms;
	}
	//if you use literal notation you will need to return the Hotel

	//If you use object notation you will not need to return anything.
}

/**
 * TASK : Write a function called createHotels(). It should declare three hotel objects, each one with different numbers 
 * of rooms and different numbers of rooms booked. 
 * Give your hotels a property of name and name your hotels anything you like. 
 * Decide how many rooms they should have. 
 * The largest hotel is called "The Grand Hotel", and it should have 421 rooms of which 398 are currently booked. 
 * The middle sized hotel is called "The Seaview Hotel", and it should have 222 rooms of which 189 are currently booked. 
 * The smallest sized hotel is called "The Quayside Hotel", and it should have 84 rooms of which 36 are currently booked.   
 * Use console.table to view and check the the object contents (Not tested but good practise for debugging objects).
 * Return an array containing all three hotels.
 * 
 * @return	An array containing the array of hotels
 */
function createHotels() {
	var chain = [];
	//create objects for the hotels
	var theGrandHotel = new Hotel("The Grand Hotel", 221, 398);
	var theSeaViewHotel = new Hotel("The Seaview Hotel", 222, 189);
	var theQuaySideHotel = new Hotel("The Quayside Hotel", 84, 36);
	//Use console.table to view and check the the object contents 
	//return an array containing the three hotels in the chain
	chain.push(theGrandHotel);
	chain.push(theSeaViewHotel);
	chain.push(theQuaySideHotel);
	//console.log(theGrandHotel);
	//console.log(chain[0]);
	//console.log(chain[1]);
	//console.log(chain[2]);
	//console.table(chain);
	return chain;
}

/**
 * TASK : Write a function called totalAvailability(). It should take in an array of hotel objects as a parameter. 
 * Loop through the array. Use the method (implemented as a function) inside the hotel object, which determines 
 * the hotel room availablilty, to calculate the total numbers of rooms available across all of the hotels in the chain.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 *
 * @return The total numbers of rooms available across the chain.
 */
/*Student version*/
function totalAvailability(chainOfHotels) {
	//console.table(chainOfHotels);
	//console.log(chainOfHotels[0].rooms);
	var roomsAvailable = 0;
	var i;
	for (i = 0; i < chainOfHotels.length; i++) {
		roomsAvailable = roomsAvailable + (chainOfHotels[i].rooms - chainOfHotels[i].booked);
		//console.log(chainOfHotels[i].booked);
		//console.log(roomsAvailable);
		//console.log(roomsAvailable);
	}
	//return the number of rooms available across all of the hotels in the chain
	//console.log(totalRoomAvailable);
	return roomsAvailable;
}
/**
 * TASK : Write a function called addSwimmingPool. It should call the createHotels() function and save the 
 * array of three hotels.
 * Using a loop find the largest hotel by number of rooms.
 * Add a 'swimmingPool' property to each hotel, and set it to true for hotels which have more than 250 rooms. 
 * Set it to false for the others.
 *
 * @param	chainOfHotels	An array containing hotels in the same chain.
 * @return 					An array of hotels in the chain which have swimming pools.
 */
function addSwimmingPools(chainOfHotels) {
	var chain = createHotels();
	var hotelsWithSwimmingPools = [];
	var i;
	//console.table(chainOfHotels);
	//console.log(chainOfHotels);
	//console.table(chain);
	//console.log(chain);
	for (i = 0; i < chainOfHotels.length; i++) {
		//console.log(chainOfHotels[i]);
		if (chainOfHotels[i].rooms < 250) {
			chainOfHotels[i].swimmingPool = "false";
			//console.log(chainOfHotels[i]);
		} else if (chainOfHotels[i].rooms > 250) {
			chainOfHotels[i].swimmingPool = "true";
			hotelsWithSwimmingPools.push(chainOfHotels[i]);
			//console.log(chainOfHotels[i]);
		}
	}
	for (i = 0; i < chain.length; i++) {
		if (chain[i].rooms < 250) {
			chain[i].swimmingPool = "false";
			//console.log(chain[i]);
		} else if (chain[i].rooms > 250) {
			chain[i].swimmingPool = "true";
			hotelsWithSwimmingPools.push(chain[i]);
			//console.log(chain[i]);
		}
	}
	//console.table(hotelsWithSwimmingPools);
	//use console.table to check the values in the array

	//return an array of hotels which have swimming pools
	return hotelsWithSwimmingPools;
}

/**
 * TASK : 
 * This time some hotels have pools and gyms, some have a pool or a gym, and others have neither.
 * Write a function called ratings. 
 * From the ratings function, call the calculateScore function (details below) to work out the score on 
 * which the rating is based.
 * If the hotel scores less than three they are awarded a Bronze rating.
 * If the hotel scores three or more, but less than 7, they are awarded a Silver rating.
 * If the hotel scores 7 or more they receive a Gold rating.
 * The average hotel customer wants a silver rated hotel, so the function 'ratings' should return the 
 * silver rated hotels in an array.
 * Properties available in each hotel are:-
 * * name - string 
 * * totalRooms - number
 * * bookedRooms - number 
 * * hasSwimmingPool - boolean
 * * hasGym - boolean
 * * roomsAvailable - function
 * @param 	chainOfHotels 	Array of hotel objects belonging to the same hotel chain.
 * @return 					Array containing hotels with a Silver rating.
 */
function ratings(chainOfHotels) {
	var silverRatedHotels = [];
	//console.log(chainOfHotels.length);
	console.table(chainOfHotels);
	for (i = 0; i < chainOfHotels.length; i++) {
		//console.log(chainOfHotels[i]);
		if (calculateScore(chainOfHotels[i]) > 3 && calculateScore(chainOfHotels[i]) < 7) {
			console.log("The hotels score is " + calculateScore(chainOfHotels[i]));
			silverRatedHotels.push(chainOfHotels[i]);
		}
		//console.log(calculateScore(chainOfHotels[i]));
	}
	//use console.table to check the values in the array
	console.log(silverRatedHotels);
	//return array of Silver rated hotels
	return silverRatedHotels;
}

/* TASK
* Write a function called calculateScore to calculate the hotels score:
* 1 point for each 100 rooms they have
* 3 points for a pool 
* 2 points for a gym
* Call this method from 'ratings' to get the score, on which to base the ratings.
* Properties available in each hotel are:-
* * name - string 
* * totalRooms - number
* * bookedRooms - number 
* * hasSwimmingPool - boolean
* * hasGym - boolean
* * roomsAvailable - function
*
* @return 	score
*/
function calculateScore(hotelToScore) {
	//console.log("calculateScore has been called with " + hotelToScore.name);
	var score = 0;
	var roomScore = hotelToScore.totalRooms / 100;
	var hasGym = hotelToScore.hasGym;
	var hasSwimmingPool = hotelToScore.hasSwimmingPool;
	var arrayHotelsWithPoolsAndGyms = [];
	//console.log("Hotel has a swimming pool " + hotelToScore.hasSwimmingPool);
	//console.log("Hotel has a swimming pool " + hasSwimmingPool);
	//console.log("Hotel has a gym " + hotelToScore.hasGym);
	//console.log("Hotel has a gym " + hasGym);
	//console.log("The hotels room score " + roomScore);
	if (hasSwimmingPool == true && hasGym == true) {
		//console.log("first if has been reached");
		score = score + roomScore + 5;
		//console.log(score);
		arrayHotelsWithPoolsAndGyms.push(hotelToScore);
		//console.table(arrayHotelsWithPoolsAndGyms);
	} else if (hasGym == true) {
		//console.log("first else if has been reached");
		score = score + roomScore + 2;
		//console.log(score);
	} else if (hasSwimmingPool == true) {
		//console.log("second else if has been reached");
		score = score + roomScore + 3;
		//console.log(score);
	} else {
		//console.log("first else has been reached");
		score = score + roomScore;
		//console.log(score);
	}
	//return array
	return score;
}
