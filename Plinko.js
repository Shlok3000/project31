class Plinko {
    constructor(x, y, r) {
        this.body = Bodies.circle(x, y, this.r);
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.position.x,this.position.y);
    }
}