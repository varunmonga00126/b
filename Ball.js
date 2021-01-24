class Ball{
constructor(x,y,radius){
    var options= {
        'restitiution':0.8,
        'friction':1.0,
        'density':1.0, 
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("polygon.png");
    World.add(world,this.body);


}
display(){
    Push();
    var pos=this.body.position;
    Translate(this.body.position.x,this.body.position.y)
    imageMode(CRNTER);
    image(this.image,0,0,this.diameter);
    ellipesMode(CENTER);
    ellipes(pos.x,pos.y,yhis.radius);
    Pop();
}
}

