import Phaser from "phaser";

export default class Bullet extends Phaser.Physics.Arcade.Image {

    constructor(scene) {

        super(scene, 0, 0, "bullet");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setActive(false);
        this.setVisible(false);

        this.body.allowGravity = false;

        this.damage = 0;

    }

    fire(x, y, angle, speed, damage) {

        this.damage = damage;

        this.enableBody(true, x, y, true, true);

        this.setRotation(angle);

        this.scene.physics.velocityFromRotation(

            angle,

            speed,

            this.body.velocity

        );

    }

    preUpdate(time, delta) {

        super.preUpdate(time, delta);

        if (

            this.x < -100 ||
            this.x > this.scene.physics.world.bounds.width + 100 ||
            this.y < -100 ||
            this.y > this.scene.physics.world.bounds.height + 100

        ) {

            this.disableBody(true, true);

        }

    }

}