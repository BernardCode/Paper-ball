class Ball {
    constructor(x,y,r,options){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,r, options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}