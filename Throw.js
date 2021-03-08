class Throw{
    constructor(bodyA,pointB){
        var options = {
            badyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            lenth:10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
}

fly()
{
    this.throw.bodyA=null;
}

Luanch(bodyA)
{
    this.throw.bodyA=bodyA;
}

display()
{

}