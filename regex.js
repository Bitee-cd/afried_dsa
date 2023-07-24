// let input = "10 x 11 / (5, 10), (5, 7), (5, 6), (2, 5), (4, 5), (5, 2)";
// let results = input.split("/");
// let rowsCols = results[0].split("x").map(Number);
// console.log(rowsCols[0], rowsCols[1]);
// let coordinatesStr = results[1];

// // Removing the leading and trailing whitespace and parentheses
// coordinatesStr = coordinatesStr.trim().slice(1, -1);

// // Splitting the coordinates string and converting to subarrays
// const coordinatesList = coordinatesStr.split("), (").map((pair) => {
//   const [x, y] = pair.split(",").map(Number);
//   console.log(x, y);
//   return [x, y];
// });

let grid = [];
let numRows = 11;
let numCols = 10;

for (let i = 0; i < numCols; i++) {
  const column = [];
  for (let j = 0; j < numRows; j++) {
    column.push(null);
  }
  grid.push(column);
}

console.log(grid);
