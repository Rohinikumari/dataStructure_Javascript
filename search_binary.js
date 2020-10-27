function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        //console.log(start,middle,end);
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    console.log(start,middle,end);
    return arr[middle] === elem ? middle : -1
}
binarySearch([2, 3, 15, 25, 35, 40, 50], -60)