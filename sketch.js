var canvas, bgImgStart, bgImg;
var database;
var game, form, player;
var gameState, playerCount;
var attack1, attack2, die1, die2, jump1, jump2, kick1, kick2, run1, run2, stand1, stand2;
var allPlayers;
var player1, player2, players;

function preload(){
    bgImgStart = loadImage("assets/BgStart.jpg");
    bgImg = loadImage("assets/Bg.jpg");

    attack1 = loadAnimation("assets/Attack-1.1.png", "assets/Attack-1.2.png", "assets/Attack-1.3.png", "assets/Attack-1.4.png");
    die1 = loadAnimation("assets/Die-1.1.png", "assets/Die-1.2.png", "assets/Die-1.3.png", "assets/Die-1.4.png");
    jump1 = loadAnimation("assets/Jump-1.1.png", "assets/Jump-1.2.png", "assets/Jump-1.3.png", "assets/Jump-1.4.png", "assets/Jump-1.5.png")
    kick1 = loadAnimation("assets/Kick-1.1.png", "assets/Kick-1.2.png", "assets/Kick-1.3.png", "assets/Kick-1.4.png");
    run1 = loadAnimation("assets/Run-1.1.png", "assets/Run-1.2.png", "assets/Run-1.3.png", "assets/Run-1.4.png");
    stand1 = loadAnimation("assets/Stand-1.png");
    attack2 = loadAnimation("assets/Attack-2.1.png", "assets/Attack-2.2.png", "assets/Attack-2.3.png", "assets/Attack-2.4.png");
    die2 = loadAnimation("assets/Die-2.1.png", "assets/Die-2.2.png", "assets/Die-2.3.png", "assets/Die-2.4.png");
    jump2 = loadAnimation("assets/Jump-2.1.png", "assets/Jump-2.2.png", "assets/Jump-2.3.png", "assets/Jump-2.4.png", "assets/Jump-2.5.png")
    kick2 = loadAnimation("assets/Kick-2.1.png", "assets/Kick-2.2.png", "assets/Kick-2.3.png", "assets/Kick-2.4.png");
    run2 = loadAnimation("assets/Run-2.1.png", "assets/Run-2.2.png", "assets/Run-2.3.png", "assets/Run-2.4.png");
    stand2 = loadAnimation("assets/Stand-2.png");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(bgImgStart);

    if(playerCount === 2){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
    }

   
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}