class Main{
    
        constructor(x, y,width,height,angle) {
            var options = {
                'restitution':0.9,
                'friction':1,
                'density': 10
                
            }
            this.body = Bodies.rectangle(x, y, width,height, options);
            this.width =width;
            this.height=height;
            this.image= loadImage("base.png")
            
            World.add(world, this.body);
          }
          show(){
            push()
            var pos =this.body.position;
            var angle= this.body.angle;
            imageMode(CENTER);
            fill(255,0,0);
            translate(pos.x,pos.y)
            rotate(angle)
            image(this.image,0,0,this.width,this.height);
            pop()
          }
    }

