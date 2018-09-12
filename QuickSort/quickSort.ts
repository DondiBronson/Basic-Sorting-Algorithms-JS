let numbers: number[] = [2, 6, 34, 3, 1, 8];

console.log();
console.log("Unsorted Array🛑 :", numbers);
console.log();

// this method only calculates the bounds and hands the list over to the quickSortMethod
function sort(list: number[]) {
  const upperBound: number = list.length - 1;
  const lowerBound: number = 0;
  quickSort(list, lowerBound, upperBound);
  return list;
}

// recursive method
function quickSort(list: number[], lowerBound: number, upperBound: number) {
  let pivot: number;

  // the list will be split here
  let partitionIndex: number;

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

// divides the given list
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
      [list[i], list[partitionIndex]] = [list[partitionIndex], list[i]];
      partitionIndex++;
    }
  }
  [list[upperBound], list[partitionIndex]] = [
    list[partitionIndex],
    list[upperBound]
  ];
  return partitionIndex;
}

console.log("Sorted Array🍾 :", sort(numbers));
console.log();
