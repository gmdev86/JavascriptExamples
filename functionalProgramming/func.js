/* think input and output */
/* pure - take only input and only output */

/* not pure */
var name = "Anjana";

function greet(){
    console.log("Hi, I'm " + name);
}

/* pure */
function greet(name){
    return "Hi, I'm " + name;
}

/* higher order functions - functions that take in functions */
function makeAdjectifier(adjective){
    return function(string){
        return adjective + " " + string;
    };
}

var coolifier = makeAdjectifier("cool");
coolifier("converence"); // "cool conference"

/* use map, reduce, filter *** try not to iter using for *** */
var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];

function downcase(str) {
  return str.toLowerCase();
}

var validData = mixedEmails.map(downcase);

/* avoid mutability   use immutable data : data that cannot change */

/* Persistent data structures for efficient immutability */  /* structral sharing */
//Mori
//Immutable.js
//Underscore
//Lodash
//Ramda
