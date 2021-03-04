class Pig{
    constructor(x, y) {
        var options = {
            'restitution':0.9,
            'friction':1,
            'density': 0.5
            
        }
        this.body = Bodies.rectangle(x, y, 90, 90, options);
        this.width =90;
        this.height =90;
        this.Pimage= loadImage("enemy.png")
        this.visibility=255
        World.add(world, this.body);
      }
      vanish(){
        push()
        if(this.body.speed>1){
        
        
        }
        pop()
      }
      show(){
        var pos =this.body.position;
        var angle= this.body.angle;
      
        if(this.body.speed<0.4){
        push()
       
        translate(pos.x,pos.y)
        rotate(angle)
       
        imageMode(CENTER);
        fill(0,255,0);
       
        image(this.Pimage, 0,0);
        pop()
      }else {5
        //World.remove(world,this.body)
        push()
        this.visibility-=10;
        tint(255,this.visibility)
        
        image(this.Pimage,pos.x,pos.y)
        pop()
      }

      if(this.visibility<=0){
        World.remove(world,this.body)
      }
    }
}