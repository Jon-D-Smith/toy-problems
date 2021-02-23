const bubbleSort = (arr) => {
    let length = arr.length;
    for(let position = 0; position < length; position++){
        for(let number = 0; number < length; number++){
            if(arr[number] > arr[number+1]){
                let smallerNumber = arr[number];
                arr[number] = arr[number + 1];
                arr[number + 1] = smallerNumber;
            }
        }
    }
    return arr;
}


let testArr = [5, 7, 8, 3, 1, 27];

console.log("Sorted: " + bubbleSort(testArr));