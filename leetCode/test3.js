// 零矩阵
// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
// 示例 1：
// 输入：
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出：
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// 示例 2：
// 输入：
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出：
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	const row = new Set();
	const col = new Set();
	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[0].length; j++) {
			if(matrix[i][j] === 0) {
				row.add(i);
				col.add(j);
			}
		}
	}
	// 根据row，col替换掉原先的值
	row.forEach(item => {
		matrix[item] = new Array(matrix[item].length).fill(0);
	})
	col.forEach(item => {
		for(let i = 0; i < matrix.length; i++) {
			matrix[i][item] = 0;
		}
	})
	console.log(matrix.toString());
};



// setZeroes([
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ])

setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
])

// setZeroes([
// 	[8,3,6,9,7,8,0,6],
// 	[0,3,7,0,0,4,3,8],
// 	[5,3,6,7,1,6,2,6],
// 	[8,7,2,5,0,6,4,0],
// 	[0,2,9,9,3,9,7,3],
// ])