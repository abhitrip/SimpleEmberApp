function makeRequest(url, timeout, callback) {
    
        timeout = (typeof timeout !== "undefined") ? timeout : 2000;
        callback = (typeof callback !== "undefined") ? callback : function() {};
    
        // the rest of the function
    
    }

function mixArgs(first, second) {
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // true
        first = "c";
        second = "d";
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // true 
    }
    
    mixArgs("a", "b");
    
function mixArgsStrict(first, second) {
        "use strict";
    
        console.log(first === arguments[0]); // true
        console.log(second === arguments[1]); // true
        first = "c";
        second = "d"
        console.log(first === arguments[0]); // false
        console.log(second === arguments[1]); // false
    }
    
    mixArgsStrict("a", "b");

// function pick(object) {
//     let result = Object.create(null);

//     // start at the second parameter
//     for (let i = 1, len = arguments.length; i < len; i++) {
//         result[arguments[i]] = object[arguments[i]];
//     }

//     return result;
// }

function pick(object, ...keys) {
    let result = Object.create(null);

    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}


let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
};

let bookData = pick(book, "author", "year");

console.log(bookData.author);   // "Nicholas C. Zakas"
console.log(bookData.year);     // 2015

/**
 * Spread operator
 */
let values = [25, 50, 75, 100]

// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max(...values));           // 100
