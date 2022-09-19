
// 모듈 객체는 {}로 선언
// var calc = {};

// calc.add = function(a, b){
//  return a + b;
// };

// console.log('모듈로 분리하기 전 - calc.add : ' + calc.add(10, 10));

// 모듈 가져오기
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add : ' + calc.add(20.20));
