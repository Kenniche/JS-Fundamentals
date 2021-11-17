/*Braces Valid
Objectives:
Exercise those logic muscles!
Use data structures (arrays, objects) effectively to complete the challenge.
Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

HINT: Keep in mind that you may use arrays and objects to keep your information organized!

Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.
*/
// BRACES VALID
function bracesValid(str){
    var arr = [];
    for(var i =0; i< str.length; i++){
        if (str[i] === "[" || str[i] === "(" || str[i] === "{"){
        arr.push(str[i]);
    }
        else if(str[i] === ")" && arr[arr.length-1] !== "("){
        console.log('false');
        return false;
    }
        else if (str[i] === ")" && arr[arr.length-1] === "("){
        arr.pop();
    }
        else if(str[i] === "]" && arr[arr.length-1] !== "["){
        console.log('false');
        return false;
    }
        else if (str[i] === "]" && arr[arr.length-1] === "["){
        arr.pop();
    }
        else if(str[i] === "}" && arr[arr.length-1] !== "{"){
        console.log('false');
        return false;
    }
        else if (str[i] === "}" && arr[arr.length-1] === "{"){
        arr.pop();
            }
    }
    if (arr.length > 0){
        console.log('false');
        return false;}
    else {
        console.log('true');
        return true;}
}
bracesValid("{(})"); // false
bracesValid("{{()}}[]"); // true
(bracesValid( ")(}{][" )); // false
