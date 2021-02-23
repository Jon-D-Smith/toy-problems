//Setting a new variable to hold the final product since strings are imutable
let answer = "";

let reverse_string = (str) => {
    //split the string into an array of letters
    let strSplit = str.split("");
    //Create a host array to push letters into
    let newArr = [];
    //Get the length of the split string so I can iterate through it 
    let length = strSplit.length;
    //Loop through the string, starting at the end
    for(let letter = length; letter >= 0; letter-- ){
        //Add each letter to the empty array
        newArr.push(strSplit[letter])
        //Set the array into a string
        answer = newArr.join("")
    }
    //return the answer
   return answer;
}

//Tests
console.log(reverse_string("Hello"))

console.log(reverse_string("This is a test string with spaces."))