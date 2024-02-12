const config = {
    height: 720,
    width: 1280,
    type: Phaser.AUTO,
    scene: [Start, Game],
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade', 
        arcade: {
            debug: false 
        }
    },
    scale: {
        mode: Phaser.Scale.FIT, 
        autoCenter: Phaser.Scale.CENTER_BOTH 
    }
}

const game = new Phaser.Game(config);
