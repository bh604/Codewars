// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// const reverseList = list => list.reverse()

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

// function getChar(number) {
//     return String.fromChatCode(number)
// }

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// const mouthSize = animal => animal.toLowerCase() == 'alligator' ? 'small' : 'wide'

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// function mergeArrays(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// function isEmpty(obj) {
//   for(let key in obj) {
//     return false
//   }
//   return true
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// function sum(numbers) {
//   return numbers.reduce((acc, c) => acc + c, 0)
// }

// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

// function Ship(draft,crew) {
//   this.draft = draft;
//   this.crew = crew;
// }

// Ship.prototype.isWorthIt = function () {
//   return this.draft - (this.crew * 1.5) > 20;
// }

// Create new Calculator
// importance: 5

// Create a constructor function Calculator that creates objects with 3 methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product of these properties.

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b){
//   let arr = []
//   for(let i = a; i <= b; i++) {
//     arr.push(i)
//   }
//   return arr
// }

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
// function addLength(str) {
//   return str.split(' ').map((word) => `${word} ${word.length}`)
// }

// // Correct one

// function addLength(str) {
//   return str.split(' ').map((s) => `${s} ${s.length}`)
// }

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// function noBoringZeros(n) {
//   return n.map((n) => {})
// }

// function noBoringZeros(n) {
//   while (n % 10 == 0 && n != 0) {
//     n /= 10
//   }
//   return n
// }

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

// var cubeChecker = function(volume, side){
//   return Math.pow(side, 3) === volume && side > 0;
// };

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function inLove(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// const addBinary = (a,b) => (a + b).toString(2)

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// function getRealFloor(n) {
//    if(n >= 1 && n <= 12) {
//      return n - 1
//    }else if(n > 13) {
//      return n - 2;
//    }else{
//      return n;
//    }
//  }

//  function getRealFloor(n) {
//   return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// function findMultiples(int,limit){
//   let result = []

//   for (let i = int; i<=limit ; i+=int)
//     result.push(i)

//   return result
// }

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x) {
// 	return typeof x === 'number' ? (x * 50) + 6 : 'Error'
// }
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// function howMuchILoveYou(nbPetals) {
//   let phrase = {
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
//   let sum = 0
//   for(let i = begin; i <= end; i+=step){
//     sum+=i
//   }
//   return sum
// };

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n) {
//   return +n.toString().split('').sort().reverse().join('');
// }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// function getMiddle(s) {
//   return s.slice((s.length-1)/2,s.length/2+1)
// }

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// function reverse(string){
//   //your code here
//   return string.split(' ').reverse().join(' ')
// }

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// var capitals = function (word) {
//   var caps = [];
// 	for(var i = 0; i < word.length; i++) {
//     if(word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// function calculateYears(principal, interest, tax, desired) {
//   // your code
//   var years = 0;
//   while(principal < desired){
//     principal += (principal * interest) * (1 - tax);
//     years++;
//   }
//   return years;
// }

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//   return arr.filter((x,i) => {
//     return i % 2 === 0
//   })
// }

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// function printerError(s) {
//   // your code
//   var count = 0;
//   for(var i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count+"/"+s.length;
// }

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   // Your solution here
//   let total = 0
//   if(d >= 7){
//     total = (40 * d) - 50;
//   }else if(d >= 3 && d < 7){
//     total = (40 * d) - 20;
//   }else{
//     total = 40 * d;
//   }
//   return total
// }

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// const howManyLightsabersDoYouOwn = n => n == "Zach" ? 18 : 0;

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// function nameShuffler(str){
//   //Shuffle It
//   return str.split(' ').reverse().join(' ')
// }

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

// const sayHello = name => `Hello, ${name}`

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   let vowels = 'aeiou'
//   return str.split('')
//             .filter(letter => !vowels.includes(letter.toLowerCase()))
//             .join('')
// }

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// function pipeFix(numbers){
//   let min = numbers[0]
//   let max = numbers[numbers.length-1]
//   let fixedList = []
//   for(let i = min; i <= max; i++){
//     fixedList.push(i)
//   }
//   return fixedList
// }

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//   return name === owner ? 'Hello boss' : 	'Hello guest';
// }

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// function strCount(str, letter){
//   //code here
//   let count = 0;
//   for(let i = 0; i <= str.length-1; i++){
//     if(str[i] === letter) {
//       count += 1
//     }
//   }
//   return count
// }

// function strCount(str, letter){
//   return str.split(letter).length-1
// }

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//   // your code here
//   return array.length ? array.reduce((acc,c) => acc + c, 0) / array.length : 0
// }

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// function removeUrlAnchor(url){
//     return url.split('#')[0];
//   }

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// function include(arr, item){
//     // ...
//     return arr.includes(item)
//   }

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// function GetSum(a, b) {
//     return (a + b) * (Math.abs(a - b) + 1) / 2;
//   }

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//   return n === 1 ? false : true;
// }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums){
//   return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
// }

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// function friend(friends) {
//   return friends.filter(n => n.length === 4)
// }

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num){
//   let total = num + 5
//   return total
// }

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

//  With `name` = "john"  => return "Hello, John!"
//  With `name` = "aliCE" => return "Hello, Alice!"
//  With `name` not given
//   or `name` = ""        => return "Hello, World!"

// function hello(name) {
// 	return `Hello ${
// 		name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'
// 	}`;
// }

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"

// function derive(coefficient, exponent) {
// 	return `${coefficient * exponent}x^${exponent - 1}`;
// }

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// function expressionMatter(a, b, c) {
//   return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
// }

// how do you return a new array of numbers that includes every even number from the previous Arrays

// let evenNums = (arr) => arr.filter((n) => n % 2 === 0);

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// function squareDigits(num){
//   return Number(num.toString().split('').map(x=>x*x).join(''))
// }

// let squareDigits = (num) =>
// 	Number(
// 		num
// 			.toString()
// 			.split('')
// 			.map((x) => x * x)
// 			.join('')
// 	);

// let squareDigits = (num) =>
// 	Number(
// 		num
// 			.toString()
// 			.split('')
// 			.map((x) => x * x)
// 			.join('')
// 	);

// how to return even numbers only from an Array
// let evenNums = (arr) => arr.filter((num) => num % 2 === 0);

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// let summation = function (num) {
// 	let result = 0;
// 	for (let i = 1; i <= num; i++) {
// 		result += i;
// 	}
// 	return result;
// };

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// function take(arr, n) {
//   // Your code here
//   return arr.slice(0,n)
// }

// let take = (arr, n) => arr.slice(0, n);

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
// 	return str.split('').reverse().join('');
// }

// let solution = (str) => str.split('').reverse().join('');

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// let boolToWord = bool => {
//   if(bool === true) {
//     return `Yes`
//   }else {
//     return `No`
//   }
// }

// let boolToWord = (bool) => (bool === true ? `Yes` : `No`);

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num){
//   return num.toString()
// }

// let numberToString = num => num.toString()
