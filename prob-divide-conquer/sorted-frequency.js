/**
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:
Time Complexity: O(log N)
*/
function sortedFrequency(arr, num) {

  let firstTargetIdx = findFirst(arr, num);
  let lastTargetIdx = findLast(arr, num);
  let result = lastTargetIdx - firstTargetIdx + 1;
  
  return result ? result : -1;
}

function findFirst(arr, num){
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let firstTargetIdx;
  while  (leftIdx <= rightIdx && firstTargetIdx === undefined) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    
    if (midVal < num ) {
      leftIdx = midIdx + 1;
    }else if (midVal > num || (midVal === num && arr[midIdx-1] === num ) ) {
      rightIdx = midIdx - 1;
    } else {
      firstTargetIdx = midIdx;
    }
  }
  return firstTargetIdx;
}

function findLast(arr, num){
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let lastTargetIdx;
  while  (leftIdx <= rightIdx && lastTargetIdx === undefined) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    
    if (midVal < num || (midVal === num && arr[midIdx+1] === num ) ) {
      leftIdx = midIdx + 1;
    }else if (midVal > num) {
      rightIdx = midIdx - 1;
    } else {
      lastTargetIdx = midIdx;
    }
  }
  return lastTargetIdx;
}

module.exports = sortedFrequency