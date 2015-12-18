var Bird = function(game, x, y, frame) {  
  Phaser.Sprite.call(this, game, x, y, 'heart', frame);

  // initialize your prefab here
    this.anchor.setTo(0.5,0.5);
    

};

Bird.prototype = Object.create(Phaser.Sprite.prototype);  
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {

  // write your prefab's specific update code here

};