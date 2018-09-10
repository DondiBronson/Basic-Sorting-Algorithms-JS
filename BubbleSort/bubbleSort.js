var list = [8, 24, 12, 4, 7, 3];
console.log();
console.log("Unsorted Array🛑 :", list);
function sort(list) {
    var _a;
    var compareTillHere = list.length;
    do {
        var sortedFromHere = 1;
        console.log("\n ⏭️");
        for (var index = 0; index < compareTillHere - 1; index++) {
            if (list[index] > list[index + 1]) {
                _a = [list[index + 1], list[index]], list[index] = _a[0], list[index + 1] = _a[1];
                console.log(list);
                sortedFromHere = index + 1;
            }
        }
        compareTillHere = sortedFromHere;
    } while (compareTillHere > 1);
}
sort(list);
console.log();
console.log("Sorted Array🍾 :", list);
console.log();
