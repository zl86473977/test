// 对角线遍历
// 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
// 示例 1：
// 1 2 3
// 4 5 6
// 7 8 9
// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,4,7,5,3,6,8,9]

// 示例 2：
// 输入：mat = [[1,2],[3,4]]
// 输出：[1,2,3,4]

// 提示：
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 10^4
// 1 <= m * n <= 10^4
// -10^5 <= mat[i][j] <= 10^5

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const dirs = [
	[-1, 1],
	[1, -1]
]; // 右上
var findDiagonalOrder = function(mat) {
	let row = mat.length;
	let col = mat[0].length;
	let dir = 0;
	let pos = [0, 0];
	const result = [mat[0][0]];
	while (pos[0] < row - 1 || pos[1] < col - 1) {
		// 是否超过边缘
		if (
			pos[0] + dirs[dir][0] < 0 || // 上边缘
			pos[0] + dirs[dir][0] >= row || // 下边缘
			pos[1] + dirs[dir][1] < 0 || // 左边缘
			pos[1] + dirs[dir][1] >= col // 右边缘
		) {
			console.log('--0');
			if (pos[1] + dirs[dir][1] >= col) {
				// 右边缘 下移一格
				pos[0]++
			} else if (pos[0] + dirs[dir][0] >= row) {
				// 下边缘 右移一格
				pos[1]++;
			} else if (pos[0] + dirs[dir][0] < 0) {
				// 上边缘 右移一格
				pos[1]++;
			} else {
				// 左边缘 下移一格
				pos[0]++;
			}
			// 调转方向
			dir = dir ^ 1;
		} else {
			pos[0] += dirs[dir][0]
			pos[1] += dirs[dir][1]
		}
		result.push(mat[pos[0]][pos[1]]);
	}
	console.log(result);
	return result;
};

// 对角线遍历. x+y是固定值
// 和是奇数反向遍历,偶数正向遍历
var findDiagonalOrder = function(mat) {
	let a = []
	let rowLength = mat.length - 1;
	let colLength = mat[0].length - 1;
	let k = 0,
		l = 0;
	for (let i = 0; i <= rowLength + colLength; i++) {
		// 偶数，从左下往右上遍历
		if (i % 2 === 0) {
			for (let j = k; j >= i - l; j--) {
				a.push(mat[j][i - j])

			}
		} else {
			// 奇数从右上往左下遍历
			for (let j = l; j >= i - k; j--) {
				a.push(mat[i - j][j])
			}
		}
		k = k >= rowLength ? rowLength : k + 1;
		l = l >= colLength ? colLength : l + 1;
	}
	return a
};


// findDiagonalOrder([
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ])

// findDiagonalOrder([[1,2],[3,4]])