class Yellow extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index)
        this.energy=8
    }
    mulwt() {
        var newCell = random(this.chooseCell(4));
        if (newCell) {
            var newYelwt = new YelWt(newCell[0], newCell[1], this.index);
            yelwtArr.push(newYelwt);
            matrix[newCell[1]][newCell[0]] = 6;
        }
        else{
            this.eat()
        }
    }
    eat(){
        let foods = this.chooseCell(1)
        let food = random(foods)
        if (food) {
            this.multiply++
            this.energy++;
            if (food && this.multiply>=5) {
                var newyell = new Yellow(food[0], food[1], this.index);
                yelArr.push(newyell);
                matrix[food[1]][food[0]] = 2;
                this.multiply = 0;
            }
            else{
                matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }
        
        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in yelArr) {
            if (this.x == yelArr[i].x && this.y == yelArr[i].y) {
                yelArr.splice(i, 1);
                break;
            }
        }
    }
    
}
