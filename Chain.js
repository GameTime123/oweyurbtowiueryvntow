class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.point = pointB;
        World.add(world, this.chain);
    }
    fly(){
    this.chain.bodyA = null
    }
    display(){
        if(this.chain.bodyA !== null){var pointA = this.chain.bodyA.position;
        var pointB = this.point;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}