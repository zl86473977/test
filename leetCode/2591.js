// 将钱分给最多的儿童
// 给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。
// 你需要按照如下规则分配：
// 所有的钱都必须被分配。
// 每个儿童至少获得 1 美元。
// 没有人获得 4 美元。
// 请你按照上述规则分配金钱，并返回 最多 有多少个儿童获得 恰好 8 美元。如果没有任何分配方案，返回 -1 。

// 示例 1：
// 输入：money = 20, children = 3
// 输出：1
// 解释：
// 最多获得 8 美元的儿童数为 1 。一种分配方案为：
// - 给第一个儿童分配 8 美元。
// - 给第二个儿童分配 9 美元。
// - 给第三个儿童分配 3 美元。
// 没有分配方案能让获得 8 美元的儿童数超过 1 。

// 示例 2：
// 输入：money = 16, children = 2
// 输出：2
// 解释：每个儿童都可以获得 8 美元。

// 提示：
// 1 <= money <= 200
// 2 <= children <= 30

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
	// 力扣解法
	if (money < children) {
		return -1;
	}
	money -= children
	let cnt = Math.min(Math.floor(money / 7), children);
	money -= cnt * 7;
	children -= cnt;

	// 每个孩子都分到了8元但钱还有的多
	// 还剩最后一个孩子且剩下3元
	if ((children === 0 && money > 0) || (children == 1 && money === 3)) {
		cnt -= 1;
	}
	
	return cnt

	// 我的解法
	// if(money === children) {
	// 	return 0
	// } else if (money < children) {
	// 	return -1;
	// } else {
	// 	const left = money - children;
	// 	const num = Math.floor(left / 7); // 能凑几个8
	// 	const other = left % 7; // 对7 取余
	// 	console.log('---num:', num, '---other:', other);
	// 	if(num === children) {
	// 		if(other === 0) {
	// 			return children;
	// 		} else {
	// 			return children - 1;
	// 		}
	// 	} else if (num > children) {
	// 		// 金币太多了，children-1个人拿8，最后一个人拿money-8*children-1
	// 		return children - 1
	// 	} else {
	// 		// 最后一个人会得到4个
	// 		if (other === 3 && children - num === 1) {
	// 			console.log('2---', num - 1);
	// 			return num - 1
	// 		} else {
	// 			console.log('3---', num);
	// 			return num
	// 		}
	// 	}
	// }
};

// distMoney(13, 3) // 1
// distMoney(20, 3) // 1
// distMoney(16, 2) // 2
// distMoney(2, 2) // 0
// distMoney(23, 2) // 1
distMoney(17, 2) // 1