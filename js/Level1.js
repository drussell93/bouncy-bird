var BouncyBird = BouncyBird || {};

//title screen
BouncyBird.Level1 = function(){};

BouncyBird.Level1.prototype =
{
  preload: function()
  {
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('perch', 'assets/treePerch.png');
    this.load.image('nest', 'assets/nest.png');
    this.load.spritesheet('yellowBird', 'assets/yellow_bird.png', 86, 58);
  },
  create: function()
  {
    // Start physics engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Apply background image
    this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
    this.background.anchor.setTo(0.5);

    // Create groups for objects
    this.platforms = this.game.add.group();
    this.trees = this.game.add.group();
    this.nests = this.game.add.group();

    // Set properties for the groups
    this.platforms.enableBody = true;
    this.trees.enableBody = true;
    this.nests.enableBody = true;

    // Create ground object
    this.ground = this.platforms.create(0, this.game.world.height - 32, 'ground');
    this.ground.scale.setTo(2, 2);
    this.ground.body.immovable = true;

    // Create ledge objects
    this.ledge = this.platforms.create(200, 100, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(-150, 150, 'ground');
    this.ledge.body.immovable = true;

    // Create perch object (tree stump)
    this.perch = this.trees.create(38, this.game.world.height - 70, 'perch');
    this.perch.body.immovable = true;

    // Create nest object (end point)
    this.nestEnd = this.nests.create(38, this.game.world.height - 310, 'nest');
    this.nestEnd.body.immovable = true;

    // Create player object
    this.player = this.game.add.sprite(32, this.game.world.height - 180, 'yellowBird'); //x,y,name 80
    this.game.physics.arcade.enable(this.player);

    // Set player properties
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 400;
    this.player.body.collideWorldBounds = true;

    // Set player animations
    this.player.animations.add('right', [0, 1, 2, 3], 10, false);
    this.player.animations.add('left', [4, 5, 6, 7], 10, false);

    // Define keys
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.cursors.left.onDown.add(this.JumpLeft, this);
    this.cursors.right.onDown.add(this.JumpRight, this);

    this.esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    this.esc.onDown.add(this.MainMenu, this);
  },
  update: function()
  {
    // Player and tree collide
    this.game.physics.arcade.collide(this.player, this.trees);

    // Player and platforms overlap
    this.game.physics.arcade.overlap(
      this.player, this.platforms, this.RestartGame, null, this);

    this.game.physics.arcade.overlap(
      this.player, this.nests, this.CompleteGame, null, this);

    // Cruise speeds
    if(this.player.body.velocity.x > 0)
    {
      this.player.body.velocity.x = 75;
    }
    else if(this.player.body.velocity.x < 0)
    {
      this.player.body.velocity.x = -75;
    }
  },
  JumpLeft: function()
  {
    //  Move to the left
    this.player.body.velocity.x = -1000;
    this.player.body.velocity.y = -150;

    this.player.animations.play('left');
  },
  JumpRight: function()
  {
    //  Move to the right
    this.player.body.velocity.x = 1000;
    this.player.body.velocity.y = -150;

    this.player.animations.play('right');
  },
  RestartGame: function()
  {
    // Reset player position
    this.player.body.velocity.x = 0;
    this.player.body.x = 32;
    this.player.body.y = this.game.world.height - 180;
  },
  CompleteGame: function()
  {
    // Load next game state
    this.game.state.start('Level2');
  },
  MainMenu: function()
  {
    // Return to main menu
    this.game.state.start('MainMenu');
  }
};
