// Implement a function that accepts a variable number of arguments and
// returns true if there are duplicates and false if there are not.
// Assume inputs are numbers or strings

const areThereDuplicates = (...args) => {
  
  // solution using frequency counter
  // time complexity: O()
  // space complexity: O()
  // const dict = {};
  // for (let val of args) {
  //   if (dict[val]) {
  //     return true;
  //   } else {
  //     dict[val] = 1;
  //   }
  // }
  // return false;

  // solution using sorting
  // time complexity: O()
  // space complexity: O()
  // args.sort((a, b) => {
  //   return a > b;
  // });
  // for (let i = 1; i < args.length; i++) {
  //   if (args[i] === args[i - 1]) {
  //     return true;
  //   }
  // }
  // return false;



  // solution using sets
  // time complexity: O()
  // space complexity: O()
  return new Set(args).size !== args.length;

};

module.exports = areThereDuplicates;
