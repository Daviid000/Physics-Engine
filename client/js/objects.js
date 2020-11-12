function Wall(x, y, w, h){
    var o = { //options
        isStatic: true
    };
    this.body = Bodies.rectangle(x+w/2, y+h/2, w, h, o);
    //this.body.bounds.min = {x:x,y:y};
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.id = this.body.id;
    this.image = images.wall;
    this.body.friction = 0.005;
    this.body.frictionStatic = 0;

    this.show = function(){
        var pos = this.body.position;
        image(this.image, pos.x-this.w/2, pos.y-this.h/2, this.w, this.h);

    }
}

function DeathWall(x, y, w, h){
    var o = { //options
        isStatic: true,
        isSensor: true
    };
    this.body = Bodies.rectangle(x+w/2, y+h/2, w, h, o);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.id = this.body.id;
    this.image = images.deathWall;


    this.show = function(){
        var pos = this.body.position;
        image(this.image, pos.x-this.w/2, pos.y-this.h/2, this.w, this.h);

    }
}

function Goal(x, y, w, h){
    var o = { //options
        isStatic: true,
        isSensor: true
    };
    this.body = Bodies.rectangle(x+w/2, y+h/2, w, h, o);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.id = this.body.id;
    this.image = images.goal;


    this.show = function(){
        var pos = this.body.position;
        image(this.image, pos.x-this.w/2, pos.y-this.h/2, this.w, this.h);

    }
}

function Ball(x, y, r, p){
    this.body = Bodies.circle(x, y, r);
    this.r = r;
    World.add(world, this.body);
    this.id = this.body.id;
    this.image = images.ball;
    if(p=="player"){
        this.player = true;
        this.body.restitution = 0.8;
        this.body.frictionAir = 0.01;
        this.force = {x:0.0005,y:0.005};
        this.body.friction = 0.00;
        this.body.frictionStatic = 0;
        this.inertia= Infinity;
    } else {
        this.player = false;
    }

    this.show = function(){
        if(this.player){
            if(keyIsDown(UP_ARROW)||keyIsDown(87)||keyIsDown(32))Body.applyForce(this.body,this.body.position,{x:0,y:-this.force.y});
            if(keyIsDown(LEFT_ARROW)||keyIsDown(65))Body.applyForce(this.body,this.body.position,{x:-this.force.x,y:0});
            if(keyIsDown(RIGHT_ARROW)||keyIsDown(68))Body.applyForce(this.body,this.body.position,{x:this.force.x,y:0});

        }
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, -this.r, -this.r, this.r*2, this.r*2);
        pop();

    }
}
