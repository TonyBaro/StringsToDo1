function removeBlanks(string){
    var newString=string.split(" ");
    return newString.join("")
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

function getDigits(string){
    var newString=string.split("");
    var final=[]
    for (var x=0; x<= newString.length-1; x++){
        if (isNaN(Number(newString[x]))){    
        }
        else{final.push(newString[x])}
    }
    return final.join("")
}

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function acronyms(string){
    newString= string.split(" ")
}

// // Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".



// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']