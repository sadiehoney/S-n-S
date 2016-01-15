var ScaleBackground = function(callingcontext,background) {

    callingcontext.background = callingcontext.add.sprite(0,0,background);
    //callingcontext.background.alpha = 0;
    
    
    //calculate where to place the camera based on window size and pixel ratio
    
    callingcontext.cameraX = callingcontext.game.world.centerX - callingcontext.game.width/2;
    callingcontext.cameraY = callingcontext.game.world.centerY - callingcontext.game.height/2;

    callingcontext.game.camera.x = callingcontext.cameraX;
    callingcontext.game.camera.y = callingcontext.cameraY;
    
    //background fades in - seems to cause a performance hit
    //callingcontext.game.add.tween(callingcontext.background).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);

};

ScaleBackground.prototype = Object.create(Phaser.Sprite.prototype);
ScaleBackground.prototype.constructor = ScaleBackground;

