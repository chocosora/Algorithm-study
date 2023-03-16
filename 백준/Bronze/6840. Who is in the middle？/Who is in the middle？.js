const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = '';
rl.on('line', function (line) {
  input += line + '\n';
}).on('close', function () {
  solution(input.slice(0, -1));
  process.exit();
});

function solution(input) {
  console.log(
    input
      .split('\n')
      .map(Number)
      .sort((a, b) => a - b)[1],
  );
}