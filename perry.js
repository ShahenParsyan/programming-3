class Perry extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    eat() {
        this.multiply++
        let emptyCells0 = this.chooseCell(4)
        let newCell0 = random(emptyCells0)
        if (newCell0 && this.multiply >= 1) {
            matrix[this.y][this.x] = 0
            let newX = newCell0[0]
            let newY = newCell0[1]
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
            for (var i in wotherArr) {
                if (newX == wotherArr[i].x && newY == wotherArr[i].y) {
                    wotherArr.splice(i, 1);
                    break;
                }
            }
            this.multiply--
        }

        let emptyCells1 = this.chooseCell(5)
        let newCell1 = random(emptyCells1)
        if (newCell1 && this.multiply >= 1) {
            matrix[this.y][this.x] = 0
            let newX = newCell1[0]
            let newY = newCell1[1]
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
            for (var i in grasswtArr) {
                if (newX == grasswtArr[i].x && newY == grasswtArr[i].y) {
                    grasswtArr.splice(i, 1);
                    break;
                }
            }
            this.multiply--
        }
        let emptyCells2 = this.chooseCell(6)
        let newCell2 = random(emptyCells2)
        if (newCell2 && this.multiply >= 1) {
            matrix[this.y][this.x] = 0
            let newX = newCell2[0]
            let newY = newCell2[1]
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
            for (var i in yelwtArr) {
                if (newX == yelwtArr[i].x && newY == yelwtArr[i].y) {
                    yelwtArr.splice(i, 1);
                    break;
                }
            }
            this.multiply--
        }
        else {
            this.move()
        }
    }
    move() {
        console.log("ha");

        let emptyCells0 = this.chooseCell(0)
        let newCell0 = random(emptyCells0)
        if (newCell0 && this.multiply >= 1) {
            matrix[this.y][this.x] = 0
            let newX = newCell0[0]
            let newY = newCell0[1]
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
            this.multiply--
        }

        let emptyCells1 = this.chooseCell(1)
        let newCell1 = random(emptyCells1)
        if (newCell1 && this.multiply >= 1) {
            matrix[this.y][this.x] = 1
            ////////////////////////////////////
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 0, new Grass(this.x, this.y, 1));
                    break;
                }
            }
            let newX = newCell1[0]
            let newY = newCell1[1]
            matrix[newY][newX] = 7
            //////////////////////////////////////
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.multiply--
        }
        let emptyCells2 = this.chooseCell(2)
        let newCell2 = random(emptyCells2)
        if (newCell2 && this.multiply >= 1) {
            matrix[this.y][this.x] = 2
            for (var i in yelArr) {
                if (this.x == yelArr[i].x && this.y == yelArr[i].y) {
                    yelArr.splice(i, 0, new Yellow(this.x, this.y, 2));
                    break;
                }
            }
            let newX = newCell2[0]
            let newY = newCell2[1]
            matrix[newY][newX] = 7
            for (var i in yelArr) {
                if (newX == yelArr[i].x && newY == yelArr[i].y) {
                    yelArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.multiply--
        }
        let emptyCells3 = this.chooseCell(3)
        let newCell3 = random(emptyCells3)
        if (newCell3 && this.multiply >= 1) {
            matrix[this.y][this.x] = 3
            for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 0, new Predator(this.x, this.y, 3));
                    break;
                }
            }
            let newX = newCell3[0]
            let newY = newCell3[1]
            matrix[newY][newX] = 7
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.multiply--
        }
    }

}
