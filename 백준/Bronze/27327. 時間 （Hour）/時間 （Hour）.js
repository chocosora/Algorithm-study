process.stdin.on('data', i => {
  console.log(Number(i.toString().trim()) * 24);
});