//1.两数之和
function twoSum(nums, target) {

  for(let x = 0; x < nums.length; x++) {
    for(let y = 0; y < nums.length; y++) {

      if(target === nums[x] + nums[y] && x !== y) {

        return [x, y]
      }
    }
  }
}

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);

export default twoSum;
