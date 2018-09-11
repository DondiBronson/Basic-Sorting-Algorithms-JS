var numbers = [2, 6, 34, 3, 1, 8];
console.log();
console.log("Unsorted Array🛑 :", numbers);
console.log();
function sort(list) {
    var upperBound = list.length - 1;
    var lowerBound = 0;
    quickSort(list, lowerBound, upperBound);
    return list;
}
function quickSort(list, lowerBound, upperBound) {
    var pivot;
    var partitionIndex;
    if (lowerBound < upperBound) {
        pivot = upperBound;
        partitionIndex = divide(list, lowerBound, upperBound, pivot);
        // sort the left and the right side
        quickSort(list, lowerBound, partitionIndex - 1);
        quickSort(list, partitionIndex + 1, upperBound);
    }
    return list;
}
function divide(list, lowerBound, upperBound, pivot) {
    var pivotValue = list[pivot];
    var partitionIndex = lowerBound;
    for (var i = lowerBound; i < upperBound; i++) {
        if (list[i] <= pivotValue) {
            swap(list, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(list, upperBound, partitionIndex);
    return partitionIndex;
}
function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
console.log("Sorted Array🍾 :", sort(numbers));
console.log();
