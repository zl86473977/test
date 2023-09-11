// 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，
// 其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。
// 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
// 返回你最多可以修读的课程数目。

// 示例 1：
// 输入：courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// 输出：3
// 解释：
// 这里一共有 4 门课程，但是你最多可以修 3 门：
// 首先，修第 1 门课，耗费 100 天，在第 100 天完成，在第 101 天开始下门课。
// 第二，修第 3 门课，耗费 1000 天，在第 1100 天完成，在第 1101 天开始下门课程。
// 第三，修第 2 门课，耗时 200 天，在第 1300 天完成。
// 第 4 门课现在不能修，因为将会在第 3300 天完成它，这已经超出了关闭日期。

// 示例 2：
// 输入：courses = [[1,2]]
// 输出：1

// 示例 3：
// 输入：courses = [[3,2],[4,3]]
// 输出：0

// 提示:
// 1 <= courses.length <= 10^4
// 1 <= durationi, lastDayi <= 10^4


// 每次都找最短的是不是能保证修最多的课程

var scheduleCourse = function(courses) {
	courses.sort((c1, c2) => c1[1] - c2[1])

	let queue = [];
	let total = 0;
	
	for(course of courses) {
		let ti = course[0], di = course[1];
		if(total + ti <= di) {
			total += ti;
			queue.push(ti);
			queue.sort();
		} else if(queue.length > 0 && queue[queue.length - 1] > ti) {
			total -= queue[queue.length - 1] - ti;
			queue.pop();
			queue.push(ti);
			queue.sort();
		}
	}
	return queue.length
	
	
	// error----------------
	// 遍历十足，如果数组中的元素第一项大于第二项，则去除，因为次课程永远无法完成
	// courses.sort((c1, c2) => {
	// 	if(c1[0] - c2[0] > 0) {
	// 		return 1
	// 	} else if(c1[0] - c2[0] < 0) {
	// 		return -1
	// 	} else {
	// 		return c1[1] - c2[1]
	// 	}
	// 	return c1[0] - c2[0]
	// })
	// let current = 0;
	// let num = 0;
	// console.log('--courses--', courses);
	// while(courses.length > 0) {
	// 	const course = courses.shift();
	// 	if(current + course[0] <= course[1]) {
	// 		current+=course[0];
	// 		num++;
	// 	}
	// }
	// console.log('----courses.length----', num);
	// return num
};


// scheduleCourse([[1,2]])
// scheduleCourse([[3,2],[4,3]])
// scheduleCourse([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]])
// scheduleCourse([[5,15],[3,19],[6,7],[2,19],[5,16],[8,14],[10,11],[2,10]]);