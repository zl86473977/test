// 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"

var longestPalindrome = function(s) {
	let left = 0,
		right = 0;
	for (let i = 0; i < s.length; i++) {
		let left0 = i;
		let right0 = i;
		// 奇对称
		while(left0 > 0 && right0 < s.length - 1) {
			if(s[left0 - 1] === s[right0 + 1]) {
				left0--;
				right0++;
			} else {
				break;
			}
		}
		if(right0 - left0 > right - left) {
			left = left0;
			right = right0;
		}
		
		// 偶对称
		left0 = i;
		right0 = i - 1;
		while(left0 > 0 && right0 < s.length - 1) {
			if(s[left0 - 1] === s[right0 + 1]) {
				left0--;
				right0++;
			} else {
				break;
			}
		}
		if(right0 - left0 > right - left) {
			left = left0;
			right = right0;
		}
	}
	console.log('---------',left,right, s.substring(left, right + 1));
	return s.substring(left, right + 1);

	// 效率低，但是直观
	// for(let i = s.length; i > 0; i--) {
	// 	for(let j = 0; j <= s.length - i; j++) {
	// 		const str = s.substr(j, i);
	// 		if(str === str.split('').reverse().join('')) {
	// 			console.log('----', str);
	// 			return str;
	// 		}
	// 	}
	// }
};

// longestPalindrome('babad') // bab
longestPalindrome('cbbd') // bb