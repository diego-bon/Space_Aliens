class Game extends Phaser.Scene {
    constructor () {
        super("Game");

        this.score = 0;
        this.missileFired = false;
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

        this.missileGroup = this.physics.add.group();

        this.createAnimations();
    }

    update() {
        const keyLeft = this.input.keyboard.addKey('LEFT');
        const keyRight = this.input.keyboard.addKey('RIGHT');
        const keySpace = this.input.keyboard.addKey('SPACE');

        if(keyLeft.isDown === true) {
            this.ship.setVelocityX(-300); 
        } else if (keyRight.isDown === true) {
            this.ship.setVelocityX(300);
        } else {
            this.ship.setVelocityX(0);
        }

        if(keySpace.isDown === true && this.missileFired === false) {
            this.ship.anims.play('shipAttack');
            this.fireMissile();
            this.missileFired = true;
        } else if(keySpace.isUp === true) {
            this.missileFired = false;
            this.ship.setTexture('ship'); 
        }
    }

    
    createAnimations() {
        this.anims.create({
            key: 'shipAttack',
            frames: this.anims.generateFrameNumbers('shipAttack'),
            frameRate: 30,
            repeat: 0
        
        })

        this.anims.create({
            key: 'shipDestroyed',
            frames: this.anims.generateFrameNumbers('shipDestroyed'),
            frameRate: 10,
            repeat: 0
        })
    }

    fireMissile() {
        const missile = this.physics.add.image(this.ship.x, this.ship.y - 50, 'missile');
        this.missileGroup.add(missile);
        missile.setVelocityY(-300);
        this.sound.play('laser');
    }
}