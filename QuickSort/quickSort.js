var numbers = [2, 6, 34, 3, 1, 8];
console.log();
console.log("Unsorted Array🛑 :", numbers);
console.log();
// this method only calculates the bounds and hands the list over to the quickSortMethod
function sort(list) {
    var upperBound = list.length - 1;
    var lowerBound = 0;
    quickSort(list, lowerBound, upperBound);
    return list;
}
// recursive method
function quickSort(list, lowerBound, upperBound) {
    var pivot;
    // the list will be split here
    var partitionIndex;
    if (lowerBound < upperBound) {
        // pivot can be set random but we take the upperBound
        pivot = upperBound;
        // the new partitionIndex is calculated with the current pivot
        partitionIndex = divide(list, lowerBound, upperBound, pivot);
        // sort the left and the right side recursivly
        quickSort(list, lowerBound, partitionIndex - 1);
        quickSort(list, partitionIndex + 1, upperBound);
    }
    // return the sorted list
    return list;
}
// divides the given list
function divide(list, lowerBound, upperBound, pivot) {
    var _a, _b;
    var pivotValue = list[pivot];
    var partitionIndex = lowerBound;
    for (var i = lowerBound; i < upperBound; i++) {
        if (list[i] <= pivotValue) {
            _a = [list[partitionIndex], list[i]], list[i] = _a[0], list[partitionIndex] = _a[1];
            partitionIndex++;
        }
    }
    _b = [
        list[partitionIndex],
        list[upperBound]
    ], list[upperBound] = _b[0], list[partitionIndex] = _b[1];
    return partitionIndex;
}
console.log("Sorted Array🍾 :", sort(numbers));
console.log();
