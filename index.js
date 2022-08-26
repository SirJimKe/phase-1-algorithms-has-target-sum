function hasTargetSum(array, target) {
  for(let i = 0; i <= array.length; i++){
    const integer1 = target - array[i];
    for (let j = i + 1; j <= array.length; j++){
      if (integer1 === array[j]) return true 
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  integer1 = target minus integer 2
  if integer1 = and integer in the array,
  return true else false
*/

/*
  Add written explanation of your solution here

  I need to find two integers from an array whose sum equal a given target. If the two numbers are available in the array, return true.
  if not, return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
