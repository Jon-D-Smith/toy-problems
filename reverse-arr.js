//Program to reverse the order of an array without using th built in method



//function start using arrow syntax
let reverseArr = (arr) => {
    //create the new array that will host the original arrays reversed data
    let newArr = []
    //get the length of the array
    const length = arr.length;
    //Iterate through the array starting from the end
    for(let i = arr.length - 1; i >= 0; i--){
        //push the last element to the new Array
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr
}

//testing numbers
const testArr = [1,2,3,4,5]
console.log(reverseArr(testArr))

//testing strings

const wordTest = ["cool", "is", "JavaScript"]
console.log(reverseArr(wordTest))