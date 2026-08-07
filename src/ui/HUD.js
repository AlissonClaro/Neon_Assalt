import Phaser from "phaser";

export default class HUD {

    constructor(scene) {

        this.scene = scene;

        this.graphics = scene.add.graphics();

        this.graphics
            .setScrollFactor(0)
            .setDepth(1000);

        this.ammoText = scene.add.text(
            20,
            50,
            "",
            {
                fontFamily: "Arial",
                fontSize: "20px",
                color: "#ffffff"
            }
        );

        this.ammoText
            .setScrollFactor(0)
            .setDepth(1000);

    }

    update(player) {

        if (!player) {
            return;
        }

        this.drawHealth(player);

        this.drawAmmo(player);

    }

    drawHealth(player) {

        if (!player.health) {
            return;
        }

        const max = Math.max(
            1,
            player.health.max ?? 100
        );

        const current = Phaser.Math.Clamp(
            player.health.current ?? max,
            0,
            max
        );

        const ratio =
            current / max;

        const x = 20;
        const y = 20;

        const width = 220;
        const height = 18;

        this.graphics.clear();

        // Fundo
        this.graphics.fillStyle(
            0x111827,
            0.9
        );

        this.graphics.fillRoundedRect(
            x,
            y,
            width,
            height,
            4
        );

        // Vida
        this.graphics.fillStyle(
            0x00ff88,
            1
        );

        this.graphics.fillRoundedRect(
            x,
            y,
            width * ratio,
            height,
            4
        );

        // Borda
        this.graphics.lineStyle(
            2,
            0xffffff,
            0.7
        );

        this.graphics.strokeRoundedRect(
            x,
            y,
            width,
            height,
            4
        );

    }

    drawAmmo(player) {

        const weapon =
            player.weaponManager?.getWeapon?.();

        if (!weapon) {

            this.ammoText.setText("");

            return;

        }

        if (weapon.isMelee?.()) {

            this.ammoText.setText(
                weapon.name ?? ""
            );

            return;

        }

        if (weapon.reloading) {

            this.ammoText.setText(
                `${weapon.name} - RECARREGANDO`
            );

            return;

        }

        this.ammoText.setText(
            `${weapon.name} - ${weapon.ammo} / ${weapon.reserveAmmo}`
        );

    }

    destroy() {

        if (this.graphics) {

            this.graphics.destroy();

            this.graphics = null;

        }

        if (this.ammoText) {

            this.ammoText.destroy();

            this.ammoText = null;

        }

        this.scene = null;

    }

}