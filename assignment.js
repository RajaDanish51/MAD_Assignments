
// String Methods and Functionalities
let myString = " Raja Danish Majeed";

console.log(myString.length);

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.trim());

console.log(myString.substring(7, 17));
console.log(myString.slice(-6));  

console.log(myString.replace("Danish", "Zeeshan"));

console.log(myString.includes("Comsats"));

console.log(myString.indexOf("Danish"));
console.log(myString.lastIndexOf("n"));

console.log(myString.split(" "));

console.log(myString.repeat(2));

console.log(myString.startsWith(" Danish"));
console.log(myString.endsWith("Danish"));

console.log(myString.trimStart());
console.log(myString.trimEnd());


// Array Methods and Functionalities
let myArray = [10, 20, 30, 40, 50, "Comsats", true, null];

console.log(myArray.length);

myArray.push(60);
console.log(myArray);

myArray.unshift(5);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(2, 1, 25); 
console.log(myArray);

console.log(myArray.slice(1, 4));

console.log(myArray.join(" - "));

console.log(myArray.reverse());

let numArray = [5, 2, 8, 1, 10];
console.log(numArray.sort((a, b) => a - b)); 
console.log(numArray.sort((a, b) => b - a)); 

console.log(myArray.includes("JavaScript"));
console.log(myArray.indexOf(30));

console.log(numArray.filter(num => num > 5));

console.log(numArray.map(num => num * 2));

console.log(numArray.reduce((sum, num) => sum + num, 0));

myArray.forEach(item => console.log(item));

let anotherArray = [100, 200, 300];
console.log(myArray.concat(anotherArray));

console.log(Array.isArray(myArray));
