function nbYear(startingPopulation, percent, additional, targetPopulation) {
  let years = 0;
  while (startingPopulation < targetPopulation) {
    startingPopulation += startingPopulation * (percent / 100) + additional;
    years++;
  }
  return years;
}
console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10
