/*console.log("hello world")
var person;
person ="John"
console.log()
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
var currentTime = 7;
console.log(true || false);
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
console.log (5 == 5);
console.log (5 === 5);
console.log (5 == "5");// inequality compares value
console.log (5 === "5"); // strict inequality compares value and types
console.log (22%4); // modulus
console.log(5 !== "5")//
console.log(5 !== 5)
console.log(5 != 5)
console.log ("inter" + "net")// "internet" called concatenator when usedfor joining 2 words together(concatenation)
console.log("note" + "book")// "notebook" 
console.log(2 + 4); //addition operator
console.log (2 + "2");// JS coerces the first number 2 into string and join it to 2
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9 +=(addition assignment operator); redues the lines of codes
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..." The concatenation assignment operatpr is thesame as the assignment opperator, the only difference is that it is used with string datatype
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
var currentTime = 10;
console.log(currentTime > 9 || currentTime < 17);
var currentTime = 7;
console.log(true || false);//
var score = 8;
console.log("Mid-level skills:");
console.log( score > 0 && score < 10 );
var timeRemaining = 0;
var energy = 10;
console.log("Game over:")
console.log(timeRemaining == 0 || energy == 0);

var num1 = 2;//You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number", result1);
console.log("Is", num2, "an even number", result2);

var now = "Now in";//concatenation
var three = 3;
var d = "D";
console.log( now + three +  d);

var counter = 0;// accumulate values in variables.
counter += 5;
counter += 3;
console.log(counter);

console.log(1 + "come");

var i = 7;
 i += 1;
 i += 2;
 console.log(i += 2);
   var light ="green"
 if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

var age = 18
if (age >= 65)
{
    console.log("You get your income from pension")
}  else if (age < 65 && age >= 18)
{
        console.log("Each month you get salary")
    }else if (age < 18)
{ 
    console.log("You get an allowance")
}else

{console.log("The value of the age is not numerical")}


    var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

var counter = 10
while (counter > 0) {
  console.log(counter);
  counter = counter - 1;
}
console.log('Happy New Year')

for (var i = 5; i > 0; i--) {
  console.log(i);
};
console.log('Countdown finished!');
 //single loop
 for (var firstNum = 0; firstNum < 2; firstNum++){
  console.log(firstNum);
 }
//Outputing a custom multiplication Let's say I want to output a custom multiplication table.

//This is a perfect use case scenario for nested loops.

//The outer loop's counter variable will act as the first number to be multiplied, and the inner loop counter variable will act as the second number to be multiplied.
 //single loop
 for (var firstNum = 0; firstNum < 2; firstNum++){
  console.log(firstNum);
 }

 //single loop
 for (var secondNum = 0; secondNum < 10; secondNum++){
  console.log(secondNum);
 }
//nested loop - one inside another
//Now that I'm nesting the second for loop inside the first one, and that I'm console logging the values of both counter variables as the loops are progressing, the output looks like this: check the result section
for (var firstNum = 0; firstNum < 2; firstNum++){
  for (var secondNum = 0; secondNum < 10; secondNum++){
    console.log(firstNum + ", " + secondNum);
  }
}
//Now that I have a list of all the numbers that will be multiplied, having the actual result of this multiplication is as easy as updating the console.log() call:
for (var firstNum = 0; firstNum < 2; firstNum++){
  for (var secondNum = 0; secondNum < 10; secondNum++){
    console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
  }
}
//nested loops = one inside another
//for (var i = 100; i > 10; i - 10){
 // for (var j = 10; j > 4; j = j -5){
  //  console.log(i + "divided by" + j + " equals " + i / j)
 // }

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('apple', 'pear', 'plum');
//}
*/
/*function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var car = {};
car.color = "red";//update the value of a property of the car object
car.turkey = function(){
    console.log('engine running');
}
*/
//creating an object using constructor option
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}//adding a methid to a function
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
//car.lightsOn();
//ussing typeOf operator
/*var test = typeof('what is this?');
var test1 = typeof(1);
console.log(test);
console.log(test1);
var result = "Hello".indexOf('l');
console.log(result);

var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
console.log(clothes);
*/
/*var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');

  console.log(food[1])

  var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog);*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")
/*
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")*/

/*var result = null;
  console.log(result);
  try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
  */
  throw new Error();
  console.log("Hello");
  try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    }