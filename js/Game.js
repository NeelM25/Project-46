class Game{
    constructor(){

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

    start(){
        form = new Form();
        form.display();
        
        player = new Player();
        playerCount = player.getCount();

        player1 = createSprite(width/2-250, height-100);
        player1.addAnimation("player1Stand", stand1);
        player1.addAnimation("player1Jump", jump1);
        player1.addAnimation("player1Left", run2);
        player1.addAnimation("player1Right", run1);
        player1.scale = 3.5;
        player2 = createSprite(width/2+250, height-100);
        player2.addAnimation("player2Stand", stand2);
        player2.scale = 3.5;
    }

    play(){
        form.hide();
        Player.getPlayersInfo();
        if(allPlayers !== undefined){
            image(bgImg, 0, -200, width, height+400);
            if(player.index === 1){
              this.handlePlayerControlsLeft();
            }
            //else{
            //this.handlePlayerControlsRight();
            //}
            drawSprites();
        }
    }

    handlePlayerControlsLeft(){
        
          if (keyWentDown(UP_ARROW)) {
            player1.addAnimation("player1Jump",jump1);
            player1.changeAnimation("player1Jump");
            player1.positionY -= 10;
            player1.update();
          }
    
          if (keyWentDown(LEFT_ARROW)) {
            player1.addAnimation("player1Left",run2);
            player1.changeAnimation("player1Left");
            player1.positionX -= 5;
            player1.update();
          }
      
           if (keyWentDown(RIGHT_ARROW)) {
             player1.addAnimation("player1Right",run1);
             player1.changeAnimation("player1Right");
             player1.positionX += 5;
             player1.update();
           } 

           if(keyWentUp(UP_ARROW)){
            player1.addAnimation("player1Stand", stand1);
            player1.changeAnimation("player1Stand");
           }

           if(keyWentUp(RIGHT_ARROW)){
            player1.addAnimation("player1Stand", stand1);
            player1.changeAnimation("player1Stand");
           }

           if(keyWentUp(LEFT_ARROW)){
            player1.addAnimation("player1Stand", stand1);
            player1.changeAnimation("player1Stand");
           }

      }

    }