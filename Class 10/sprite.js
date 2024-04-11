function sprite () {
    this.width = 1920; // ****el ancho todal de mi spritesheet***
    this.height = 480; // ***el alto de mi spritesheet ***
    this.x = 0;
    this.y = 0;
    this.radius = 480; //***esta medida es lo que mide el ancho de un sprite (un frame del spritesheet)***
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.totalSpriteFrames = 4; //***este es el numero total de frames en mi spritesheet***
  }
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = 5; //funciona para controlar los fps, si es 4 son 15fps
    var numberOfFrames = 4; //*** El numero de frames que tiene mi spritesheet***

  update = function () {

    tickCount += 1;
  
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      // Go to the next frame
      frameIndex += 1; 
    } if (frameIndex >= numberOfFrames){
      frameIndex = 0; //cuando llega al frame final de mi spritesheet se regresa al primero
    }
}; 


  sprite.prototype.draw = function (context) {
    var pusheenImage = new Image(); //***puedes cambiar el nombre de la variable ***
    pusheenImage.src = "pusheensprite.png"; // ***el nombre de tu imagen***
    update();
    context.save();
    context.translate(this.x, this.y);
    
    context.drawImage(pusheenImage, 
        frameIndex * this.width / numberOfFrames,
        0,
        this.width / numberOfFrames,
        this.height,
        0,
        0,
        this.width / numberOfFrames,
        this.height);
      
    context.restore();
    
  };

  sprite.prototype.getBounds = function () {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  };

