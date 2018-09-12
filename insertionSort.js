// # Selection Sort

// Complexity:

// - Best Case: O(n)
// - Average Case: O(n^2/4)
// - Worst Case: O(n^2/2)

// [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

const numbers = [2, 6, 34, 3, 1, 8];

console.log('\nUnsorted Array🛑 :', numbers, '\n');

function sort(list) {
  // Outer Loop: counts from the first unordered index to the last (left to right)
  for (let index = 1; index < list.length; index++) {
    // the element one to the left of the sorted part of the array
    const elementToSort = list[index];
    // counter for the loop which inserts the elementToSort at the right position in the already sorted part of the array
    let innerLoopIndex = index;
    while (innerLoopIndex > 0) {
      if (list[innerLoopIndex - 1] > elementToSort) {
        // moves the greater element one index to the right
        list[innerLoopIndex] = list[innerLoopIndex - 1];
        innerLoopIndex--;
      } else {
        // the elementToSort is already positioned correctly
        break;
      }
    }
    // inserts the ElementToSort at the right index
    list[innerLoopIndex] = elementToSort;
  }
}
console.log('\nSorted Array🍾 :', numbers);
