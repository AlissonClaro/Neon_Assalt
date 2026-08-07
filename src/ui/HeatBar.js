import Phaser from "phaser";

export default class HeatBar {

    constructor(scene) {

        this.scene =
            scene;

        this.graphics =
            scene.add.graphics();

        this.graphics
            .setScrollFactor(0)
            .setDepth(1000);

        this.x = 20;
        this.y = 84;

        this.width = 180;
        this.height = 10;

    }

    update(
        value = 0,
        max = 100
    ) {

        const safeMax =
            Math.max(
                1,
                max
            );

        const current =
            Phaser.Math.Clamp(
                value,
                0,
                safeMax
            );

        const ratio =
            current /
            safeMax;

        this.graphics.clear();

        this.graphics.fillStyle(
            0x161616,
            0.85
        );

        this.graphics.fillRect(

            this.x,
            this.y,

            this.width,
            this.height

        );

        this.graphics.fillStyle(
            0xffffff,
            1
        );

        this.graphics.fillRect(

            this.x,
            this.y,

            this.width *
            ratio,

            this.height

        );

    }

    hide() {

        this.graphics.setVisible(
            false
        );

    }

    show() {

        this.graphics.setVisible(
            true
        );

    }

    destroy() {

        this.graphics.destroy();

    }

}