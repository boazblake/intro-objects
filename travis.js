// var countX = function(string){

//  	var characterArray = string.split('')

// 	console.log(characterArray);

// 	var xCount = 0;

// 	for (var i = 0; i < characterArray.length; i++) {
// 		if (characterArray[i] === 'x'){
			

// 			xCount = xCount + 1
// 			console.log(xCount)
// 		}		
// 	}
	
// 	return xCount

// };


// var result = countX("xaviers favorite dinosaur is a t-rex" , 'x')




// // More Generalizable.

// var countChar = function(sentence, chr) {

// 	var characterArray = string.split('chr');

// 	var xCount = 0;
// 	for (var i = 0; i < sentence.length; i++) {
// 		if (characterArray[i] === chr) {

// 			xCount += xCount
// 		}
// 	}
// 	return xCount
// }


// console.log(result)


// var hasWordDonkey = function(string){
	
// 	var wordArray = string.split(" ");

// 	var wordMatched = false

// 	for (var i = 0; i < wordArray.length; i++) {

// 		if ( wordArray[i] === 'donkey') {
// 			return true
// 		}
// 	} return false



// 	return wordMatched//  true or false (boolean)
// }

// var userQuestion = "is a donkey a good pet??"

// hasWordDonkey(userQuestion)

// /////////////////////////


// var hasWord = function(string, tgtWord){
	
// 	var wordArray = string.toLowerCase().split(" ");

// 	var wordMatched = false

// 	for (var i = 0; i < wordArray.length; i++) {

// 		if ( wordArray[i] === 'tgtWord.toLowerCase()') {
// 			return true
// 		}
// 	} return false



// 	return wordMatched//  true or false (boolean)
// }

// var userQuestion = "is a donkey a good pet??"

// hasWordDonkey(userQuestion)


// var a = hasWord{"i'm cold how random", "cold"}
// var b = hasWord("bling child and the no fingers hot bodies", "hot")
// var c = hasWord("we are at the iron yard", "Iron")





// console.log(a)
// console.log(b)
// console.log(c)



// /////////////////////////

// /////////////////////////


function canParty(arrOfObjects) {

	for (var i = 0; i < arrOfObjects.length; i++ ) {

		var newArray = []
		
		if (arrOfObjects[i].age >= 21) {
		
			newArray.push(arrOfObjects[i].name)
		}


	} 	return newArray

}


var listOfPeople = [
  {
    name: 'Jimmy Drayfus',
    age: 16,
    isFelon: true
  },
  {
    name: 'Sherry Tomkins',
    age: 33,
    isFelon: false
  },
  {
    name: 'Romy Podolski',
    age: 17,
    isFelon: false
  },
  {
    name: 'Buffy Chang',
    age: 25,
    isFelon: true
  },
  {
    name: 'Rufus Johnson',
    age: 38,
    isFelon: false
  },
  {
    name: 'Tammy Barkley',
    age: 20,
    isFelon: false
  },
  {
    name: 'Greta Irishkov',
    age: 22,
    isFelon: false
  }
]



var partyList = canParty(listOfPeople)



console.log(partyList)



