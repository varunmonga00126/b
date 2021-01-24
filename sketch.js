const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box40;
var box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39;
var ball,spring,ground,groundHovering;

function setup(){
    createCanvas(800,400);

    engine= Engine.create();
   world=engine.world;
Engine.run(engine);
fill("red");
 box1=new Box(500,360,20,30);
 box2=new Box(520,360,20,30);
 box3=new Box(540,360,20,30);
 box4=new  Box(560,360,20,30);
 box5 =new Box(580,360,20,30);
 box6=new Box(600,360,20,30);

 box7=new Box(510,330,20,30);
 box8=new Box(530,330,20,30);
 box9=new Box(550,330,20,30);
 box10=new Box(570,330,20,30);
 box11=new Box(590,330,20,30);

 box12=new Box(520,310,20,30);
 box13=new Box(540,310,20,30);
 box14=new Box(560,310,20,30);
 box15=new Box(580,310,20,30);
 
 box16=new Box(530,280,20,30);
 box17=new Box(550,280,20,30);
 box18=new Box(570,310,20,30);
 
 box19=new Box(540,250,20,30);
 box20=new Box(560,350,20,30);
 
 box21=new Box(550,220,20,30);
 
 box22=new Box(500,135,20,30);
 box23=new Box(520,135,20,30);
 box24=new Box(540,135,20,30);
 box25=new Box(560,135,20,30);
 box26=new Box(580,135,20,30);
 box27=new Box(600,135,20,30);
 
 box28=new Box(510,105,20,30);
 box29=new Box(530,105,20,30);
 box30=new Box(550,105,20,30);
 box31=new Box(570,105,20,30);
 box32=new Box(590,105,20,30);
 
 box33=new Box(520,75,20,30);
 box34=new Box(540,75,20,30);
 box35=new Box(560,75,20,30);
 box36=new Box(580,75,20,30);
 
 box37=new Box(530,45,20,30);
 box38=new Box(550,45,20,30);
 box39=new Box(570,45,20,30);

 box40=new Box(550,2,20,30);

 

 
ball = Bodies.circle(50,200,20);
 World.add(world,ball); 

spring =new Projectile(this.ball,{x:100,y:200});

ground= new PlatFrom(400,390,800,20 );

groundHovering=new PlatFrom(550,160,200,20);
   
}
function draw(){
    background(247,223,178);
    Engine.update(engine);
    
    debug:true;
fill("darkGreen")
    box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
fill("skyBlue")
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
fill("brown")
     box12.display();
     box13.display();
     box14.display();
     box15.display();
fill("white")
     box16.display();
     box17.display();
     box18.display();
fill("grey")
     box19.display();
     box20.display();
fill("black")
     box21.display();
fill("green")     
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box26.display();
     box27.display();
fill("orange")
     box28.display();
     box29.display();
     box30.display();
     box31.display();
     box32.display();
fill("blue")
     box33.display();
     box34.display();
     box35.display();
     box36.display();
fill("red")
     box37.display();
     box38.display();
     box39.display(); 
fill("pink")
     box40.display();
     
     spring.display();
fill("navy")     
     ground.display();
     groundHovering.display();
     
     
    
    }
    
    function mouseDragged(){
     Matter.body.setPosittion(ball.body,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        spring.release();
    }