function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (index < n && nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      return i + 1;
    }
  }

  return n + 1; // If all positive integers up to n are present
}

module.exports = smallestMissingPositiveInteger;