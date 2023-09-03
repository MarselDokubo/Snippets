/** ********* ACCESSING VALUES IN JAVASCRIPT *********/

// Why does the comparison {a:1} === {a:1} return false when the two values appear equal?

// Because the comparison is checking the location of those two values in memory(the reference) rather than checking the actual value

/**
 **** Primitives in Javascript are stored and access by value
 **** Any expression that evaluates to a primitive evaluates to the actual value
 */

/**
 **** Non-primitives in Javascript are stored and accessed by references by reference I mean location in memory
 **** i.e a reference to the actual value in memory (or put another way the address of the value) is what is stored and accessed not the actual value.
 **** Object expressions (expressions that returns objects) evaluates to a reference to the object somewhere in memory rather than the actual object
 *  */

// Storing and accessing Primitives

var a = 2; // variable a holds the actual value returned by the expression 2
var b = 2; //variable b holds the actual value returned by the expression 2

a === b; // => true; a evaluates to the value 2 and b evaluates to the value 2

// Storing and accessing Objects

var obj1 = { a: 1 }; // Store the location of the value in obj1
var obj2 = { a: 2 }; // Store the location of the value in obj2

obj1 === obj2; // => false; The expression {prop1: "someValue"} creates a new object in memory every time it is evaluated (it is evaluated twice in our code because it appears twice) and returns a reference to that object not the actual value. Those references are then assigned the variables obj1 and obj2 respectively. Variables obj1 and obj2 are holding two distinct reference values to two distinct objects in memory. Therefore the expression obj1 === obj2 is simply asking "is the reference value in obj1 equal to the reference value in obj2? The answer is no(false). To clarify there's no way to access the actual value of an object directly we only have references to these objects. So the actual values of those two objects are equal but are held in different location in memory which is why the the comparison is false. The comparison is doing a location check."
