Function.prototype.myCall = function(target, ...args) {
	target = target || window || global;
	const symbolKey = Symbol();
	target[symbolKey] = this;
	const res = target[symbolKey](...args);
	delete target[symbolKey];
	return res
}
Function.prototype.myApply = function(target, args) {
	target = target || window || global;
	const symbolKey = Symbol();
	target[symbolKey] = this;
	const res = target[symbolKey](...args);
	delete target[symbolKey];
	return res
}
Function.prototype.myBind = function(target, ...outArgs) {
	target = target || {};
	const symbolKey = Symbol();
	target[symbolKey] = this;
	return function(...innerArgs) {
		return target[symbolKey](...outArgs, ...innerArgs)
	}
}
const mbs = {
  name: '麻不烧',
  say(prefix, age) {
    console.log(`${prefix},my name is ${this.name},i am ${age} year old`)
  }
}
// const A = {
//   name:'小丁'
// }
// mbs.say.call(A,'hello',3) // 'hello,my name is 小丁,i am 3 year old'
// mbs.say.myCall(A,'hello',3) // 'hello,my name is 小丁,i am 3 year old'

const B = {
  name: '小丁丁'
}
// const sayB = mbs.say.bind(B, 'hello')
// sayB(3) // 'hello,my name is 小丁,i am 3 year old'
const sayB = mbs.say.myBind(B, 'hello')
sayB(3) // 'hello,my name is 小丁,i am 3 year old'