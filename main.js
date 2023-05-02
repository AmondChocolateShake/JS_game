import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {
    const text = this.add.text(400, 300, 'Hello, Phaser!', { fontSize: '32px', fill: '#000' });
}