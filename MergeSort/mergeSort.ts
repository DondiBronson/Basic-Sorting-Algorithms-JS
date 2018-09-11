let numbers: number[] = [8, 24, 12, 4, 7, 3];

console.log();
console.log("Unsorted Array🛑 :", numbers);

function mergeSort(list: number[]) {
  // If the list is <= 1 it can't be split
  if (list.length <= 1) {
    return list;
  }

  // Index where the list is split
  const splitHere: number = Math.floor(list.length / 2);
  const l: number[] = list.slice(0, splitHere);
  const r: number[] = list.slice(splitHere);

  // recursive splitting of the list
  return merge(mergeSort(l), mergeSort(r));
}

// merges the splited list in the correct order
function merge(leftList: number[], rightList: number[]) {
  const mergedList: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  // as long as the list isn't empty
  while (leftIndex < leftList.length && rightIndex < rightList.length) {
    if (leftList[leftIndex] < rightList[rightIndex]) {
      mergedList.push(leftList[leftIndex]);
      leftIndex++;
    } else {
      mergedList.push(rightList[rightIndex]);
      rightIndex++;
    }
  }
  return (
    mergedList
      // concat remaining list items
      .concat(leftList.splice(leftIndex))
      .concat(rightList.splice(rightIndex))
  );
}

console.log();
console.log("Sorted Array🍾 :", mergeSort(numbers));
console.log();
