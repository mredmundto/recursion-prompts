// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	if (n < 0){return null}
	if (n === 0) {return 1}
	return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	array = array.slice() // not mutate the input	
	if (array.length == 0){return 0}
	// converting into number then add up 
	return Number(array[0]) + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	
	/*  Using inner function to handle first
	var num = 0; // initial state (1)
	function inner(item){ 
		for (var i = 0; i < item.length; i ++){ // (2)for loop to check all 
			if (Array.isArray(item[i])){
				inner(item[i]) // (3) if thats an array again, inner()
			}else{
				num += item[i] // (4)else push 
			}
		}
	}
	inner(array) //(5)<= remember to call the inner function 
	return num;  //(6)
	*/ 

	// converting inner function to no inner function 
	var num = num || 0; // (1) change to output = output || initial value
	 // (2)remove inner function // change all the inner to parent function  
		for (var i = 0; i < array.length; i ++){ 
			if (Array.isArray(array[i])){
				// (3)changed to inner // (4) add to the store
				num += arraySum(array[i]) 
				// (5)change the inner variable to the parent variable 
			}else{
				num += array[i] //  
			}
		}
	return num;
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n < 0){n = -n} // turning negative number to positive 
	if (n === 0){
		return true
	}else if(n === 1){
		return false
	} 
	return isEven(n-2) // must have a return at the end 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 0){return 0}
	if (n>0){return n-1 + sumBelow(n-1)}
	if (n<0){return n+1 + sumBelow(n+1)}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	if (y === x){
		return []
	}else if (y > x){
		if (x+1 === y){return []}
		return [x+1].concat(range(x+1, y))
	}else{
		if (x-1 === y){return []}
		return [x-1].concat(range(x-1, y))
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0){return 1}
	if (exp > 0){return base * exponent(base, exp-1)} 
	if (exp < 0){
		exp = -exp 
		return (1/(exponent(base, exp)))
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1 ){return true}
	if (n < 1 ){return false}
	return powerOfTwo(n/2)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
	if (string.length === 1){return string.slice(-1)}
	return string.slice(-1) + reverse(string.slice(0,-1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.replace(/\ /g, "").toLowerCase()// removing space and to lower case
 	if (string.length === 1 || string.length === 0){return true}
	if (string[0] !== string[string.length-1]){return false}
	return  palindrome(string.slice(1,string.length-1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
 	if (y >= x){return x}
 	return modulo(x-y, y)	
	// not yet done to handle negative cases 
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
	if (x >= 0 && y >= 0){
		if (y === 0){return 0}
		return x + multiply(x, y-1)
	}else if (x <= 0 && y >= 0){ 
		if (y === 0){return 0}
		return x + multiply(x, y-1)
	}else if (x <= 0 && y <= 0){
		if (y === 0){return 0}
		return -x + multiply(x, y+1)
	} 
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.


var divide = function(x, y) {

	if (x > 0 && y > 0){
		if (y > x){return 0}else if (y == x ){return 1 }
		return 1 + divide(x-y,y)
	}else if (x < 0 && y < 0){
		if (y < x){return 0}else if (y == x ){return 1 }
		return 1 + divide(x-y,y)
	};
	if (x === 0){ 
		return NaN}
	if (y === 0){
		return NaN}
	// not yet able to handle one negative the other one postive, can deal with positive and negative 


};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x < 0 || y < 0){return null }
	if (! y){
		return x 
	}	
	return gcd (y, x % y)
 };

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length === 0 && str2.length === 0){ return true }
	if (str1[0] !== str2[0]){return false}
	return compareStr(str1.slice(1), str2.slice(1))

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
	if (str.length === 0){return []}
	return [str[0]].concat(createArray(str.slice(1))) // start from 1 to the end
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	if (array.length === 0){return []}
	return [array[array.length-1]].concat(reverseArr(array.splice(0,array.length-1)))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output) {
	var output = output || []
	if (output.length === length){return output}
	output.push(value)
	return buildList(value, length, output)
};
// any way to not pass the output out???



// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0){return null}
	if (array.shift() === value){ // shift() is the same as splice(0,-1) it changes the original array
		return 1 + countOccurrence(array, value)
	}else{
		return 0 + countOccurrence(array, value)
	} 
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var array = array.slice(); // array.slice() <= copying the array 
	if (array.length === 1){return callback(array)} // returning the last element 
	return [callback(array.shift())].concat(rMap(array, callback))
};

// 21. Write a function that counts the number of times a key occurs in an object.
/*
var testobj = {'e':{'x':'y'},
			   't':{'r': {'e':'r'}, 
					'p': {'y':'r'}},
			   'y':'e'};

*/
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var num = 0; 
	for (var prop in obj){
		if (prop === key){
			num++
		}
		if (typeof obj[prop] === "object"){
			// this is the key of not passing out 
			num += countKeysInObj(obj[prop],key)
		}
	}
	return num; 
};

// 22. Write a function that counts the number of times a value occurs in an object.
/*
var testobj = {'e':{'x':'y'}, 
			   't':{'r': {'e':'r'}, 
			   		'p': {'y':'r'}},
			   'y':'e'};


*/
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var num = 0; 
	for (var prop in obj){
		if (obj[prop] === value){
			num++
		}
		if (typeof obj[prop] === "object"){
			num += countValuesInObj(obj[prop], value)
		}
	}
	return num 
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/*
var input  = {'e': {'x':'y'}, 
			  't': {
			  		'r': {'e':'r'}, 
			  		'p': {'y':'r'}
			  		}, 
			  'y':'e'};
var output = replaceKeysInObj(input, 'e', 'f');
*/

var replaceKeysInObj = function(obj, key, newKey) {
	var newObj = {}
	for (var prop in obj){
		if (prop === key){
			newObj[newKey] = obj[prop]
		}else{
			if (typeof obj[prop] === "object"){
				newObj[prop] = replaceKeysInObj(obj[prop],key,newKey)
			}else{
				newObj[prop] = obj[prop]
			}
		}
	}
	return newObj
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, array) {
	if (n === 1){return [0,1]}
	if (n <= 0){return null}

 	var array = array || [0,1,1]
 	if (array.length-1 === n){
		return array 
	}	
	array.push(array[array.length-1]+array[array.length-2])
// question to ask Alexxis <= how to do recursion not using passing out the variable!
	return fibonacci(n,array)
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

	if (n < 0){ return null}
	if (n === 2){return 1}
	if (n === 1){return 1}
	if (n === 0){return 0}

	return  nthFibo(n-2) + nthFibo(n-1)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
	if (input.length === 1){return input[0].toUpperCase()}
	return [input.shift().toUpperCase()].concat(capitalizeWords(input))
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
	// base case 
	// slice(1) => removing the first item and keeping the rest 
	if (array.length === 1){return array[0].slice(0,1).toUpperCase() + array[0].slice(1)}
	// slice(0,1) the first character === [0]
	return [array[0].slice(0,1).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)))
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var num = 0; 
	for (var prop in obj){
		if (obj[prop] % 2 === 0){ num += obj[prop]}
		if (typeof obj[prop] === "object"){
			num += nestedEvenSum(obj[prop])
		}
	}
	return num; 
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	var newArray = []
	for (var i = 0; i < arrays.length; i++){
		if (Array.isArray(arrays[i])){
			// this is the line which concat till no more nested 
			newArray = newArray.concat(flatten(arrays[i]))
		}else{
			newArray.push(arrays[i])
		}
	}
	return newArray
}

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
	// use this to define an obj to initialize 
	var obj = obj || {}
	// base case, at the end, return the original object 
	if (str.length === 0 ){ return obj}
	// keeping count 	
	obj[str[0]] = (obj[str[0]] || 0 )+1 
	// recursive case by passing in without the first character 
	return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
	// if thats the last item, then push 
	if (list.length === 1){return list[0]}
	// if they cant equal, then push, otherwise keep going  
	if (list[0] !== list[1]){
		return [list[0]].concat(compress(list.slice(1)))
	}else{
		return compress(list.slice(1)) 
	}
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	
	if (array.length === 1){
	array[0].push(aug)
	return [array[0]]}

	array[0].push(aug)
	return [array[0]].concat(augmentElements(array.slice(1),aug))
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 1){
		if (array[0] !== 0){
			return array[0] 
		}else{
			return 
		}
	}
	if (!(array[0] === 0 && array[1] === 0)){
		return [array[0]].concat(minimizeZeroes(array.slice(1))) 
	}else{
		return minimizeZeroes(array.slice(1))
	}
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (typeof array === "number"){return array}
	var num = []
	for (var i = 0; i < array.length; i++){
		if (i % 2 === 0){
			num.push(Math.abs(alternateSign(array[i])))
		}else{
			num.push(-1 * Math.abs(alternateSign(array[i])))
		}
	}
	return num 
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var dict = {
		1: "one", 
		2: "two", 
		3: "three",
		4: "four", 
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten"
	}
	if (str.length === 0){return ""}

	if (dict.hasOwnProperty(str[0])){
		return dict[str[0]] + numToText(str.slice(1))
	}else{
		return str[0] + numToText(str.slice(1))
	}

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
