/**
 * 1. ~(-5.5) 的结果值
 */
4

/**
 * 2. int 类型的取值范围 (请通过代码的方式计算出范围)
 */
// let i = 0;
// while(Math.pow(2, i) + 1 !== Math.pow(2, i)) {
// 	i++
// }
// console.log('i', i); // 53
// 有效计算范围?
// -Math.pow(2, 53) ~ Math.pow(2,53)for(let i = 1; i)

let i = 1;
let num = 0;
while(~~(Math.pow(2, i)) === Math.pow(2, i)) {
	num = Math.pow(2, i)
	i++
}
console.log('i:%S,num:%s', i, num);
~~(Math.pow(2, i)) ~ Math.pow(2, i)

/**
 * 3. Date.now() 与 new Date().getTime() 有什么区别
 */
Date.now()速度更快,因为Date没有被实例化

/**
 * 4. 列出以下方法操作存在什么问题
 */
const Fun = () => {}
Fun.prototype.str = '这是一个字符串'
Fun.prototype.fn = function () {
  console.log('这是一个方法')
}
箭头函数不存在prototype属性

/**
 * 5. 请用 ES6 的语法修改以下代码
 */
var listeners = []
function listen() {}
var events = {
  listeners: listeners,
  listen: listen
}

const listeners = [];
const listen = () => {};
const events = {listeners, listen}


/**
 * 6. 以下方法，请分析代码以及语法特性，并且直接得出最后输出结果
 */
function Fun3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('yes')
        }, 1000);
    }).catch(_=>{
        return false
    })
}
const Fun2 = async (p = true) => {
    if (!!!p) return !p
    const f = await Fun3()
    console.log('f', f);
    return !p
}

Fun2().then(_=>{
    Fun2(_)
})
'f', 'yes'