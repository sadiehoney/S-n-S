var ScaleBackground = function(callingcontext,background) {

    //center the background in the game
    
    callingcontext.background = callingcontext.add.sprite(callingcontext.game.world.centerX,
                                                          callingcontext.game.world.centerY,background);
    callingcontext.background.anchor.set(0.5, 0.5);
    callingcontext.background.scale.setTo(BasicGame.scaleofimages,BasicGame.scaleofimages);

    //save visible x, y, width, & height coordinates for later
    callingcontext.visibleX = callingcontext.game.camera.x; //assume the camera x is correct (horizontal has been fine)
    callingcontext.visibleY = callingcontext.game.world.centerY - (window.innerHeight * window.devicePixelRatio)/2;
    callingcontext.visibleWidth = callingcontext.game.camera.width;
    callingcontext.visibleHeight = window.innerHeight * window.devicePixelRatio;

    console.log("camera width:" + callingcontext.game.camera.width + "camera height:" + callingcontext.game.camera.height);
    console.log("visible width:" + callingcontext.visibleWidth + "visible height:" + callingcontext.visibleHeight);
    console.log("visible X:" + callingcontext.visibleX + "visible Y:" + callingcontext.visibleY);
    console.log("camera X:" + callingcontext.game.camera.x + "camera Y:" + callingcontext.game.camera.y);
    console.log("gameworld center X:" + callingcontext.game.world.centerX + "gameworld center Y:" + callingcontext.game.world.centerY);

    //callingcontext.background.alpha = 0;
    
    //background fades in - seems to cause a performance hit
    //callingcontext.game.add.tween(callingcontext.background).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);

};

ScaleBackground.prototype = Object.create(Phaser.Sprite.prototype);
ScaleBackground.prototype.constructor = ScaleBackground;

