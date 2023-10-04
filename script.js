var matrix =[]
var n =40
var m =70
var side = 20;
var grassArr = [];
var yelArr = []
var predatorArr = []
var wotherArr = []
var grasswtArr = []
var yelwtArr = []
var peryArr = []
for(let i=0;i<n;i++){
    matrix.push([])
    for(let j=0;j<m;j++){
        matrix[i].push(0)
    }
}
function carecters(index, count){
    for(let i=0;i<count;i++){
        var v = Math.floor(random(0,n))
        var w = Math.floor(random(0,m))
        matrix[v][w]=index
    }
}
function setup() {
    carecters(1,50)
    carecters(2,60)
    carecters(3,20)
    carecters(4,500)
    carecters(7,15)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length *
        side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var yl = new Yellow(x, y, 2)
                yelArr.push(yl)

            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x, y, 3)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                var wt = new Wother(x, y, 4)
                wotherArr.push(wt)
            }
            else if (matrix[y][x] == 5) {
                var gwt = new GrassWt(x, y, 5)
                grasswtArr.push(gwt)
            }
            else if (matrix[y][x] == 6) {
                var ywt = new YelWt(x, y, 6)
                yelwtArr.push(ywt)
            }
            else if (matrix[y][x] == 7) {
                var prr = new Perry(x, y, 7)
                peryArr.push(prr)
            }
            else if (matrix[y][x] == 0) {

            }
        }
    }
}
///////////////////////////
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill(200,200,200);
            }
            else if (matrix[y][x] == 1) {
                fill(25, 255, 25);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 25);
            }
            else if (matrix[y][x] == 3) {
                fill(255, 25, 25);
            }
            else if (matrix[y][x] == 4) {
                fill(25, 25, 255);
            }
            else if (matrix[y][x] == 5) {
                fill(25, 255, 155);
            }
            else if (matrix[y][x] == 6) {
                fill(255, 255, 155);
            }
            else if (matrix[y][x] == 7) {
                fill(123, 63, 0);
            }
            rect(x * side, y * side, side, side);
        }

    }
    for (var i in grassArr) {
        grassArr[i].mulwt();
    }
    for (var i in grasswtArr) {
        grasswtArr[i].mul();
    }
    for (var i in yelArr) {
        yelArr[i].mulwt();
    }
    for (var i in yelwtArr) {
        yelwtArr[i].mul();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in peryArr) {
        peryArr[i].eat();
    }

    

}