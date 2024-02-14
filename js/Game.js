class Game extends Phaser.Scene {
    constructor () {
        super("Game");

        this.score = 0;
    }

    preload() {
        this.load.image('gameBg', './assets/img/starBackground.png');
        this.load.image('ship', './assets/img/ship/Idle.png');
        this.load.image('missile', './assets/img/ship/Missile.png');
        this.load.image('alien', './assets/img/alien.png');

        this.load.audio('laser', './assets/sound/laser1.wav');
        this.load.audio('explosion', './assets/sound/barrelExploding.wav');
        this.load.audio('shipExplosion', './assets/sound/bomb.wav');

        this.load.spritesheet('shipAttack', './assets/img/ship/Attack.png', {frameWidth: 192, frameHeight: 192});
        this.load.spritesheet('shipDestroyed', './assets/img/ship/Destroyed.png', {frameWidth: 192, frameHeight: 192});
    }

    create() {
        this.gameBg = this.add.image(0,0,'gameBg').setOrigin(0,0);
        this.gameBg.setScale(game.canvas.width / this.gameBg.width, game.canvas.height / this.gameBg.height);

        this.ship = this.physics.add.sprite(game.canvas.width / 2, game.canvas.height - 100, 'ship');
        this.ship.setCollideWorldBounds(true);
        this.ship.setScale(0.6);

        this.scoreText = this.add.text(20, 20, 'Score: '+this.score.toString(), {font: '25px Arial', fill: '#fff'});
    }

    update() {
        const keyLeft = this.input.keyboard.addKey('LEFT');
        const keyRight = this.input.keyboard.addKey('RIGHT');

        if(keyLeft.isDown === true) {
            this.ship.setVelocityX(-300); 
        } else if (keyRight.isDown === true) {
            this.ship.setVelocityX(300);
        } else {
            this.ship.setVelocityX(0);
        }
    }
}