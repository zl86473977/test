// 手写reduce
// Array.prototype.myReduce = function(callback, initValue) {
// 	let accumulator = initValue;
// 	for(let i = 0; i < this.length; i++) {
// 		if(!accumulator) {
// 			accumulator = this[i];
// 		} else {
// 			accumulator = callback(accumulator, this[i], i, this)
// 		}
// 	}
// 	return accumulator
// }


// let arr = [3,4,1,2];
// let result = arr.myReduce((calc, current, index, origin) => {
// 	return calc + current
// }, 0)

// console.log('result is ' + result);

async function test1() {
	return 1;
}

async function test2() {
	return Promise.resolve(2)
}
async function test3() {
	return Promise.reject(3)
}

console.log(test1()); // Promise { 1 }
console.log(test2()); // Promise { <pending> }

test3() // node里promise返回reject需要用catch获取，否则会报错

test1().then((res) => {
	console.log(res); // 1
})
test2().then((res) => {
	console.log(res); // 2
})
test3().catch((err) => {
	console.log(err); // 3
})


