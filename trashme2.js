
// write a function called reverseObject that takes an object and reverses its properties and values
//   Example:

//   var obj = {
// 		item: 'book', 
// 		price: 33, 
// 		category: 'education'
// 	 }



function reverseObject(object) {
	var newReversedObject = {};
	for (var prop in object) {
		newReversedObject[prop] = object.prop
		newReversedObject.prop = object.prop
	} return newReversedObject
};





//   var reversd = reverseObject(obj)

  reversd = {
    book : 'item',
  	33 : 'price'
    education : 'category'
	}


	call(reverseObject(reversd))