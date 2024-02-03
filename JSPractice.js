
/*const cars = ["benz", "volvo", "peogeut"];
console.log (cars);// different datatypes in JS, Numbers, Boolean, String, Arrays and Objects
typeof cars
typeof "car"
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
text.length;
console.log(text.length);
let x = parseInt(-10);
let y = 9.656;
console.log (x);
//console.log (y);*/
let f = 9.656;
f.toFixed(4);
console.log(f);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length - 2];
console.log(fruits);
fruits.push("lemon");
console.log(fruits);
const points = [6];
console.log(points)
const clothes = ["gown", "trouser", "skirt"];
console.log(clothes);
typeof clothes;
clothes.toString;
console.log(clothes)
const fruit = ["Banana", "Orange", "Apple", "Mango"]
fruit.pop();
console.log(fruit);
fruit.join(" * ");
console.log(fruit);
const nums= [40, 100, 1, 5, 25, 10];
nums.sort(function(a,b){return b - a});
console.log(nums);
const colors = ["Yellow", "Green", "orange", "Blue"];
colors.includes["Yellow"];
console.log(colors);
const numbers =[45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array){
  txt += value + "<br>";
}
console.log(txt);
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array){
  return value * 2;
}
console.log(numbers2);
const num = [45, 4, 9, 16, 25];
const over18 = num.filter(myFunction);
function myFunction(value, index, array){
  return value > 18;
  }
  console.log(over18);
  //Finding sum of a number
  const sum_of_numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(myFunction);
  function myFunction(total, value, index, array){
    return total + value;
  }
  console.log(sum);
  //Indedx off finds the position of an item
  const books = ["Apple", "Orange", "Apple", "Mango"];
  let position = books.indexOf("Apple") + 1;
  console.log(position);
  const fruitss = ["Banana", "Orange", "Apple", "Mango"]
  const keys = fruitss.keys();
  for (let of keys) {
    text += x + "<br>";
  }
  console.log(keys);