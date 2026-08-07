import Phaser from "phaser";

import WeaponSkinManager from "./WeaponSkinManager.js";

export default class WeaponRenderer {

    constructor(
        scene,
        weaponManager
    ) {

        this.scene =
            scene;

        this.weaponManager =
            weaponManager;

        this.currentTexture =
            null;

        /*
            __DEFAULT é uma textura interna
            do Phaser.

            Assim podemos criar o Image antes
            de saber qual arma está equipada.
        */

        this.sprite =
            scene.add.image(
                0,
                0,
                "__DEFAULT"
            );

        this.sprite
            .setOrigin(
                0.15,
                0.5
            )
            .setDepth(11)
            .setVisible(false);

    }

    update(player) {

        const weapon =
            this.weaponManager.getWeapon();

        if (!weapon) {

            this.sprite.setVisible(
                false
            );

            return;

        }

        this.updateTexture(
            weapon
        );

        const pointer =
            this.scene.input.activePointer;

        const angle =
            Phaser.Math.Angle.Between(

                player.x,
                player.y,

                pointer.worldX,
                pointer.worldY

            );

        const hand =
            player.handSocket;

        if (!hand) {

            return;

        }

        /*
            Posição inicial do socket da mão.

            Não rotacionamos hand.y como antes,
            porque isso fazia a arma orbitar
            em torno do Player.

            O socket representa um offset
            local do corpo.
        */

        const facingLeft =
            pointer.worldX <
            player.x;

        const handX =
            facingLeft
                ? -Math.abs(hand.x)
                : Math.abs(hand.x);

        this.sprite.setPosition(

            player.x + handX,

            player.y + hand.y

        );

        this.sprite.setRotation(
            angle
        );

        /*
            Quando a arma aponta para a
            esquerda, espelhamos no eixo Y.

            Isso mantém a arma "de cabeça
            para cima".
        */

        this.sprite.setFlipY(
            facingLeft
        );

        this.sprite.setVisible(
            true
        );

    }

    updateTexture(weapon) {

        const texture =
            WeaponSkinManager.texture(

                weapon.id,
                weapon.skin

            );

        if (!texture) {

            this.sprite.setVisible(
                false
            );

            return;

        }

        if (
            texture ===
            this.currentTexture
        ) {

            return;

        }

        if (
            !this.scene.textures.exists(
                texture
            )
        ) {

            console.warn(
                `[WeaponRenderer] Textura não encontrada: ${texture}`
            );

            this.sprite.setVisible(
                false
            );

            return;

        }

        this.sprite.setTexture(
            texture
        );

        this.currentTexture =
            texture;

    }

    getMuzzlePosition() {

        const weapon =
            this.weaponManager.getWeapon();

        if (
            !weapon ||
            !this.sprite.visible
        ) {

            return null;

        }

        const socket =
            weapon.shootSocket;

        const angle =
            this.sprite.rotation;

        const cos =
            Math.cos(angle);

        const sin =
            Math.sin(angle);

        const localX =
            socket.x;

        const localY =
            socket.y;

        const x =
            this.sprite.x +
            localX * cos -
            localY * sin;

        const y =
            this.sprite.y +
            localX * sin +
            localY * cos;

        return {
            x,
            y,
            angle
        };

    }

    destroy() {

        if (this.sprite) {

            this.sprite.destroy();

            this.sprite =
                null;

        }

    }

}