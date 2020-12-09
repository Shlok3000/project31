class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMODE(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
        for (var k =0; k <=width; k = k + 80) {
            division.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
         }
    }
}