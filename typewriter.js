const sentence = "hello there from lighthouse labs";
let newLineDelay = sentence.length * 50 + 1;

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  let delay = i * 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}

setTimeout(() => {
  process.stdout.write('\n');
}, newLineDelay);