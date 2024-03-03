
//lower string to upper string using built-in function

/*
let str = "ankit paswan";

let result = str.at(0).toUpperCase();
let result = str.toUpperCase();

console.log(result);  // Output: ANKIT PASWAN

*/

// -----------------------------------------------------


//upper string to lower string using built-in function
/*
let str = "ANKIT PASWAN";

let result = str.at(0).toLowerCase();
// let result = str.toLowerCase();

console.log(result);  // Output: ankit paswan
*/


var str = "im mern stack trainee at ducat";

for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        console.log(String.fromCharCode(str.charCodeAt(i) - 32));
    }
}

