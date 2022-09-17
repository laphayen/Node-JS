console.log('hello world!');
console.log('숫자: %d', 10);
console.log('문자: %s', 'str');

var person = {
	name: 'laphayen',
	age: '25'
};
// 객체 출력 - %j 사용
console.log('JSON 객체: %j', person);

// 객체를 출력
console.dir(person);

console.time('duration_time');

var result = 0;
for (var i = 0; i < 10000; i++) {
	result += i;
}

console.timeEnd('duration_time');

console.log('파일 이름: %s', __filename);
console.log('패스: %s', __dirname);
