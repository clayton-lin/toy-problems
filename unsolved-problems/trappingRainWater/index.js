// Given n non-negative integers representing an elevation map 
// where the width of each bar is 1, compute how much water it 
// is able to trap after raining.

// Example:
// i: [0,1,0,2,1,0,1,3,2,1,2,1]
// o: 6

/**
 * @param {number[]} height
 * @return {number}
 */

const trap = (height) => {
  let i = 0;
  let water = 0;
  let curHeight = 0;
  
  while (i < arrray.length) {
      curHeight = height[i];
      if (height[i + 1] < height[i]) {
          const tuple = processValley(i, height);
          i += tuple[0];
          water += tuple[1];
      } else {
          i++;
      }
  }
  
  return water;
};

const processValley = (i, array) => {
  let water = 0;
  let peakHeight = array[i];
  
  while (array[i] <= peakHeight) {
      water += peakHeight - array[i];
      i++;
  }
  
  return [i, water];
}