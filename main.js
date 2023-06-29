marioX = 325
marioY = 325
noseX = 0
noseY = 0
img = ""

function preload() {
	world_start = loadSound("world_start.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_coin = loadSound("coin.wav");
    img = loadImage("mario.jpg")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("gameConsole")
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
    console.log("Modelo Carregado!")
}

function gotPoses(results){
	if(results.length > 0){
       console.log(results)
	   noseX = results[0].pose.nose.x
	   noseY = results[0].pose.nose.y
	}
}






