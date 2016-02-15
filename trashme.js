
// write a function called getAllValues(). it should take as input an object, 
// and it should return the values of all the keys in the object as an array. 


var getAllValue = function (object) {
	var arrayOfKeys = [];
	
	for (var kee in object) {
			arrayOfKeys.push(object[kee]);
	} 

	return arrayOfKeys
}


var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}
var usrObj2 = {name: 'ari goldenberg', age: 44, email: 'agold@yahoo.com'}

console.log( getAllValue(usrObj) )
console.log( getAllValue(usrObj2) )