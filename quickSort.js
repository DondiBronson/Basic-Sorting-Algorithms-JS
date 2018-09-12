// # Quick Sort

// Complexity:

// - Best Case: n log_2 n
// - Average Case: 2n ln n
// - Worst Case n^2

// Less memory usage than MergeSort (no needed Helperlist, in-place)
// QuickSort is unstable (other than MergeSort)

// [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

const numbers = [2, 6, 34, 3, 1, 8];
console.log('\nUnsorted Array🛑 :', numbers, '\n');

// divides the given list
function divide(list, lowerBound, upperBound, pivot) {
  const pivotValue = list[pivot];
  let partitionIndex = lowerBound;

  for (let i = lowerBound; i < upperBound; i++) {
    if (list[i] <= pivotValue) {
      [list[i], list[partitionIndex]] = [list[partitionIndex], list[i]];
      partitionIndex++;
    }
  }
  [list[upperBound], list[partitionIndex]] = [list[partitionIndex], list[upperBound]];
  return partitionIndex;
}
// recursive method
function quickSort(list, lowerBound, upperBound) {
  let pivot;

  // the list will be split here
  let partitionIndex;

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

// this method only calculates the bounds and hands the list over to the quickSortMethod
function sort(list) {
  const upperBound = list.length - 1;
  const lowerBound = 0;
  quickSort(list, lowerBound, upperBound);
  return list;
}

console.log('\nSorted Array🍾 :', numbers, '\n');
