let list: number[] = [1, 2, 9, 43, 7, 4];

console.log();
console.log("Unsorted Array🛑 :", list);
console.log();

function sort(list: number[]) {
  let p: number = list.length - 1;
  while (p > 0) {
    let indexHighest: number = 0;
    for (let index = 0; index <= p; index++) {
      if (list[index] > list[indexHighest]) {
        indexHighest = index;
      }
    }
    // Now the new highest item gets swapped
    [list[p], list[indexHighest]] = [list[indexHighest], list[p]];
    p--;
  }
}
sort(list);

console.log("Sorted Array🍾 :", list);
console.log();
