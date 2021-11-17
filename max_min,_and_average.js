
//Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.
//Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function  getMaxMinAvg(arr){
    let sum = 0;
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }

    }
    console.log("The minimum is: " + min + ", the maximum is: " + max + ", and the average is: " + sum/arr.length +'.')
    return [ min,  max,  sum/arr.length];
}

console.log(getMaxMinAvg([1, -2 , 9, 4]));
console.log(getMaxMinAvg([4, -8 , 15, 9]));