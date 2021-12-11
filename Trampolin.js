class Trampolin {
    constructor() {
        var options = {
            isStatic : true, 
            restitution : 0.5  
        }
        this.body = Bodies.rectangle(350, 600, 80, 30, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        pos.y= 605
        pos.x = mouseX;
        push();
        imageMode (CENTER);
        image(trampImg, pos.x, pos.y, 80, 50);
        //rectMode(CENTER);
        //rect(0,0, 30,60);
        pop()
    }
}