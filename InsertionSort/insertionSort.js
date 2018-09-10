var list = [2, 6, 34, 3, 1, 8];
console.log();
console.log("Unsorted Array🛑 :", list);
console.log();
function sort(list) {
    // Outer Loop: counts from the first unordered index to the last (left to right)
    for (var index = 1; index < list.length; index++) {
        // the element one to the left of the sorted part of the array
        var elementToSort = list[index];
        // counter for the loop which inserts the elementToSort at the right position in the already sorted part of the array
        var innerLoopIndex = index;
        while (innerLoopIndex > 0) {
            if (list[innerLoopIndex - 1] > elementToSort) {
                // moves the greater element one index to the right
                list[innerLoopIndex] = list[innerLoopIndex - 1];
                innerLoopIndex--;
            }
            else {
                // the elementToSort is already positioned correctly
                break;
            }
        }
        // inserts the ElementToSort at the right index
        list[innerLoopIndex] = elementToSort;
    }
}
sort(list);
console.log("Sorted Array🍾 :", list);
console.log();
