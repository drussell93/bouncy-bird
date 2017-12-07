var BouncyBird = BouncyBird || {};

BouncyBird.Instructions = function(){};

BouncyBird.Instructions.prototype =
{
  preload: function()
  {
    this.load.image('background', 'assets/background.png');
    this.load.image('mainMenu', 'assets/buttons/main_menu.png');
  },
  create: function()
  {
    // Create splash image
    this.splash = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
    this.splash.anchor.setTo(0.5);

    var text = "Press left and right arrow keys to fly. Don't touch the platforms.\nReach the nest to get to the next level.\nEscape key returns to Main Menu.";
    var style = { font: "20px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
    t.anchor.set(0.5);

    // Create button 
    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 100, 'mainMenu', this.MainMenuClick, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);
  },
  update: function()
  {
  },
  MainMenuClick: function()
  {
    this.game.state.start('MainMenu');
  }
};
