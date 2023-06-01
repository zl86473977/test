// function test() {
// 	console.log(arguments);
// 	console.log(...arguments);
// 	console.log(Array.from(arguments));
// }

// test(1,2,3)



function tt(time) {
	const timaArr = time.split(' ');
	const ymd = timaArr[0];
	const hms = timaArr[1];
	let hmsArr = hms.split(':');
	hmsArr = hmsArr.map(item => {
		if(Number(item) < 10) {
			return '0' + item;
		} else {
			return item
		}
	})
	if(hmsArr[3] < 100) {
		hmsArr[3] = '0' + hmsArr[3]
	}
	return ymd + ' ' + hmsArr.join(':')
}

console.log(tt('2023-5-9 21:3:3:9'))