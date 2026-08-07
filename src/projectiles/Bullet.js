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

        // =====================================
        // VISUAL SIZE
        // =====================================

        this.targetWidth = 22;

    }

    fire({
        x,
        y,
        angle,
        speed = 900,
        damage = 1,
        owner = null,
        texture = "bullet_default",
        lifeTime = 1500,
        targetWidth = 22
    }) {

        if (
            texture &&
            this.scene.textures.exists(
                texture
            )
        ) {

            this.setTexture(
                texture
            );

        }

        this.damage =
            Math.max(
                0,
                damage
            );

        this.owner =
            owner;

        this.lifeTime =
            Math.max(
                1,
                lifeTime
            );

        this.spawnTime =
            this.scene.time.now;

        this.targetWidth =
            targetWidth;

        this.enableBody(
            true,
            x,
            y,
            true,
            true
        );

        this.setActive(true);

        this.setVisible(true);

        this.setRotation(
            angle
        );

        // =====================================
        // NORMALIZE SCALE
        // =====================================

        this.normalizeScale();

        // =====================================
        // VELOCITY
        // =====================================

        this.scene.physics.velocityFromRotation(

            angle,

            speed,

            this.body.velocity

        );

    }

    normalizeScale() {

        const width =
            this.frame?.realWidth ??
            0;

        if (width <= 0) {

            this.setScale(
                1
            );

            return;

        }

        const scale =
            this.targetWidth /
            width;

        this.setScale(

            Phaser.Math.Clamp(

                scale,

                0.02,

                0.3

            )

        );

        /*
         * Atualiza o corpo físico para
         * acompanhar aproximadamente
         * o tamanho visual.
         */

        if (this.body) {

            const visualWidth =
                this.displayWidth;

            const visualHeight =
                this.displayHeight;

            this.body.setSize(

                Math.max(
                    4,
                    visualWidth * 0.8
                ),

                Math.max(
                    3,
                    visualHeight * 0.5
                )

            );

        }

    }

    preUpdate(
        time,
        delta
    ) {

        if (!this.active) {

            return;

        }

        const expired =

            time -
            this.spawnTime >=
            this.lifeTime;

        const bounds =
            this.scene
                .physics
                .world
                .bounds;

        const margin =
            150;

        const outsideWorld =

            this.x <
                bounds.x -
                margin ||

            this.x >
                bounds.right +
                margin ||

            this.y <
                bounds.y -
                margin ||

            this.y >
                bounds.bottom +
                margin;

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

        if (this.body) {

            this.setVelocity(
                0,
                0
            );

        }

        this.disableBody(
            true,
            true
        );

    }

}