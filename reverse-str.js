//Setting a new variable to hold the final product since strings are imutable
let answer = "";

let reverse_string = (str) => {
    //Create a host array to push letters into
    let newArr = [];
    //Loop through the string
    for(let letter = 0; letter <= str.length; letter++ ){
        //Add each letter to the empty array
        newArr.unshift(str[letter])
        
    }
    let answer = newArr.join("");
    //return the answer
   return answer;
}

//Tests
console.log(reverse_string("Hello"))

console.log(reverse_string("This is a test string with spaces."))