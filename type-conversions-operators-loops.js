// String(valueToConvert) function converts value passed to String. String() constructor can transform all primitve values to String

let no = 5;
console.log(String(no));

// toString() will work only with numbers and not with primitive data types (null and undefined) and arrays
console.log(no.toString());

// Number() to convert string to number
let string = "123";
console.log(Number(string)); //123
console.log(Number("abc")); //NaN
console.log(Number("    12     ")); //12
console.log(Number("    1   2     ")); //NaN
console.log(Number(false)); //0
console.log(Number(true)); //1
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

//Converting to Integer
console.log(Number.parseInt(1.2)); //1

//Converting to Float
console.log(Number.parseFloat(1.2)); //1.2
console.log(Number.parseFloat("1.2")); //1.2

//Operators 
// Exponention
console.log(3 ** 4); // expected output: 81

//Comparison operators
// = operator: checks for equality only in value
15 == 15 //true
15 == "15" //true

//Strict equality operator - checks for equality in data type as well as value (highly recommended)
15 === "15" //false 

// False - null, undefined, 0, empty string
//True - any number other 1, string with 1 or more characters

//or operator
// OR "||" finds the first truthy value
// AND "&&" finds the first falsy value


let res = 2 || 5; 
console.log(res);//2

let res = "Hello" || 5;
console.log(res);//"Hello"
