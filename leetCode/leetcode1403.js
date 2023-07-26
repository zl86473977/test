const minSubsequence = function(nums) {
	if (nums.length === 0) {
		throw new Error('lenth error');
		return
	}
	if (nums.length === 1) {
		return nums;
	} else {
		// 排序
		const numsT = nums.sort(function(a, b) {
			return b - a
		});
		// 求和
		const sum = numsT.reduce(function(prev, cur) {
			return prev + cur;
		}, 0);
		// 循环直到子序列和大于总和一半为止
		let sumc = 0;
		for (let i = 0; i < numsT.length; i++) {
			sumc += nums[i];
			if(sumc > sum / 2) {
				return nums.slice(0, i + 1)
			}
		}
	}
};

console.log(minSubsequence([4, 3, 10, 9, 8]))
console.log(minSubsequence([4, 4, 7, 6, 7]))
console.log(minSubsequence([6]))
