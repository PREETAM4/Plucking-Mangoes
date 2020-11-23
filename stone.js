class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restution :0,
            friction :1,
            density:1.2
            }
    this.x=x;        
    this.y=y;    
    this.r=r;
    this.image=loadImage("img/stone.png")     
    this.body=Bodies.circle(this.x, this.y,this.r,options)
    World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2)
        pop();
    } 
}
