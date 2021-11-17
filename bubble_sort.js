//BUBBLE SORT
function bubbleSort(arr){
    for (var i=0; i < arr.length-1; i++){
        for(var j=0; j < arr.length-i; j++){
        var currentNum = arr[j];
        var nextNum = arr[j+1];
        if (currentNum > nextNum){
            arr.splice(j, 2, nextNum, currentNum);
            }
        }
    }
return arr;
}

console.log(bubbleSort([6, 5, 1, 3, 8, 7, 2, 4]));
console.log(bubbleSort([8,2,1,30,5]));
console.log(bubbleSort([130, 3, 20, 15, 150, 1]));
    