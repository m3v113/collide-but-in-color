var canvas;
var music;
var surface_one, surface_two, surface_three, surface_four;
var box;
var gameState = "start";
var pickle;
var rx, ry;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface_one = createSprite(100,590,100,20);
    surface_one.shapeColor = "red";

    surface_two = createSprite(300,590,100,20);
    surface_two.shapeColor = "blue";

    surface_three = createSprite(500,590,100,20);
    surface_three.shapeColor = "green";

    surface_four = createSprite(700,590,100,20);
    surface_four.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(400,300,40,40);
    box.shapeColor = "white";
    rx = Math.round(random(-5,10));
    ry = Math.round(random(-5,10));
    box.velocityX = rx;
    box.velocityY = ry;


}

function draw() {
    background(rgb(169,169,169));
    console.log(mouseX,mouseY);

    //create edgeSprite
    pickle = createEdgeSprites();
    box.bounceOff(pickle);


    //add condition to check if box touching surface and make it box
    colors();


    drawSprites();
}

function colors() {
    if (surface_four.isTouching(box)) {
        console.log("TOUCHING");
        box.shapeColor = surface_four.shapeColor;
    }

    if (surface_three.isTouching(box)) {
        console.log("TOUCHING");
        box.shapeColor = surface_three.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }

    if ( box.x - surface_two.x < (surface_two.width + box.width)/2 
    && surface_two.x - box.x < (surface_two.width + box.width)/2
    && box.y - surface_two.y < (surface_two.height + box.height)/2
    && surface_two.y - box.y < (surface_two.height + box.height)/2
    ) {
        console.log("TOUCHING");
        box.shapeColor = surface_two.shapeColor;
        
    }

    if ( box.x - surface_one.x < (surface_one.width + box.width)/2 
    && surface_one.x - box.x < (surface_one.width + box.width)/2
    && box.y - surface_one.y < (surface_one.height + box.height)/2
    && surface_one.y - box.y < (surface_one.height + box.height)/2
    ) {
        console.log("TOUCHING");
        box.shapeColor = surface_one.shapeColor;
        
    }
}

