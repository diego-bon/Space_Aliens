class Start extends Phaser.Scene {
    constructor() {
        super("Start");
    }

    preload() {
        this.load.image('alienBg', './assets/img/aliens_screen_image.jpg');
        this.load.image ('startButton', './assets/img/start.png');
    }

    create() {
        this.alienBg = this.add.image(0,0,'alienBg');
        this.alienBg.setOrigin(0,0);
        this.alienBg.setScale(game.canvas.width / this.alienBg.width, game.canvas.height / this.alienBg.height);
        this.startText = this.add.text(game.canvas.width / 2, game.canvas.height / 2, 'Space Aliens', {font: '50px Arial', fill: '#fff'}).setOrigin(0.5) 

        this.startButton = this.add.image(game.canvas.width / 2, (game.canvas.height / 2) + 150, 'startButton').setScale(0.7);
        this.startButton.setInteractive({useHandCursor: true});
        
        this.startButton.on('pointerdown', () => {
            this.scene.switch('Game');
        });
    }
}