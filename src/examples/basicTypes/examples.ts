export function basicTypesNumber() {
  return {
    title: "Number Types in TypeScript",
    explanation:
      "This section covers basic types in TypeScript.  Here you see examples of the number and string data types.",
    code: `
// Example of number type
let decimal: number = 10;           // Regular decimal
let hex: number = 0xf00d;          // Hexadecimal
let binary: number = 0b1010;       // Binary
let octal: number = 0o744;         // Octal
let floating: number = 3.14;       // Floating point
let negative: number = -42;        // Negative number

// Basic arithmetic
let sum: number = decimal + floating;
let product: number = decimal * 2;
`,
  }
}

export function basicTypesString() {
  return {
    title: "String Types in TypeScript",
    explanation: "In TypeScript, a string type represents a sequence of characters, such as words, sentences, or any text. It is used to store and work with text data. You can create string values by enclosing characters in single quotes ('...'), double quotes  or backticks (`...` for template literals). TypeScript also ensures that values assigned to variables declared as strings are always valid text, helping catch errors early.",
    code: `
// Example of string type
let firstName: string = "Alan";              // Double quotes
let lastName: string = 'Martinez';           // Single quotes
let fullName: string = firstName + " (middle name) " + lastName;
// String concatenation

// Template literal (backtick)
let greeting: string = \`Hello, \${fullName}!\`; // String interpolation
let multiLine: string = \`
This is a multi-line
string using template
    literals\`\;

// String length and methods
let nameLength: number = fullName.length;    // String property
let upperName: string = fullName.toUpperCase(); // String method
`,
  }
}

export function basicTypesBoolean() {
  return {
    title: "Boolean Types in TypeScript",
    explanation: "In TypeScript, a boolean type represents a value that can only be either true or false. It is typically used to control the flow of a program, such as in conditions and comparisons. Declaring a variable as a boolean ensures that it can only hold one of these two logical values, helping to prevent errors and improve code clarity.",
    code: `
// Example of boolean type
let isDone: boolean = false;        // Boolean declaration
let isActive: boolean = true;       // Another boolean
let isComplete: boolean = isDone && isActive;  // Logical AND
let isValid: boolean = isDone || isActive;     // Logical OR
let isReady: boolean = !isDone;               // Logical NOT
`,
  }
}

export function basicTypesObject() {
  return {
    title: "Object Types in TypeScript",
    explanation: "In TypeScript, object types are used to define the shape of an object, specifying the types of its properties. This allows for strong type-checking and ensures that objects adhere to a specific structure. For example, you can define an object type with specific properties and their corresponding types, such as { name: string; age: number; }. This ensures that any object assigned to this type must have a name property of type string and an age property of type number. Additionally, TypeScript supports optional properties, readonly properties, and index signatures, providing flexibility in defining object shapes. This helps catch errors at compile time and improves code reliability and maintainability.",
    code: `
// Example of object type
// Define a custom object type using 'type'
type Car = {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
};

// Create an object of type 'Car'
const myCar: Car = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
  isElectric: true,
};

// Access properties of the object
console.log(myCar.make);      // Output: Tesla
console.log(myCar.isElectric); // Output: true
`,
  }
}

export function arrayTypes() {
  return {
    title: "Array Types in TypeScript",
    explanation:
      "This section covers array types in TypeScript.  Here you see examples of number and string arrays.",
    code: `
// Example of array type
let numbers: number[] = [1, 2, 3, 4, 5];           // Number array
let names: string[] = ["Thor", "Loki", "Odin"];    // String array

// Adding elements (type-safe)
numbers.push(6);                // OK
// numbers.push("seven");       // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Accessing elements
let firstNumber: number = numbers[0];  // OK
// let firstString: string = numbers[0]; // Error: Type 'number' is not assignable to type 'string'

// Array methods
let arrayLength: number = names.length;  // OK`,
  }
}

export function arrayTypesTuple() {
  return {
    title: "Tuple Types in TypeScript",
    explanation: "In TypeScript, a tuple type allows you to create an array with a fixed number of elements, where each element can have a different type. Tuples are useful when you want to group related values together but still enforce the types and the order of the elements. Unlike a regular array, the types and number of items in a tuple are strictly controlled.",
    code: `
    // Example of tuple type
let person: [string, number] = ["Thor", 30];      // Declare tuple with string and number
let worker: [string, number, boolean] = ["Anderson", 25, true];  // Tuple with 3 elements

// Accessing tuple elements
let empName: string = worker[0];    // First element (string)
let empAge: number = worker[1];     // Second element (number)
let isWorking: boolean = worker[2];   // Third element (boolean)
    `,
  }
}

export function specialTypesExample() {
  return {
    title: "Special Types in TypeScript",
    explanation: "TypeScript provides several special types that behave differently from the basic types like string, number, or boolean. These special types include any, unknown, void, and never. They are used to handle situations where normal type constraints do not apply or where specific behavior is needed.",
    code: `// Example of special types
    // // 'any' type - avoid if possible because it disables type safety
let randomValue: any = 5;
randomValue = "Hello";
randomValue = true;

// 'unknown' type - safer alternative to 'any'
let unknownValue: unknown = "Could be anything";
// unknownValue.toUpperCase(); // Error: must check type first

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // Safe to use
}

// 'void' type - function returns nothing
function logMessage(message: string): void {
  console.log(message);
}

// 'never' type - function that never returns (throws error)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
`,
  }
}
