var BouncyBird = BouncyBird || {};

BouncyBird.MainMenu = function(){};

BouncyBird.MainMenu.prototype =
{
  preload: function()
  {
    this.load.image('background', 'assets/background.png');
    this.load.image('start', 'assets/buttons/start.png');
    this.load.image('level1', 'assets/buttons/level1.png');
    this.load.image('level2', 'assets/buttons/level2.png');
    this.load.image('level3', 'assets/buttons/level3.png');
    this.load.image('instructions', 'assets/buttons/instructions.png');
  },
  create: function()
  {
    // Create buttons 
    this.splash = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
    this.splash.anchor.setTo(0.5);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 100, 'start', this.StartClick, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, 'level1', this.Level1Click, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'level2', this.Level2Click, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'level3', this.Level3Click, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'instructions', this.InstructionsClick, this, 2, 1, 0);
    this.button.anchor.setTo(0.5);
  },
  update: function()
  {
  },
  StartClick: function()
  {
    this.game.state.start('Level1');
  },
  Level1Click: function()
  {
    this.game.state.start('Level1');
  },
  Level2Click: function()
  {
    this.game.state.start('Level2');
  },
  Level3Click: function()
  {
    this.game.state.start('Level3');
  },
  InstructionsClick: function()
  {
    this.game.state.start('Instructions');
  }
};
