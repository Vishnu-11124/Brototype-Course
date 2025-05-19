
// ----------------- Variables -----------------
// Variables are used to store data in JavaScript.


courseName = "JavaScript Course"; // Variable declaration and assignment
console.log(`Course Name: ${courseName}`); // String


/* 
------ let ,var and const ------

- let, var and const are used to declare variables in JavaScript.
- let and const are block scoped, while var is function scoped.
- let is used to declare variables that can be reassigned, while const is used to declare variables that cannot be reassigned.
- var is used to declare variables that can be reassigned, but it is not recommended to use var in modern JavaScript.
- let and const are preferred over var for variable declaration.

*/

let courseDuration = 3; // Variable declaration and assignment
console.log(`Course Duration: ${courseDuration} months`); // Number

const courseInstructor = "John Doe"; // Variable declaration and assignment
console.log(`Course Instructor: ${courseInstructor}`); // String

/* 
 ------ Variable Naming Rules ------

 1. Variable names can only contain letters, numbers, underscores, and dollar signs.
 2. Variable names cannot start with a number.
 3. Variable names are case sensitive.
 4. Variable names cannot be a reserved keyword (e.g., let, const, var, if, else, etc.).
 5. Variable names should be descriptive and meaningful.
 6. Variable names should be written in camelCase (e.g., courseName, courseDuration, etc.).
 7. Variable names should not contain spaces or special characters (e.g., @, #, $, %, ^, &, *, etc.).
 
*/

/*
------ Dynamic language ------

JavaScript is a dynamic language, which means that variables can change their type at runtime. For example, a variable that is initially assigned a number can later be assigned a string or an object.
*/

// Example of dynamic typing
let dynamicVariable = 10; // Number
console.log(`Dynamic Variable (Number): ${dynamicVariable}`); // Number
dynamicVariable = "Hello, World!"; // String
console.log(`Dynamic Variable (String): ${dynamicVariable}`); // String

/*
 ------------------ Data Types -----------------

 - JavaScript is a dynamically typed language, which means that variables can hold values of any data type without explicit type declaration.
 - Data types in JavaScript can be divided into two categories: primitive and non-primitive (reference) types.
 - Primitive types are immutable and include: string, number, boolean, null, undefined, symbol, and bigint.
 - Non-primitive types are mutable and include: object, array, and function.
 - Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once they are   created.
 -Non-primitive data types are more complex and can hold multiple values or properties. They are mutable, meaning their values can be changed after they are created.

 JavaScript has several built-in data types, including:
 1. String: A sequence of characters enclosed in single or double quotes.
 2. Number: A numeric value (integer or floating-point).
 3. Boolean: A logical value that can be either true or false.
 4. Undefined: A variable that has been declared but has not been assigned a value.
 5. Null: A special value that represents the absence of a value.
 6. Object: A collection of key-value pairs.unique keys and values.unordered.
 7. Array: A special type of object that represents a list of values.ordered.
 8. Symbol: A unique and immutable value that can be used as a key for object properties.
 9. BigInt: A numeric value that can represent integers with arbitrary precision.
 10. Function: A block of code that can be called and executed.

 */


// Example of object
const course = {
  name: "JavaScript Course",
  duration: 3,
  instructor: "John Doe",
  isActive: true,
};
console.log(`Course Name: ${course.name}`); // String
console.log(`Course Duration: ${course.duration} months`); // Number
console.log(`Course Instructor: ${course.instructor}`); // String
console.log(`Is Course Active: ${course.isActive}`); // Boolean
console.log(`Course Object: ${JSON.stringify(course)}`); // Object

// Example of array
const courseTopics = ["JavaScript Basics", "DOM Manipulation", "ES6 Features", "Asynchronous JavaScript"];
console.log(`Course Topics: ${courseTopics}`); // Array
console.log(`First Topic: ${courseTopics[0]}`); // String

// Example of function
function getCourseInfo() {
  return `Course Name: ${course.name}, Duration: ${course.duration} months, Instructor: ${course.instructor}`;
}
console.log(getCourseInfo()); // String

