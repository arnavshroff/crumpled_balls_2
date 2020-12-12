class dustbin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbinObject);
        this.width=width;
        this.height=height;
        //this.image=loadImage("dustbin.png")
        
    }

    display()
    {
        // fill("lightgrey");
        noStroke();
        //imageMode(CENTER)
        //image(this.image,0,0,50,50)
        rectMode(CENTER);
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}