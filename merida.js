class Enemy {
  constructor(x, y, health = 300) {
    this.x = x;
    this.y = y;
    this.health = health;
  }

  damage(amount) {
    this.health -= amount;
  }

  isDead() {
    return this.health <= 0;
  }
}

class Archer {
  constructor(arrows, field, damage = 40) {
    this.x = 0; // starts at the leftmost square
    this.kills = 0;

    this.arrows = arrows;
    this.field = field;
    this.damage = damage;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x--;
    }
  }

  moveRight() {
    if (this.x < this.field.numCols - 1) {
      this.x++;
    }
  }

  shoot() {
    if (this.outOfArrows()) return;

    const enemiesInColumn = this.field.getEnemiesAtColumn(this.x);

    for (let i = 0; i < enemiesInColumn.length; i++) {
      const totalDamage = this.calculateTotalDamage(i);
      let enemy = enemiesInColumn[i];
      enemy.damage(totalDamage);
      if (enemy.isDead()) {
        this.field.vacateTile(enemy.x, enemy.y);
        this.kills++;
      }
    }

    this.arrows--;
  }

  calculateTotalDamage(length) {
    let totalDamage = this.damage;

    for (let i = 0; i < length; i++) {
      totalDamage -= totalDamage * 0.2;
    }
    console.log(totalDamage);
    return Math.floor(totalDamage);
  }

  outOfArrows() {
    return this.arrows <= 0;
  }
}

class Field {
  constructor(rows = 11, cols = 10) {
    this.grid = [];
    this.numRows = rows;
    this.numCols = cols;

    for (let x = 0; x < this.numCols; x++) {
      const column = [];
      for (let y = 0; y < this.numRows; y++) {
        column.push(null);
      }
      this.grid.push(column);
    }
  }

  static loadFromFileContents(contents) {
    let results = contents.split("/");
    if (!results || results.length < 1) return null;
    let rowsCols = results[0].split("x").map(Number);
    const field = new Field(rowsCols[1], rowsCols[0]);
    let coordinatesStr = results[1];
    // Removing the leading and trailing whitespace and parentheses
    coordinatesStr = coordinatesStr.trim().slice(1, -1);

    // Splitting the coordinates string and converting to subarrays
    coordinatesStr.split("), (").map((pair) => {
      const [x, y] = pair.split(",").map(Number);
      field.placeEnemy(x, y);
    });

    return field;
  }

  placeEnemy(x, y) {
    this.grid[x][y] = new Enemy(x, y);
  }

  vacateTile(x, y) {
    this.grid[x][y] = null;
  }

  getEnemiesAtColumn(column) {
    const enemiesInColumn = [];

    for (let y = 0; y < this.numRows; y++) {
      const enemy = this.grid[column][y];
      if (enemy) {
        enemiesInColumn.push(enemy);
      }
    }

    return enemiesInColumn;
  }

  damageEnemiesAtColumn(column, initialDamage) {
    const enemiesInColumn = this.getEnemiesAtColumn(column);

    for (let enemy of enemiesInColumn) {
      enemy.damage(initialDamage);
      if (enemy.isDead()) {
        this.vacateTile(enemy.x, enemy.y);
      }
    }
  }
}

// Example usage:
const fieldContent =
  "10 x 11 / (5, 10), (5, 7), (5, 6), (2, 5), (4, 5), (5, 2)";
const field = Field.loadFromFileContents(fieldContent);
const archer = new Archer(10, field);

console.log(field.grid);
// archer.shoot();
archer.moveRight();
archer.moveRight();
// archer.moveRight();
// archer.moveRight();
// archer.moveRight();
archer.shoot();
// console.log(archer.kills); // Output: 2
