/* TODO: 
    - comment out the whole algorithm
    - finish readme
*/

// FIXME: undestand

let numbers: number[] = [2, 6, 34, 3, 1, 8];

console.log();
console.log("Unsorted Array🛑 :", numbers);
console.log();

function sort(list: number[]) {
  const upperBound: number = list.length - 1;
  const lowerBound: number = 0;
  quickSort(list, lowerBound, upperBound);
  return list;
}

function quickSort(list: number[], lowerBound: number, upperBound: number) {
  let pivot: number;
  let partitionIndex: number;

  if (lowerBound < upperBound) {
    pivot = upperBound;
    partitionIndex = divide(list, lowerBound, upperBound, pivot);

    // sort the left and the right side
    quickSort(list, lowerBound, partitionIndex - 1);
    quickSort(list, partitionIndex + 1, upperBound);
  }
  return list;
}

function divide(
  list: number[],
  lowerBound: number,
  upperBound: number,
  pivot: number
) {
  const pivotValue: number = list[pivot];
  let partitionIndex: number = lowerBound;

  for (let i = lowerBound; i < upperBound; i++) {
    if (list[i] <= pivotValue) {
      swap(list, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(list, upperBound, partitionIndex);
  return partitionIndex;
}

function swap(list: number[], i: number, j: number) {
  const temp: number = list[i];
  list[i] = list[j];
  list[j] = temp;
}

console.log("Sorted Array🍾 :", sort(numbers));
console.log();
