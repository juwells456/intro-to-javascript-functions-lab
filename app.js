// // // Exercise 2

// // function isAdult(age) {
// //   if (age >= 18) {
// //     return "Adult";
// //   } else {
// //     return "Minor";
// //   }
// // }

// // // console.log(isAdult(30))

// // /*
// // Exercise 3: isCharAVowel()

// // Write a function named isCharAVowel that takes a single character as
// // an argument. It should return true if the character is a vowel and
// // false otherwise. For the purposes of this exercise, the character
// // y should not be considered a vowel.

// // Example: isCharAVowel('a') should return true.

// // Complete the exercise in the space below:
// // */

// // function isCharAVowel(char) {
// //   if (
// //     char === "a" ||
// //     char === "e" ||
// //     char === "i" ||
// //     char === "o" ||
// //     char === "u"
// //   ) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log("char", isCharAVowel("a"));
// // console.log("char", isCharAVowel("e"));
// // console.log("char", isCharAVowel("i"));
// // console.log("char", isCharAVowel("o"));
// // console.log("char", isCharAVowel("u"));
// // console.log("char", isCharAVowel("!a"));

// // /*
// // Exercise 4: generateEmail()

// // Create a function named generateEmail. It should take two strings:
// // a name and a domain. It should return a simple email address.

// // Example: generateEmail('johnsmith', 'example.com')
// // should return 'johnsmith@example.com'.

// // Complete the exercise in the space below:
// // */

// // function generateEmail (name, domain) {
// //   return name + "@" + domain
// // }

// // console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// /*
// Exercise 5: greetUser()

// Define a function called greetUser. It should take a name and a
// time of day (morning, afternoon, evening) and return a personalized
// greeting.

// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

// Complete the exercise in the space below:
// */

// function greetUser (name, time) {
//   return "Good," + " " + time + " " + name + "!"
// }

// console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip (bill, percentage){

  let tip = (bill * percentage)/100;

  return tip
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

