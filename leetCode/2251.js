// https://leetcode.cn/problems/number-of-flowers-in-full-bloom/?envType=daily-question&envId=2023-09-28
// 花期内花的数目
// 给你一个下标从 0 开始的二维整数数组 flowers ，其中 flowers[i] = [starti, endi] 表示第 i 朵花的 花期 从 starti 到 endi （都 包含）。
// 同时给你一个下标从 0 开始大小为 n 的整数数组 people ，people[i] 是第 i 个人来看花的时间。
// 请你返回一个大小为 n 的整数数组 answer ，其中 answer[i]是第 i 个人到达时在花期内花的 数目 。


// 示例 1：
// 输入：flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]
// 输出：[1,2,2,2]
// 解释：上图展示了每朵花的花期时间，和每个人的到达时间。
// 对每个人，我们返回他们到达时在花期内花的数目。

// 示例 2：
// 输入：flowers = [[1,10],[3,3]], people = [3,3,2]
// 输出：[2,2,1]
// 解释：上图展示了每朵花的花期时间，和每个人的到达时间。
// 对每个人，我们返回他们到达时在花期内花的数目。



// 提示：
// 1 <= flowers.length <= 5 * 10^4
// flowers[i].length == 2
// 1 <= starti <= endi <= 10^9
// 1 <= people.length <= 5 * 10^4
// 1 <= people[i] <= 10^9

var fullBloomFlowers = function(flowers, people) {
	const starts = flowers.map(f => f[0]).sort((a, b) => a - b);
	const ends = flowers.map(f => f[1]).sort((a, b) => a - b);
	return people.map(p => lowerBound(starts, p + 1) - lowerBound(ends, p));
};
var lowerBound = function(nums, x) {
	let left = -1,
		right = nums.length; // 开区间 (left, right)
	while (left + 1 < right) {
		const mid = (left + right) >> 1;
		if (nums[mid] < x)
			left = mid; // 区间缩小为 (mid, right)
		else
			right = mid; // 区间缩小为 (left, mid)
	}
	return right; // 根据循环不变量，此时 right 就是满足 nums[right] >= x 的最小值
};


// var fullBloomFlowers = function(flowers, people) {
// 	// 先遍历people，看看总共需要计算的日子有哪些
// 	let pn = {};
// 	// 找出最早和最晚到达的人，避免计算过多的前后时间
// 	let min = 0;
// 	let max = 0;
// 	for(let i = 0; i < people.length; i++){
// 		min = Math.min(people[i], min)
// 		max = Math.max(people[i], max)
// 		pn[people[i]] = 0;
// 	}

// 	flowers.forEach(([start, end]) => {
// 		// 方法一
// 		console.log('start:', start, ',end:', end);
// 		for(let key of Object.keys(pn)) {
// 			// key人来的时间，人来的时间在开始时间和结束时间内就+1
// 			if(key >= start && key <= end) {
// 				pn[key]++
// 			}
// 		}
// 		// 方法二
// 		// 缩短for循环的范围
// 		for (let i = Math.max(start, min); i <= Math.min(end, max); i++) {
// 			if(pn[i] === 0 || pn[i] > 0) {
// 				pn[i]++
// 			} 
// 			// else undefined 就不计算因为此时没人
// 		}
// 	})
// 	return people.map(item => pn[item]);
// };

console.log(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]));
// fullBloomFlowers([[1,10],[3,3]], [3,3,2]);