class Enemy:
    def __init__(self, x, y, health=300):
        self.x = x
        self.y = y
        self.health = health

    def damage(self, amount):
        self.health -= amount
      

    def isdead(self):
         return self.health <= 0
        


class Archer:
    def __init__(self, arrows, field, damage=40):
        self.x = 0 # starts at the leftmost square
        self.kills = 0
        self.arrows = arrows
        self.field = field
        self.damage = damage

    def moveleft(self):
        if self.x > 0:
            self.x -= 1

    def moveright(self):
        if self.x < self.field.numCols - 1:
            self.x += 1

    def shoot(self):
        if self.outOfArrows():
            return
    
        enemies_in_column = self.field.getEnemiesAtColumn(self.x)
        for i,enemy in enumerate(enemies_in_column):
            total_damage = self.calculateTotalDamage(i)
            enemy.damage(total_damage)
            if enemy.isdead():
                self.field.vacateTile(enemy.x, enemy.y)
                self.kills += 1
    
        self.arrows -= 1
    def calculateTotalDamage(self,length):
        total_damage = self.damage
      
        for i in range(0, length):
            total_damage -= total_damage * 0.2  # 20% damage loss per enemy pierced

        return int(total_damage)    
 
    def outOfArrows(self):
        return self.arrows <= 0


class Field:
    def __init__(self, rows=11, cols=10):
        self.grid = []
        self.numRows = rows
        self.numCols = cols
        for x in range(self.numCols):
            column = []
            for j in range(self.numRows):
                column.append(None)
            self.grid.append(column)

    @staticmethod
    def loadFromFileContents(contents):
        lines = contents.split("/")
        dimensions = lines[0].strip().split("x")
        rows = int(dimensions[1])
        cols = int(dimensions[0])
        field = Field(rows, cols)

        for line in lines[1:]:
            x, y = line.strip()[1:-1].split(",")
            x = int(x.strip())
            y = int(y.strip())
            field.placeEnemy(x, y)

        return field

    def placeEnemy(self, x, y):
        self.grid[x][y] = Enemy(x, y)

    def vacateTile(self, x, y):
        # opposite of placeEnemy(), just marks a tile as null
        self.grid[x][y] = None

    def getEnemiesAtColumn(self, column):
        # gets all "alive" enemies in the given column number
        enemies_in_column = []

        for y in range(self.numRows):
            enemy = self.grid[column][y]
            if enemy:
                enemies_in_column.append(enemy)

        return enemies_in_column

    def damageEnemiesAtColumn(self, column, initialDamage):
        enemies_in_column = self.getEnemiesAtColumn(column)

        for enemy in enemies_in_column:
            enemy.damage(initialDamage)
            if enemy.isdead():
                self.vacateTile(enemy.x, enemy.y)