const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  
  if (str1.length !== str2.length) { return false; }
  
  const dict1 = {};
  const dict2 = {};
  
  str1.split('').forEach(char => {
     dict1[char] = ++dict1[char] || 1;
  });
  
  str2.split('').forEach(char => {
     dict2[char] = ++dict2[char] || 1;
  });
  
  for (let key in dict1) {
      if (dict1[key] !== dict2[key]) { return false; }
  }
  
  return true;
}

module.exports = sameFrequency;

// time complexity: O(n)