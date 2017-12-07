var BouncyBird = BouncyBird || {};

BouncyBird.game = new Phaser.Game(800, 400, Phaser.AUTO, '');

// Add game states to the game object
BouncyBird.game.state.add('Splash', BouncyBird.Splash);
BouncyBird.game.state.add('MainMenu', BouncyBird.MainMenu);
BouncyBird.game.state.add('Level1', BouncyBird.Level1);
BouncyBird.game.state.add('Level2', BouncyBird.Level2);
BouncyBird.game.state.add('Level3', BouncyBird.Level3);
BouncyBird.game.state.add('Instructions', BouncyBird.Instructions);

// Start the splash screen state 
BouncyBird.game.state.start('Splash');
