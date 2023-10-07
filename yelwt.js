class YelWt extends LivingCreature{
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
