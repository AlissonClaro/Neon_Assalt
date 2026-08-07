import Phaser from "phaser";

export default class Bullet extends Phaser.Physics.Arcade.Image {

    constructor(scene) {

        super(
            scene,
            0,
            0,
            "bullet_default"
        );

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.allowGravity = false;

        this.setActive(false);
        this.setVisible(false);

        this.damage = 0;
        this.owner = null;

        this.lifeTime = 1500;
        this.spawnTime = 0;

    }

    fire({
        x,
        y,
        angle,
        speed = 900,
        damage = 1,
        owner = null,
        texture = "bullet_default",
        lifeTime = 1500
    }) {

        if (
            texture &&
            this.scene.textures.exists(texture)
        ) {

            this.setTexture(texture);

        }

        this.damage = damage;
        this.owner = owner;

        this.lifeTime = lifeTime;
        this.spawnTime = this.scene.time.now;

        this.enableBody(
            true,
            x,
            y,
            true,
            true
        );

        this.setActive(true);
        this.setVisible(true);

        this.setRotation(angle);

        this.scene.physics.velocityFromRotation(
            angle,
            speed,
            this.body.velocity
        );

    }

    preUpdate(time, delta) {

        super.preUpdate(time, delta);

        if (!this.active) {
            return;
        }

        const expired =
            time - this.spawnTime >=
            this.lifeTime;

        const bounds =
            this.scene.physics.world.bounds;

        const outsideWorld =
            this.x < bounds.x - 100 ||
            this.x > bounds.right + 100 ||
            this.y < bounds.y - 100 ||
            this.y > bounds.bottom + 100;

        if (
            expired ||
            outsideWorld
        ) {

            this.kill();

        }

    }

    kill() {

        if (!this.active) {
            return;
        }

        this.damage = 0;
        this.owner = null;

        this.setVelocity(0, 0);

        this.disableBody(
            true,
            true
        );

    }

}