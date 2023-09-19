// 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 示例 2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 提示：
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const lower_bound = function(nums, target) {
	let left = 0;
	let right = nums.length;
	while(left < right) {
		let middle = Math.floor((left + right) / 2);
		if(nums[middle] >= target) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}
	console.log('-----left-----', left);
	return left;
}

var searchRange = function(nums, target) {
	let start = lower_bound(nums, target);
	if(start == nums.length || nums[start] != target) {
		return [-1, -1]
	}
	end = lower_bound(nums, target + 1) - 1;
	return [start, end]
};

// lower_bound([5,7,7,8,8,10], 9)