class Bell{
    constructor(x,y){
        var options={
            density: 1,
            restitution: 1.5
        }
        this.body = Bodies.rectangle(x,y, 50,60, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        if (pos.y > 604){
            // game end
            pos.y = 605;
            Matter.Body.setStatic(this.body, true);
            push();
            translate (pos.x, pos.y);
            imageMode (CENTER);
            image(bellFallImg,0,0,50,60 );
            pop()
            text("game Over", 340, 50);

        }
        else{
            if(pos.x > 700){
                pos.x = 0
            }
            if (pos.x < 0){
                pos.x = 700
            }
            push();
            translate (pos.x, pos.y);
            imageMode (CENTER)
            image(bellImg,0,0,50,60 );
            pop()
        }
        
    }
}