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

        // =====================================
        // PHYSICS
        // =====================================

        this.body.allowGravity = false;

        this.body.setGravity(
            0,
            0
        );

        this.body.setDrag(
            0,
            0
        );

        // =====================================
        // INITIAL STATE
        // =====================================

        this.setActive(false);

        this.setVisible(false);

        // =====================================
        // DATA
        // =====================================

        this.damage = 0;

        this.owner = null;

        this.lifeTime = 1500;

        this.spawnTime = 0;

        // =====================================
        // VISUAL
        // =====================================

        this.targetWidth = 22;

    }

    // ==========================================
    // FIRE
    // ==========================================

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

        // =====================================
        // TEXTURE
        // =====================================

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

        // =====================================
        // DATA
        // =====================================

        this.damage =
            Math.max(
                0,
                Number(damage) || 0
            );

        this.owner =
            owner;

        this.lifeTime =
            Math.max(
                1,
                Number(lifeTime) || 1500
            );

        this.spawnTime =
            this.scene.time.now;

        this.targetWidth =
            Math.max(
                1,
                Number(targetWidth) || 22
            );

        // =====================================
        // ENABLE BODY
        // =====================================

        this.enableBody(
            true,
            x,
            y,
            true,
            true
        );

        this.setActive(true);

        this.setVisible(true);

        // =====================================
        // IMPORTANT:
        // BULLETS IGNORE WORLD GRAVITY
        // =====================================

        this.body.allowGravity =
            false;

        /*
         * Garantimos também que não existe
         * gravidade adicional no Body.
         */

        this.body.setGravity(
            0,
            0
        );

        /*
         * Sem drag.
         *
         * Assim a velocidade horizontal/vertical
         * permanece constante durante o voo.
         */

        this.body.setDrag(
            0,
            0
        );

        this.body.setAcceleration(
            0,
            0
        );

        // =====================================
        // ROTATION
        // =====================================

        this.setRotation(
            angle
        );

        // =====================================
        // SCALE / HITBOX
        // =====================================

        this.normalizeScale();

        // =====================================
        // VELOCITY
        // =====================================

        const velocity =
            this.scene.physics
                .velocityFromRotation(

                    angle,

                    speed

                );

        this.body.setVelocity(

            velocity.x,

            velocity.y

        );

    }

    // ==========================================
    // SCALE
    // ==========================================

    normalizeScale() {

        const frameWidth =
            this.frame?.realWidth ??
            0;

        if (
            frameWidth <= 0
        ) {

            this.setScale(1);

            return;

        }

        const scale =

            this.targetWidth /
            frameWidth;

        this.setScale(

            Phaser.Math.Clamp(

                scale,

                0.02,

                0.3

            )

        );

        // =====================================
        // HITBOX
        // =====================================

        if (!this.body) {

            return;

        }

        const width =
            Math.max(

                4,

                this.displayWidth *
                0.8

            );

        const height =
            Math.max(

                3,

                this.displayHeight *
                0.5

            );

        this.body.setSize(

            width,

            height

        );

        this.body.setOffset(

            (
                this.width -
                width
            ) / 2,

            (
                this.height -
                height
            ) / 2

        );

    }

    // ==========================================
    // UPDATE
    // ==========================================

    preUpdate(
        time,
        delta
    ) {

        if (
            !this.active
        ) {

            return;

        }

        // =====================================
        // FORCE NO GRAVITY
        // =====================================

        /*
         * Proteção extra para pooling.
         *
         * Mesmo se algum outro sistema alterar
         * o Body, o projétil continua sem
         * gravidade.
         */

        if (this.body) {

            this.body.allowGravity =
                false;

            this.body.gravity.set(
                0,
                0
            );

        }

        // =====================================
        // LIFETIME
        // =====================================

        const expired =

            time -
            this.spawnTime >=
            this.lifeTime;

        // =====================================
        // WORLD BOUNDS
        // =====================================

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

    // ==========================================
    // KILL
    // ==========================================

    kill() {

        if (
            !this.active
        ) {

            return;

        }

        this.damage = 0;

        this.owner = null;

        if (
            this.body
        ) {

            this.body.setVelocity(
                0,
                0
            );

            this.body.setAcceleration(
                0,
                0
            );

            this.body.setGravity(
                0,
                0
            );

            this.body.allowGravity =
                false;

        }

        this.disableBody(
            true,
            true
        );

    }

}