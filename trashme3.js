// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. It should have a 
// speak() method that receives a string as input and returns a new version of that 
// string where the first letter of every word is replaced with the letter 'r'.
// The dog constructor (which is what this is) should take a name input, and the
// dog should receive the assigned name.

function generateDog( name, message) {
  this.name = name;
  this.legs = 4;
  this.weight = 150;
  this.color = silver;
  this.speak = function(message) {
    
  }
}








var dog = new generateDog('rex', "hellow")

// console.log( generateDog('rex', "hellow"))


// console.assert(dog.legs === 4)
// console.assert(dog.speak('i love you') === 'r rove rou')
// console.assert(dog.name === 'rex')



// // var dog = generateDog('carl')
// console.assert(dog.name === 'carl')