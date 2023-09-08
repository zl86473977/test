// https://leetcode.cn/problems/beautiful-arrangement-ii/
const constructArray = function(n, k) {
	let arr = Array(n);
	let i = 1;
	// 初始化
	let num_d = parseInt((k - 1) / 2);
	let num_r = (k - 1) % 2
	for (let i = 0; i < num_d; i++) {
		arr[2 * i + 1] = n - i
	}
	if(num_r === 1) {
		arr[n - 2] = n - num_d
	}
	for(let j = 0; j < n; j++) {
		if(!arr[j]) {
			arr[j] = i++;
		}
	}
	return arr;
};
// 1 2 3 4 5 6 7 = 1
// 1 7 2 3 4 5 6 = 3 // 6 5 1
// 1 7 2 6 3 4 5 = 5 // 6 5 4 3 1
// 1 7 2 6 3 5 4 = 6 // 6 5 4 3 2 1
console.log(constructArray(7, 3))
