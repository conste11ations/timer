const beeper = (timers) => {
  let filtered = numberChecker(timers);
  
  if (filtered.length !== 0) {
    for (let i = 0; i < filtered.length; i++) {
      setTimeout(() => { process.stdout.write('\x07'); }, 1000 * Number(filtered[i]));
    }
  }
}

const numberChecker = (inputArray) => {
  let result = [];

  inputArray.forEach(item => {
    if (/^\d+$/.test(item) && item >= 0) {
      result.push(item);
    }
  });
  return result;
} 

const input = process.argv.slice(2);
beeper(input);