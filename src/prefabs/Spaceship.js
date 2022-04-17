class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   //adds to existing scene
        this.points = pointValue;   //stores the point value
        this.moveSpeed = game.settings.spaceshipSpeed;         //pixels per frame
    }

    create() {
        //adds timer event for ship speed increase
        this.lightSpeed = this.time.addEvent({delay: 30000, callback: this.faster, callbackScope: this, loop: false});
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    //speeds up the ships after 30 seconds
    faster() {
        game.settings.spaceshipSpeed += 1;
    }

    //spaceship reset
    reset() {
        this.x = game.config.width;
    }
}