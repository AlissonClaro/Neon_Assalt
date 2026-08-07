import Phaser from "phaser";

export default class Entity extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame = undefined) {

        super(
            scene,
            x,
            y,
            texture,
            frame
        );

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.alive = true;

    }

    update() {

        // Implementado pelas subclasses.

    }

    die() {

        if (!this.alive) {
            return;
        }

        this.alive = false;

        this.setVelocity(0, 0);

        this.disableBody(
            true,
            true
        );

    }

}