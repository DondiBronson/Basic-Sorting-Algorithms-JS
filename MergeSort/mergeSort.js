var numbers = [8, 24, 12, 4, 7, 3];
console.log();
console.log("Unsorted Array🛑 :", numbers);
function mergeSort(list) {
    // If the list is <= 1 it can't be split
    if (list.length <= 1) {
        return list;
    }
    // Index where the list is split
    var splitHere = Math.floor(list.length / 2);
    var l = list.slice(0, splitHere);
    var r = list.slice(splitHere);
    // recursive splitting of the list
    return merge(mergeSort(l), mergeSort(r));
}
// merges the splited list in the correct order
function merge(leftList, rightList) {
    var mergedList = [];
    var leftIndex = 0;
    var rightIndex = 0;
    // as long as the list isn't empty
    while (leftIndex < leftList.length && rightIndex < rightList.length) {
        if (leftList[leftIndex] < rightList[rightIndex]) {
            mergedList.push(leftList[leftIndex]);
            leftIndex++;
        }
        else {
            mergedList.push(rightList[rightIndex]);
            rightIndex++;
        }
    }
    return (mergedList
        // concat remaining list items
        .concat(leftList.splice(leftIndex))
        .concat(rightList.splice(rightIndex)));
}
console.log();
console.log("Sorted Array🍾 :", mergeSort(numbers));
console.log();
