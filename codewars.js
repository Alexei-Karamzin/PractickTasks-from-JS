let str = '1AX2 x1z aGha 1aza2 ax23a 1ex2'; 
let res = str.replace(/x[^2-7]z/g, '!');
console.log(res);