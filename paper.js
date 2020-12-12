class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0,
            'isStatic':false,
            'friction':0.4,
            'density':1.1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image=loadImage("paper.png")
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        image(this.image,0,0,85,85);
        pop();
    }
}