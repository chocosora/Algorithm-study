const fs = require('fs');
const n = fs.readFileSync('/dev/stdin').toString().trim();
let str = '';
for (let i = 1; i <= n; i++) {
  str += i + '\n';
}
console.log(str.trim());