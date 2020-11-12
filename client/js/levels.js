function startNewLevel(){
    //clear all physic engine vars
    Matter.Events.off(engine)
    World.clear(engine.world);
    Engine.clear(engine);
    //clear all vars to prepare for new level
    walls = [];
    deathWalls = [];
    goals = [];
    players = [];
    balls = [];

    if(currentLevel>=1){
        Matter.Events.on(engine, "collisionStart", function(event){
        for(var i=0; i<event.pairs.length; i++){
            for(var k=0; k<players.length; k++){
            if(event.pairs[i].bodyA.id == players[k].id||event.pairs[i].bodyB.id == players[k].id){
                //death walls
                for(var j=0; j<deathWalls.length; j++){
                if(event.pairs[i].bodyB.id == deathWalls[j].id||event.pairs[i].bodyA.id == deathWalls[j].id){
                clearLevel();
                return;
                }
                }
                //goal
                for(var j=0; j<goals.length; j++){
                if(event.pairs[i].bodyB.id == goals[j].id||event.pairs[i].bodyA.id == goals[j].id){
                currentLevel++;
                clearLevel();
                return;
                }
                }
            }
            }
        };
        });
    }
    if(currentLevel==1) level1();
    else if(currentLevel==2) level2();
    else console.log("level", currentLevel, "does not exist");
}

function clearLevel() {
    //clear all physic engine vars
    Matter.Events.off(engine)
    World.clear(engine.world);
    Engine.clear(engine);

    //stop draw function from running
    noLoop();
    dead = true;

    setTimeout(startNewLevel, 2000);
}

function level1(){

    //screen boundary
    walls.push(new Wall(0, 0, 1280, 30));
    walls.push(new Wall(0, 30, 30, 690));
    walls.push(new Wall(30, 690, 1220, 30));
    walls.push(new Wall(1250, 30, 30, 690));

    //walls


    //death walls
    deathWalls.push(new DeathWall(400, 200, 100, 100));

    //goal
    goals.push(new Goal(600, 225, 50, 50));

    //players
    players.push(new Ball(200, 200, 20,"player"));

    dead = false;
    loop();
}

function level2(){

    //screen boundary
    walls.push(new Wall(0, 0, 1280, 30));
    walls.push(new Wall(0, 30, 30, 690));
    walls.push(new Wall(30, 690, 1220, 30));
    walls.push(new Wall(1250, 30, 30, 690));

    //walls
    walls.push(new Wall(300, 300, 40, 40));
    walls.push(new Wall(340, 300, 40, 40));
    walls.push(new Wall(420, 300, 40, 40));

    //death walls
    deathWalls.push(new DeathWall(30, 30, 100, 100));

    //goal
    goals.push(new Goal(390, 310, 20, 20));

    //players
    players.push(new Ball(200, 200, 20,"player"));

    dead = false;
    loop();
}
