// ============== Old Way ==============
const start = Date.now();

let total = 0;
for (let i = 0; i <= 100000; i++) {
    total += i;
}

const end = Date.now();

console.log(`Old way: ${end - start} ms`);


// ============== New Way ==============
console.time("timer");

for (let i = 0; i <= 100000; i++) {
    total += i;
}

console.timeEnd("timer");