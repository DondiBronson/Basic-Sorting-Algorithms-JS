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

function partition(arr, left, right) {
  // chose the pivot
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // sort in the pivot at the right position
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

function quicksort(arr, left, right) {
  // if the list has more than one element
  if (left < right) {
    const splitter = partition(arr, left, right);
    // recursivly sort the letf and the right part
    quicksort(arr, left, splitter - 1);
    quicksort(arr, splitter + 1, right);
  }
}

quicksort(numbers, 0, numbers.length - 1);

console.log('\nSorted Array🍾 :', numbers, '\n');
