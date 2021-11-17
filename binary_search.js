// BINARY SEARCH -given a sorted array - return the index
// WITH RECURSION:
// Step 1. Find mid point
// Step 2. Compare if mid point is lower or higher than searched number
// Step 3. remove unneeded side
// Step 4. go back to step 1

var arr = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200];
function getMidPoint(arr, searchNumb) {
    var midPoint = Math.floor(arr.length / 2);
    console.log(arr);
    console.log("array midpoint value: " + arr[midPoint]);

    if (arr[midPoint] > searchNumb) {
        var newArr = arr.slice(0, midPoint);
        return getMidPoint(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {
        var newArr = arr.slice(midPoint + 1, arr.length);
        return getMidPoint(newArr, searchNumb);

    } else if(searchNumb == arr[midPoint]){
        console.log('true');
        return true;
    } else{
        console.log('false');
        return false;
    }
}
getMidPoint(arr,1);

//WITHOUT SLICE - USE RECURSION- return the index 
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var start = 0;
var end = arr.length;

function binarySearch(arr, num){
    var mid = Math.floor((start + end) / 2);
    if(num < arr[mid]){
        end = mid -1;
        return binarySearch(arr, num);
    }
    
    else if(num > arr[mid]){
        start = mid +1;
        return binarySearch(arr, num);
    }
    else if(num == arr[mid]){
        console.log(mid);
        return true;
    }
    else{
        console.log('false');
        return false;}
}

binarySearch(arr, 5);