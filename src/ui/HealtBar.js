import Phaser from "phaser";

export default class HealthBar {

    constructor(scene) {

        this.scene = scene;

        this.x = 20;
        this.y = 20;

        this.width = 220;
        this.height = 18;

        this.graphics = scene.add.graphics();

        this.graphics
            .setScrollFactor(0)
            .setDepth(1000);

    }

    update(player) {

        if (!player?.health) {
            return;
        }

        const max = Math.max(
            1,
            player.health.max
        );

        const current = Phaser.Math.Clamp(
            player.health.current,
            0,
            max
        );

        const ratio =
            current / max;

        this.graphics.clear();

        // Fundo
        this.graphics.fillStyle(
            0x111827,
            0.9
        );

        this.graphics.fillRoundedRect(
            this.x,
            this.y,
            this.width,
            this.height,
            4
        );

        // Vida
        this.graphics.fillStyle(
            0x00ff88,
            1
        );

        this.graphics.fillRoundedRect(
            this.x,
            this.y,
            this.width * ratio,
            this.height,
            4
        );

        // Borda
        this.graphics.lineStyle(
            2,
            0xffffff,
            0.7
        );

        this.graphics.strokeRoundedRect(
            this.x,
            this.y,
            this.width,
            this.height,
            4
        );

    }

    destroy() {

        if (this.graphics) {

            this.graphics.destroy();

            this.graphics = null;

        }

        this.scene = null;

    }

}