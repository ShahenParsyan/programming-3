class GrassWt extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
    }
    mul() {
        let foods = this.chooseCell(0)
        let food = random(foods)
        if (food) {
            if (food) {
                var newyell = new Yellow(food[0], food[1], this.index);
                yelArr.push(newyell);
                matrix[food[1]][food[0]] = 2;
                this.multiply = 0;
            }
        }
        else {
            this.mul1
        }
    }
    mul1() {
        let foods = this.chooseCell(2)
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
//////////////////////////////////////////////
