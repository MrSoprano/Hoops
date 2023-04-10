window.onload = function() {
    var coeff = 960/1260;
    var game = new Phaser.Game(Math.abs(coeff*800), Math.abs(coeff*1260),Phaser.AUTO,'gameContainer'); // 800, 1260
    game.antialias = true;
    game.state.add('Boot', Backet.Boot);
    game.state.add('Preloader', Backet.Preloader);
    game.state.add('Game', Backet.Game);
    game.state.start('Boot');
} ;
