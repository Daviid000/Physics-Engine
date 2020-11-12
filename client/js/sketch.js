// module aliases
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
Body = Matter.Body;

var engine;
var world;
var images = {};
var walls = [];
var deathWalls = [];
var goals = [];
var players = [];
var balls = [];
var currentLevel = 2;
var collisionStartEventListener;
var dead = true;


function preload(){
    images.wall = loadImage("./images/wall.png");
    images.deathWall = loadImage("./images/deathWall.png");
    images.ball = loadImage("./images/ball.png");
    images.goal = loadImage("./images/goal.png");
}

function setup() {
    createCanvas(1280, 720);

    // create an engine
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 2;

    startNewLevel();

}

function mouseDragged() {
//function mouseClicked() {
    balls.push(new Ball(mouseX, mouseY, 10,""));
}

function draw() {
    if(!dead){
        var cl = currentLevel;
        Engine.update(engine);
        background(150);
        for(var i=0; i<walls.length; i++){
            walls[i].show();
        }
        for(var i=0; i<deathWalls.length; i++){
            deathWalls[i].show();
        }
        for(var i=0; i<goals.length; i++){
            goals[i].show();
        }
        for(var i=0; i<balls.length; i++){
            balls[i].show();
        }
        for(var i=0; i<players.length; i++){
            players[i].show();
        }
        textSize(30);
        textAlign(LEFT, TOP);
        text('Level: '+cl, 30, 30);
    }
}
