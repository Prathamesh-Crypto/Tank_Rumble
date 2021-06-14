class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createImg('Images/PlayButton.png');
      this.greeting = createElement('h1');
      this.reset = createButton('Reset-Database');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h1')
      title.html("Tank Rumble");
      title.position(displayWidth/2-40, 0);
      background(MainScreen);
  
      this.input.position(displayWidth/2-30,displayHeight/2-80);
      this.input.style('width', '300px');
      this.input.style('height', '20px');
      this.input.style('border-radius','8px')
      this.button.position(displayWidth/2+50,displayHeight/2-40);
      this.button.style('width','140px');
      this.button.style('height','50px');
      
      this.reset.position(displayWidth-85,displayHeight/1);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-30,displayHeight/2-70);
          });
        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
         // Player.updateCarsAtEnd(0);
    
          var PlayerRef=database.ref("players");
          PlayerRef.remove();
      });

      
      
      
    }
  }
