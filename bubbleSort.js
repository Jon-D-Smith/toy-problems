const bubbleSort = (arr) => {
    let length = arr.length;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (arr[j] > arr[j+1]){
                let smallNum = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = smallNum;
            }
        }
    }
    return arr;
}


let testArr = [5, 7, 8, 3, 1, 27];

console.log("Sorted: " + bubbleSort(testArr));