// creating an empty object
let firstEmptyObject = {};

// Creating empty object using constructor of Object Class
let secondEmptyObject = Object();

let firstObject = {
    "key1":"Hello",
    "key2":5,
    "key3": null,
    key4: 5
};

console.log(firstObject);

//Adding extra properties to existing object
firstObject.key4 = "Priyansh";
console.log(firstObject);

//To add a key with space in between
firstObject['key 5'] = "Added a key with space in between";
console.log(firstObject);

//To delete a key value pair from an object
// delete objectName.keyName;
// delete objectName["keyName"]; //if key has space in between
delete firstObject.key3;
console.log(firstObject);

//Computed Property
let key = "Key 1";
let obj = {
    [key] : "value 1"
};
console.log(obj);

//Overhead of writing key in obj
let no = 5;
obj = {
    "no": no
}
console.log(obj);

//Property Value shorthand
let number = 1;
let secondObject  = {
    number
}

//Every object will have prototype chain since Javascript is prototype based object oriented programming language; 

//Clubbing everything
let number5 = 5;
let key6 = "Key 6";
let thirdObject = {
    "key": 100,
    number5,
    [key6]:"Value 6"
};
console.log(thirdObject);

//Property existence test

console.log("no" in thirdObject); //true
//OR using variable name
// console.log(variableName in thirdObject); //true

//for...in loop
for (key in thirdObject){ 
    console.log(key); //print all keys present in the object
}

//to get value of a property
// obj[keyName] OR obj.keyName

//Printing all key and their value of the object
for (key in thirdObject){ 
    console.log(key, '->', thirdObject[key]); //print all keys present in the object
}

//hole in the array - when there is nothing in array in between 2 elements

//Interanlly array uses object; so no memory is consumed for empty values; array is a wrapper on objects

let arr = [];
let arr1 = Array();

console.log(arr,arr1);

//Arrays are dynamic in nature in JS; No need to specify size beforehand and can store any value in any index
arr[0] = 5;
arr[1] = 6;

console.log(arr);
// To get length of array: array.length; 
arr.length;

arr[10000]  = 5;
console.log(arr);
//arr['abc'] = 15; will work properly; but not a good practice to use such indexes
arr["abc"] = 15;
console.log(arr['abc']);


let arr2 = [1,2,3];
//To push an element to the end of array
// arr.push(elementToPush)
arr2.push(4);
console.log(arr2);
// To remove last element of the array
// arr.pop()
arr2.pop();
console.log(arr2);


//arr.shift() removes element from first location
arr2.shift();
console.log(arr2);

//arr.unshift(elementToAdd) adds element to first location
arr2.unshift(10);
console.log(arr2);

// Problem question


//We have an object storing salaries of our team:
//Write the code to sum all salaries and store in the variable sun. Should be 390 in the example above. If salaries is empty, then the result must be 0.

let salaries = {
John: 100,
Ann: 160, 
Pete: 130
};
console.log(salaries);
let sum = null;
for (salary in salaries){
    sum += salaries[salary];
}
console.log(sum);

