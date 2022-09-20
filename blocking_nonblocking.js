
//  blocking
function longRunningTask1() {
  console.log('작업 끝');
}

console.log('시작');
longRunningTask1();
console.log('다음 작업');

// non-blocking
function longRunningTask2() {
  console.log('작업 끝');
}

console.log('시작');
setTimeout(longRunningTask2, 0);
console.log('다음 작업');
