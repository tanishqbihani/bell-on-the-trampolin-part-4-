
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trampolin ,trampImg
var bell ,bellImg , bellFallImg
var ground;
var gameState = 0;
var lives = 3;
var score = 0



function preload()
{
	bellImg = loadAnimation("bell jump.jpg");
	trampImg = loadImage("trampolin.jpg");
	bellFallImg = loadAnimation("bell fall.jpg");
	
}

function setup() {
	createCanvas(700, 650);
	


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground= new Ground(350,640,700, 20);
	bell= createSprite(Math.round(random(50,650)), 200, 50,60 );
	bell.addAnimation("jumping",bellImg);
	bell.addAnimation("falling",bellFallImg)
	bell.scale = 0.3;
	//bell.debug= true;
	var xDir = Math.round(random(1, 2));
	console.log(xDir);
	if( xDir === 1){
			bell.velocityX = 6;
	}else{
			bell.velocityX = -6;
	}
	
	trampolin = createSprite(350,567,80, 40);
	trampolin.addImage(trampImg);
	trampolin.scale = 0.4;
	//trampolin.debug= true;
	trampolin.setCollider("rectangle",0,0, 250, 80)
;
	Engine.run(engine);
	bell.depth = trampolin.depth + 1;
  
}


function draw() {
	rectMode(CENTER);
	background(250);

	textSize(20);
	fill ("blue");
	text ("Lives : "+ lives, 50, 50);
	text ("Score : "+ score, 580, 50);

	if ( gameState=== 0 ){
		text ("Press 'Down Arrow' to start game", 280, 200)
	}

	if (keyDown(DOWN_ARROW) && gameState !== 3){
		gameState= 1;
		bell.changeAnimation("jumping",bellImg);
		bell.y = 200;
		bell.x = Math.round(random(100,600));
		bell.velocityY = 0;
		var xDir = Math.round(random(1, 2));
		console.log(xDir);
		if( xDir === 1){
				bell.velocityX = 6;
		}else{
				bell.velocityX = -6;
		}

	}

	if (gameState === 1){
		// Play state actions

		
		//moving trampolin 
		if(keyDown(LEFT_ARROW) && trampolin.x > 50){
			trampolin.x -= 15;
		}

		if(keyDown(RIGHT_ARROW) && trampolin.x < 650){
			trampolin.x += 15;
		}
		
		bell.velocityY = bell.velocityY + 0.5;

		
		if (bell.isTouching(trampolin)){
			score += 1;
			bell.velocityY= -1 * bell.velocityY;
		}
		if (bell.x >700){
			bell.x = 0;
		}
		if (bell.x < 0){
			bell.x = 700;
		}
		
		if (bell.y > 610){
			// end state section 
			lives -= 1;
			gameState = 2;
		}
	}

	if (gameState===2){
		bell.changeAnimation("falling",bellFallImg);
		bell.y = 580;
		bell.velocityX=0;
		text("Bell got hurt :( ",350,200)
		if (lives === 0){
			gameState=3;
		}else {
			text("Press 'Down Arrow to start over.",280,300)
		}	
	}

	if (gameState === 3 ){
		
		text("GAME OVER !!! ",300,300)
	}
	
	

	ground.display();
	//trampolin.display();
	//bell.display();
	
	drawSprites();
  
}



