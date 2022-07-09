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