// # Selection Sort

// Complexity:
// O(n^2/2)

// [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

const numbers = [1, 2, 9, 43, 7, 4];

console.log('\nUnsorted Array🛑 :', numbers, '\n');

function sort(list) {
  let p = list.length - 1;
  while (p > 0) {
    let indexHighest = 0;
    for (let i = 0; i <= p; i++) {
      if (list[i] > list[indexHighest]) {
        indexHighest = i;
      }
    }
    // Now the new highest item gets swapped
    [list[p], list[indexHighest]] = [list[indexHighest], list[p]];
    p--;
  }
}
console.log('\nSorted Array🍾 :', numbers);
