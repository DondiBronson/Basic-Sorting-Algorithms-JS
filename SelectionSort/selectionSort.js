var list = [1, 2, 9, 43, 7, 4];
console.log();
console.log("Unsorted Array🛑 :", list);
console.log();
function sort(list) {
    var _a;
    var p = list.length - 1;
    while (p > 0) {
        var indexHighest = 0;
        for (var index = 0; index <= p; index++) {
            if (list[index] > list[indexHighest]) {
                indexHighest = index;
            }
        }
        // Now the new highest item gets swapped
        _a = [list[indexHighest], list[p]], list[p] = _a[0], list[indexHighest] = _a[1];
        p--;
    }
}
sort(list);
console.log("Sorted Array🍾 :", list);
console.log();
