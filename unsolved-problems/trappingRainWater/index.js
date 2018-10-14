// Given n non-negative integers representing an elevation map 
// where the width of each bar is 1, compute how much water it 
// is able to trap after raining.

// Example:
// i: [0,1,0,2,1,0,1,3,2,1,2,1]
// o: 6

/**
 * @param {number[]} heights
 * @return {number}
 */

const trap = (heights) => {
  // horizontal approach
  let water = 0;
  let highest = 0;
  let lowest = 0;
  const elevations = {};

  heights.forEach((height, i) => {
    // console.log('------------------------------------')
    // console.log('index ', i)
    // console.log('elevations before: ', elevations);

      if (height > highest) {
        // console.log('elevations will clear');
        delete(elevations[0]);
        for (let h in elevations) {
          if (h > lowest) {
            water += i - elevations[h];
          }
          delete(elevations[h]);
        }
        elevations[height] = i + 1;
        highest = height;

      } else if (elevations[height]) {
        // console.log('add water');
        delete(elevations[0]);
        for (let h in elevations) {
          if (h <= height) {
            if (h > lowest) {
              water += i - elevations[h];
            // console.log(`h: ${h}, i: ${i}, water added: ${i - elevations[h]}`)
            }
            delete(elevations[h]);
          }
        }

      } else {
        // console.log('add elevation');
        lowest = height;
        const drop = heights[i - 1] - height;
        // console.log('drop', drop)
        elevations[height] = i + 1;
        for (let j = 1; j <= drop; j++) {
          elevations[height + j] = i;
        }
      }

    // console.log('elevations after: ', elevations);
    // console.log(`height: ${height}, highest: ${highest}, water: ${water}`);
  });
  
  return water;
};

module.exports = trap;