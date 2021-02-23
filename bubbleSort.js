const bubbleSort = (arr) => {
    let length = arr.length;
    //going through each position
    for(let position = 0; position < length; position++){
        //checking each number
        for(let number = 0; number < length; number++){
            //check if current number is bigger than the next number
            if(arr[number] > arr[number + 1]){
                //Save the smaller number
                let smallerNumber = arr[number + 1];
                //swap the numbers
                arr[number + 1] = arr[number];
                //set the current position as the smaller number
                arr[number] = smallerNumber;
            }
        }
    }
    //return the sorted array
    return arr;
}


let testArr = [5, 7, 8, 3, 1, 27];
let testTwo = [42, 72, 555, 12345678, 1000]

console.log("Sorted: " + bubbleSort(testArr));
console.log("Sorted: " + bubbleSort(testTwo));