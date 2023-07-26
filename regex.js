// 从字符串中获取数字类型
let hd = "zhanglei2023dklasdjla999";
console.log(hd.match(/\d/g).join(''));

// 手机号中间四位加星号
// const tel = "13615262629";
// const reg = /^(\d{3})\d{4}(\d{4})$/;
// const result = tel.replace(reg, '$1****$2')
// console.log(result);