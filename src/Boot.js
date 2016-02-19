BasicGame = {

    scaleofimages: window.devicePixelRatio/3,
    //scaleofimages: 1,
    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,
    blspoketoperrylunch: false,
    blspoketomelanielunch: false,
    blspoketoaspenlunch: false,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false,
    
    //dialogkey: 0 - don't think I need this
    

};

BasicGame.Boot = function (game) {
};

BasicGame.Boot.prototype = {


    init: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            BasicGame.scaleofimages = 1;
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE; //not totally sure this is what we want here
            this.scale.setMinMax(480, 320, 768, 1024);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            //landscape
            //this.scale.setMinMax(480, 260, 1024, 768);
            //this.scale.forceOrientation(true, false);
            //portrait
            this.scale.setMinMax(320, 480, 768, 1024);
            this.scale.forceOrientation(false, true);
            
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this); 
        }

    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
       // this.load.image('preloaderBackground', splashLogo);
        this.load.image('preloaderBar', preLoaderBar);

    },

    create: function () {

        this.state.start('Preloader');

    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.

    },

    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }
    
};