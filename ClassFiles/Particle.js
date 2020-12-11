class Particle {
    constructor(x,y) {
      var options = {
          
         restitution: 0.4,
         
         
        }
      this.body = Bodies.circle(x,y,15,options);
      this.radius = 15;
      this.color = color(random(0,255), random(0,255), random(0, 255));
      World.add(world, this.body);
      this.scored =0;
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     fill(this.color);
     ellipseMode(RADIUS);
      ellipse(0, 0,this.radius, this.radius);
       pop();
    }
    score(){
      if(this.body.position.y>590 && this.scored === 0){
         if(this.body.position.x>0 && this.body.position.x<92){
           score = score+500
           this.scored = 1;
         }else if(this.body.position.x>102 && this.body.position.x<192){
             score = score + 500
             this.scored = 1;
         }else if(this.body.position.x>202 && this.body.position.x<292){
          score = score + 400
          this.scored = 1;
         }else if(this.body.position.x>302 && this.body.position.x<392){
          score = score + 300
          this.scored = 1;
         }else if(this.body.position.x>402 && this.body.position.x<492){
          score = score + 200
          this.scored = 1;
         }else if(this.body.position.x>502 && this.body.position.x<592){
          score = score + 100
          this.scored = 1;
         }else if(this.body.position.x>602 && this.body.position.x<692){
          score = score + 100
          this.scored = 1;
         }
      }
    }
  };