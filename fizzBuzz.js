
// FizzBuzz all in one loop
for(let i =0; i < 100; i++){
    //check for divisibility of 3 and 5, then for each one individually
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0){
        console.log("buzz");
    } else {
        console.log(i)
    }
}