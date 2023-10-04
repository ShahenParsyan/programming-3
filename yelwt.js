class YelWt{
    constructor(x, y, index){
    this.x = x;
    this.y = y;
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
    mul() {
        let foods = this.chooseCell(1)
        let food = random(foods)
        if (food) {
            if (food) {
                var newyell = new Yellow(food[0], food[1], this.index);
                yelArr.push(newyell);
                matrix[food[1]][food[0]] = 2;
                this.multiply = 0;
            }
        }
        
    } 
}
