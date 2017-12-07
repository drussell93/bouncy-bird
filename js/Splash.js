var BouncyBird = BouncyBird || {};

BouncyBird.Splash = function(){};

BouncyBird.Splash.prototype =
{
  preload: function()
  {
    this.load.image('background', 'assets/background.png');
  },
  create: function()
  {
    // Set splash image 
    this.splash = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
    this.splash.anchor.setTo(0.5);

    var text = "Click to begin";
    var style = { font: "30px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
    t.anchor.set(0.5);
  },
  update: function()
  {
    if(this.game.input.activePointer.justPressed())
    {
      this.game.state.start('MainMenu');
    }
  }
};
