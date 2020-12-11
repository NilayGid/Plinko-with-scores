class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution: 1,
          friction: 0

      }
      this.body = Bodies.circle(x,y,15,options);
      this.radius = 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y,2*this.radius);
    }
  };