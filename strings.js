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

function acronym(string){
    var newString= string.split(" ")
    var letters=[]
    for (var x=0;x<newString.length;x++){
        letters.push(newString[x][0])
    }
    var final = letters.join("")
    return final.toUpperCase()
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(string){
    var splitString = string.split("")
    var count = 0
    for (var x=0;x<splitString.length;x++){
        if (splitString[x] != ' '){
            count = count+1
        }
    }
    return count
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

function removeShorterStrings(string,num){
    var splitString = string.split(" ")
    var newString = []
    for (var x=0;x<= splitString.length;x++){
        console.log(splitString[0])
        console.log(splitString[0].length)
        if (splitString[x].length > num){
            newString.push(splitString[x])
        }
    }
    return newString

}
console.log(removeShorterStrings('Good morning sunshine the Earth says hello', 4))