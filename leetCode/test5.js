// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 提示：
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	console.log('strs----', strs);
	for (var i = 0; i < strs[0].length; i++) {
		let flag = true;
		for (let j = 0; j < strs.length; j++) {
			if(strs[j][i] !== strs[0][i]) {
				flag = false;
				break;
			}
		}
		if(!flag) {
			return strs[0].slice(0, i);
		}
	}
	return strs[0]
	
	// let s = '';
	// while(true) {
	// 	let temp = strs[0][s.length];
	// 	let flag = true;
	// 	if(temp) {
	// 		for (let i = 0; i < strs.length; i++) {
	// 			if(strs[i][s.length] === temp) {
	// 				continue
	// 			} else {
	// 				flag = false;
	// 				break;
	// 			}
	// 		}
	// 	} else {
	// 		flag = false;
	// 	}
	// 	if(flag) {
	// 		s += temp;
	// 	} else {
	// 		break
	// 	}
	// }
	// return s;
};

// longestCommonPrefix(["flower","flow","flight"]);
// longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix([""]);
longestCommonPrefix(["a"]);