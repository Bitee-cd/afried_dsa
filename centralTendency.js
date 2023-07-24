class Stat {
  constructor(data) {
    this.data = data;
  }

  get mean() {
    let total = this.data.reduce((acc, curr) => acc + curr, 0);
    return total / this.data.length;
  }

  get median() {
    let sortedData = this.data.slice().sort((a, b) => a - b);
    let n = this.data.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  }

  get mode() {
    let freqCounter = {};
    let maxFreq = 0;
    let modes = [];

    for (let num of this.data) {
      freqCounter[num] = (freqCounter[num] || 0) + 1;
      maxFreq = Math.max(maxFreq, freqCounter[num]);
    }

    for (let num in freqCounter) {
      if (freqCounter[num] === maxFreq) {
        modes.push(Number(num));
      }
    }

    return modes;
  }

  get range() {
    let maxVal = Math.max(...this.data);
    let minVal = Math.min(...this.data);
    return maxVal - minVal;
  }
}

// Example usage:
const data = [2, 5, 7, 3, 7, 2, 8, 5, 9];
const statistics = new Stat(data);

console.log(`Mean: ${statistics.mean}`);
console.log(`Median: ${statistics.median}`);
console.log(`Mode: ${statistics.mode}`);
console.log(`Range: ${statistics.range}`);
