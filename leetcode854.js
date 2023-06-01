// <失败>
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
	// 遍历查询出s1和s2不同的字符子集
	let ss1 = [],
		ss2 = [],
		num = 0;
	for (let i = 0, length = s1.length; i < length; i++) {
		if (s1[i] !== s2[i]) {
			ss1.push(s1[i]);
			ss2.push(s2[i]);
		}
	}
	console.error(ss2.toString());
	for (let j = 0, length = ss1.length; j < length; j++) {
		if (ss1.toString() === ss2.toString()) {
			break;
		}
		if (ss1[j] === ss2[j]) {
			continue;
		} else {
			console.log(ss1.toString());
			let result = ss1.indexOf(ss2[j], j);
			if (ss1[j] !== ss2[result]) {
				while (ss1.indexOf(ss2[j], result + 1) !== -1) {
					result = ss1.indexOf(ss2[j], result + 1)
					if (ss1[j] !== ss2[result]) {
						continue
					} else {
						break;
					}
				}
				console.log('result---' + result);
			} else {
				console.log('result---' + result);
			}
			let temp = ss1[j];
			ss1[j] = ss1[result];
			ss1[result] = temp;
			num++;
		}
	}
	return num;
};

// console.log(kSimilarity('abccaacceecdeea', 'bcaacceeccdeaae')); // 9
console.log(kSimilarity('aabbccddee', 'cbeddebaac')); // 6
