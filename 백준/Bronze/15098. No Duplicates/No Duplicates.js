console.log(`${require('fs').readFileSync(0)}`.trim().split(' ').sort().every((v, i, a) => v !== a[i + 1]) ? 'yes' : 'no');