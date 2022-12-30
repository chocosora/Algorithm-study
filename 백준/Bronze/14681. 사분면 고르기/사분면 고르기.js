const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  if (input[0] > 0) {
    if (input[1] > 0) {
      console.log(1);
      return;
    }
    console.log(4);
    return;
  }
  if (input[1] > 0) {
    console.log(2);
    return;
  }
  console.log(3);
  process.exit();
});