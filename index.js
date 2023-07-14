// function test() {
// 	console.log(arguments);
// 	console.log(...arguments);
// 	console.log(Array.from(arguments));
// }

// test(1,2,3)



// function tt(time) {
// 	const timaArr = time.split(' ');
// 	const ymd = timaArr[0];
// 	const hms = timaArr[1];
// 	let hmsArr = hms.split(':');
// 	hmsArr = hmsArr.map(item => {
// 		if(Number(item) < 10) {
// 			return '0' + item;
// 		} else {
// 			return item
// 		}
// 	})
// 	if(hmsArr[3] < 100) {
// 		hmsArr[3] = '0' + hmsArr[3]
// 	}
// 	return ymd + ' ' + hmsArr.join(':')
// }

// console.log(tt('2023-5-9 21:3:3:9'))

const versions = [
	{
		versionId: '10.0.1',
	},
	{
		versionId: '1.0.0.1',
	},
	{
		versionId: '1.0.1.1',
	},
	{
		versionId: '1.0.1',
	},
	{
		versionId: '1.0.7',
	},
	{
		versionId: '1.0.10',
	},
]
// 版本大小排序算法
versions.sort((a, b) => {
	const aParts = a.versionId.split('.');
	const bParts = b.versionId.split('.');
	for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
		const aNum = parseInt(aParts[i] || 0);
		const bNum = parseInt(bParts[i] || 0);
		if (aNum !== bNum) {
			return bNum - aNum;
		}
	}
	return b.versionId.length - a.versionId.length;
});

console.log('versions:', versions);
