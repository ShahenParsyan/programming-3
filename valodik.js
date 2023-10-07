class Grass extends LivingCreature {
    mulwt() {
        this.multiply++;
        var newCell = random(this.chooseCell(4));
        if (this.multiply >= 8 && newCell) {
            var newGrasswt = new GrassWt(newCell[0], newCell[1], 5);
            grasswtArr.push(newGrasswt);
            matrix[newCell[1]][newCell[0]] = 5;
            this.multiply = 0;
        }
        else{
            this.mul()
        }
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;  
        }
    }
    
}
//////////////////////////////////////////////
