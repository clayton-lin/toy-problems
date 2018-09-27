// Given two sorted arrays A and B, each of which contains no duplicate 
// integers, the lists can be merged together as follows:
// A = [ 1, 3, 4, 5 ]
// B = [ 2, 4, 6, 8 ]
// MERGED = [1, 2, 3, 4, 5, 6, 8]

// write a function that accepts N number of such arrays, and returns 
// the merged list. The solution should run in O(log(n)) time

const mergeSortedArrays = (arrA, arrB) => {
  const merged = [];

  let indA = 0;
  let indB = 0;
  
  while(arrA[indA] || arrB[indB]) {
    if (arrA[indA] === arrB[indB]) {
      merged.push(arrA[indA]);
      indA++;
      indB++;
    } else if (arrA[indA] < arrB[indB]) {
      merged.push(arrA[indA]);
      indA++;
    } else if (arrA[indA] > arrB[indB]) {
      merged.push(arrB[indB]);
      indB++;
    } else if (!arrA[indA]) {
      merged.push(arrB[indB]);
      indB++;
    } else {
      merged.push(arrA[indA]);
      indA++;
    }
  }
  
  return merged;
}

console.log(mergeSortedArrays([ 1, 3, 4, 5 ], [ 2, 4, 6, 8 ])); // [ 1, 2, 3, 4, 5, 6, 8 ]
console.log(mergeSortedArrays([ 1, 3, 4, 5 ], [ 1, 3, 4, 5 ])); // [ 1, 3, 4, 5 ]


module.exports = mergeSortedArrays;