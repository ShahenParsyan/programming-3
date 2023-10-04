class Predator{
    constructor(x, y, index){
    this.x = x;
    this.y = y;
    this.energy=30
    this.index = index;
    this.multiply = 0;
    this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
     }
     
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            } 
        }
        return found;
    }
    eat(){
        let foods = this.chooseCell(2)
        let food = random(foods)
        if (food) {
            this.multiply++
            this.energy++;
            if (food && this.multiply>=5) {
                var newyell = new Predator(food[0], food[1], this.index);
                predatorArr.push(newyell);
                matrix[food[1]][food[0]] = 3;
                this.multiply = 0;  
            }
            else{
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            
            this.x = newX
            this.y = newY
            for (var i in yelArr) {
                if (newX == yelArr[i].x && newY == yelArr[i].y) {
                    yelArr.splice(i, 1);
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
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
        
        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
    
}
