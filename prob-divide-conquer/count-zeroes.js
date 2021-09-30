/**
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Time Complexity: O(log N)
*/
function countZeroes(arr) {
  let firstZeroIdx;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  
  while  (leftIdx <= rightIdx && firstZeroIdx === undefined) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    
    if (midVal === 1 ) {
      // middleVal is a one, look at the right half
      // since the first zero is to the right
      leftIdx = midIdx + 1;
    }else if (midVal === 0 && arr[midIdx-1] === 0) {
      // middleVal is zero and left is also zero, look at the left half
      rightIdx = midIdx - 1;
    } else {
      // set first zero idx if midVal is 0 and left of it is 1
      firstZeroIdx = midIdx;
    }
  } 
  
  let zeros = firstZeroIdx !== undefined ? arr.slice(firstZeroIdx).length: 0;
  
  return zeros;
}

module.exports = countZeroes