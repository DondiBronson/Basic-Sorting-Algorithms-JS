let list: number[] = [8, 24, 12, 4, 7, 3];

console.log();
console.log("Unsorted Array🛑 :", list);

function sort(list: number[]) {
  let compareTillHere: number = list.length;
  do {
    let sortedFromHere: number = 1;
    console.log("\n ⏭️");

    for (let index = 0; index < compareTillHere - 1; index++) {
      if (list[index] > list[index + 1]) {
        [list[index], list[index + 1]] = [list[index + 1], list[index]];
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
