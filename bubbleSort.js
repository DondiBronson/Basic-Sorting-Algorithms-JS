// # Bubble Sort

// Complexity:

// - Best Case: O(n)
// - Average Case: O(n^2/2)
// - Worst Case: O(n^2/2)

// [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)

const numbers = [8, 24, 12, 4, 7, 3];
console.log('\nUnsorted Array🛑 :', numbers, '\n');

function sort(list) {
  let compareTillHere = list.length;
  do {
    // assume the list is sorted from here
    let sortedFromHere = 1;
    for (let i = 0; i < compareTillHere - 1; i++) {
      // this is the part where the items "bubble up"
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        // the rest of the list from here on is sorted
        sortedFromHere = i + 1;
      }
    }
    // there is no need to compare the sorted part again
    compareTillHere = sortedFromHere;
  } while (compareTillHere > 1);
}

console.log('\nSorted Array🍾 :', numbers, '\n');
