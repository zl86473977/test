// 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranksi 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n2 分钟内修好 n 辆车。

// 同时给你一个整数 cars ，表示总共需要修理的汽车数目。

// 请你返回修理所有汽车 最少 需要多少时间。

// 注意：所有机械工可以同时修理汽车。

// 示例 1：
// 输入：ranks = [4,2,3,1], cars = 10
// 输出：16
// 解释：
// - 第一位机械工修 2 辆车，需要 4 * 2 * 2 = 16 分钟。
// - 第二位机械工修 2 辆车，需要 2 * 2 * 2 = 8 分钟。
// - 第三位机械工修 2 辆车，需要 3 * 2 * 2 = 12 分钟。
// - 第四位机械工修 4 辆车，需要 1 * 4 * 4 = 16 分钟。
// 16 分钟是修理完所有车需要的最少时间。

// 示例 2：
// 输入：ranks = [5,1,8], cars = 6
// 输出：16
// 解释：
// - 第一位机械工修 1 辆车，需要 5 * 1 * 1 = 5 分钟。
// - 第二位机械工修 4 辆车，需要 1 * 4 * 4 = 16 分钟。
// - 第三位机械工修 1 辆车，需要 8 * 1 * 1 = 8 分钟。
// 16 分钟时修理完所有车需要的最少时间。


// 方法一
// var repairCars = function(ranks, cars) {
// 	let left = 1;
// 	let right = Math.min(...ranks) * cars * cars;
// 	while (left < right) {
// 		const middle = Math.floor((left + right) / 2);
// 		let cnt = 0;
// 		for (const r of ranks) {
// 			cnt += Math.floor(Math.sqrt(middle / r)); // floor不满一辆不记数
// 		}
// 		if (cnt >= cars) {
// 			right = middle;
// 		} else {
// 			left = middle + 1;
// 		}
// 	}
// 	return left;
// };

// 方法二
var repairCars = function(ranks, cars) {
	const repair = new Array(101).fill(0); // 数组比哈希表更快
	for (const r of ranks) {
		repair[r]++;
	}
	const minR = Math.min(...ranks);
	let left = 0;
	let right = minR * cars * cars;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		let cnt = 0;
		// mid时间内所有人可以修多少车
		for (let r = minR; r <= 100 && cnt < cars; r++) { // 至多循环 100 次
			cnt += Math.floor(Math.sqrt(mid / r)) * repair[r];
		}
		if (cnt >= cars) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return right;
}

// 此方法小体量的可以搞，但是量级上来了扛不住
// var repairCars = function(ranks, cars) {
// 	const ranksSort = ranks.sort();
// 	let repair = [cars, ...new Array(ranks.length - 1).fill(0)];
// 	let temparr = [];
// 	let max = ranksSort[0] * Math.pow(repair[0], 2)
// 	for (let i = 0; i < ranksSort.length; i++) {
// 		// 分给别人时间可能缩短也可能不缩短？
// 		let flag = false;
// 		for (let j = i + 1; j < ranks.length; j++) {
// 			temparr.push(ranksSort[j] * Math.pow(repair[j] + 1, 2))
// 		};
// 		if (temparr.length > 0) {
// 			let min = Math.min(...temparr);
// 			if (ranksSort[i] * Math.pow(repair[i], 2) > min) {
// 				repair[temparr.indexOf(min) + 1]++;
// 				repair[i]--;
// 				// console.log('repair', repair);
// 				flag = true;
// 				max = Math.max(ranksSort[i] * Math.pow(repair[i], 2), min);
// 			}
// 			temparr = [];
// 			flag && i--; // 只要成功减时就再次循环一次
// 		}
// 	}
// 	console.log(repair)
// 	return max;
// };
console.log(repairCars([4, 2, 3, 1], 10)) // 16
// console.log(repairCars([5, 1, 8], 6)) // 16
// console.log(repairCars([1, 1, 3, 3], 74)); // 576
// console.log(repairCars([1, 1, 1, 1, 2, 2, 3, 3, 3], 58)); // 75