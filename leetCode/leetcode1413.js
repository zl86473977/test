/**
 * 
 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。

 *//

/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
    let sunAdd = 0;
	let startValue = 0
	for(let i = 0,length = nums.length; i < length; i++) {
		sunAdd += nums[i];
		if(sunAdd < startValue) {
			startValue = sunAdd;
		}
	}
	// -1 0 1 ... 都取 1
	// ... -3 -2 才取其绝对值
	return startValue <= -1 ? Math.abs(startValue - 1) : 1;
};
