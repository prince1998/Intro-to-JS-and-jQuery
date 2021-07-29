# Introduction to JavaScript

**What is JavaScript?**
- JavaScript is an interpreted, lightweight, scripting language (collection of multiple lines) just in time compile programming language which has first class function ability
- Dynamically typed (need not specify type of variable) programming language
- Single threaded programmming language but still very efficient programming language
- Also supports object oriented programming with prototype based implementations
- It also supports functional programming coding style, imperative style of coding and declarative programming style

**Why is JS so popular?**
- It is highly used programming language in the world (most popular in the world;)
- It supports full stack development
- Also trending in IOT; IOT accepting Node.js
- Also supports cross platform development (using React Native)
- There are many supporters for this language (Eg. Facebook)

**JS versions**
- First version ECMAScript 1 release in 1997
- Most popular - ECMAScript 5 - released in 2009
- Next Most popular -  ECMAScript 6 - released in 2015

**Where can JS code run?**
- You can run it in your browser console itself. The console is called REPL.

**Variables**
- We can use var keyword or let keyword to create variables
- Use of var is not recommended
- Variable naming convention camelCase

**Constants**
- Naming conventions for constant is ALL_CAPS.
- If we need to put space in between, use underscore

**String Literal / Template String**
str1 = "Hello";
str2 = "World";
let helloworld = `${str1} ${str2}`; //Hello World
let helloworld = `${str1} In Javascript ${1+5} ${str2}`; // "Hello In Javascript 6 World"
Recommend to use double quotes. When you want to embed something in string use backtick since it will be must smaller to write

**typeof()**
Use typeof(value) to check the data type of value

**Math in JS**
Anything divide by 0 gives infinity in JS
"10"/2 doesnt give error; It gives 5 as the output

**Object**
Object in JS is a key value pair