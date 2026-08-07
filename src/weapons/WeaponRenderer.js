import Phaser from "phaser";

import WeaponSkinManager
    from "./WeaponSkinManager.js";

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

        this.weaponScale =
            1;

        // =====================================
        // DEBUG
        // =====================================

        this.debugEnabled =
            true;

        this.debugGraphics =
            scene.add.graphics();

        this.debugGraphics
            .setDepth(100)
            .setVisible(
                this.debugEnabled
            );

        // =====================================
        // WEAPON SPRITE
        // =====================================

        this.sprite =
            scene.add.image(
                0,
                0,
                "__DEFAULT"
            );

        this.sprite
            .setDepth(11)
            .setVisible(false);

    }

    // =====================================
    // UPDATE
    // =====================================

    update(player) {

        if (
            !player ||
            !this.weaponManager
        ) {

            this.hide();

            return;

        }

        const weapon =
            this.weaponManager
                .getWeapon();

        if (!weapon) {

            this.hide();

            return;

        }

        if (
            !this.updateTexture(
                weapon
            )
        ) {

            this.hide();

            return;

        }

        const visual =
            weapon.getVisual();

        // =====================================
        // SCALE
        // =====================================

        this.calculateScale(
            visual.targetWidth
        );

        const frame =
            this.sprite.frame;

        if (!frame) {

            this.hide();

            return;

        }

        // =====================================
        // WEAPON GRIP
        // =====================================

        const grip =
            weapon.getGripSocket();

        const originX =
            Phaser.Math.Clamp(

                grip.x /
                frame.realWidth,

                0,
                1

            );

        const originY =
            Phaser.Math.Clamp(

                grip.y /
                frame.realHeight,

                0,
                1

            );

        this.sprite.setOrigin(
            originX,
            originY
        );

        // =====================================
        // POINTER
        // =====================================

        const pointer =
            this.scene.input
                .activePointer;

        const facingLeft =
            pointer.worldX <
            player.x;

        const direction =
            facingLeft
                ? -1
                : 1;

        // =====================================
        // FRAME SOCKET DA MÃO
        // =====================================

        const hand =
            typeof player
                .getWeaponHandSocket ===
                "function"

                ? player
                    .getWeaponHandSocket()

                : {
                    x: 6,
                    y: 25
                };

        const handX =

            player.x +

            hand.x *
            direction;

        const handY =

            player.y +

            hand.y;

        // =====================================
        // WEAPON POSITION
        // =====================================

        this.sprite.setPosition(
            handX,
            handY
        );

        // =====================================
        // AIM
        // =====================================

        let angle =
            Phaser.Math.Angle.Between(

                handX,
                handY,

                pointer.worldX,
                pointer.worldY

            );

        angle +=
            Phaser.Math.DegToRad(

                visual.rotationOffset ??
                0

            );

        this.sprite.setRotation(
            angle
        );

        // =====================================
        // FLIP
        // =====================================

        this.sprite.setFlipY(
            facingLeft
        );

        this.sprite.setVisible(
            true
        );

        // =====================================
        // DEBUG SOCKETS
        // =====================================

        this.drawDebug(
            handX,
            handY
        );

    }

    // =====================================
    // TEXTURE
    // =====================================

    updateTexture(
        weapon
    ) {

        const texture =
            WeaponSkinManager.texture(

                weapon.id,

                weapon.skin

            );

        if (!texture) {

            return false;

        }

        if (
            !this.scene.textures.exists(
                texture
            )
        ) {

            console.warn(

                `[WeaponRenderer] Textura ausente: ${texture}`

            );

            return false;

        }

        if (
            texture !==
            this.currentTexture
        ) {

            this.sprite.setTexture(
                texture
            );

            this.currentTexture =
                texture;

        }

        return true;

    }

    // =====================================
    // SCALE
    // =====================================

    calculateScale(
        targetWidth
    ) {

        const frameWidth =
            this.sprite
                .frame
                ?.realWidth ??
            0;

        if (
            frameWidth <= 0
        ) {

            return;

        }

        this.weaponScale =

            targetWidth /
            frameWidth;

        this.weaponScale =
            Phaser.Math.Clamp(

                this.weaponScale,

                0.02,

                1

            );

        this.sprite.setScale(
            this.weaponScale
        );

    }

    // =====================================
    // MUZZLE
    // =====================================

    getMuzzlePosition() {

        const weapon =
            this.weaponManager
                ?.getWeapon();

        if (
            !weapon ||
            !this.sprite ||
            !this.sprite.visible
        ) {

            return null;

        }

        const grip =
            weapon.getGripSocket();

        const muzzle =
            weapon.getMuzzleSocket();

        let localX =

            (
                muzzle.x -
                grip.x
            ) *
            this.weaponScale;

        let localY =

            (
                muzzle.y -
                grip.y
            ) *
            this.weaponScale;

        if (
            this.sprite.flipY
        ) {

            localY *= -1;

        }

        const angle =
            this.sprite.rotation;

        const cos =
            Math.cos(angle);

        const sin =
            Math.sin(angle);

        const x =

            this.sprite.x +

            localX *
            cos -

            localY *
            sin;

        const y =

            this.sprite.y +

            localX *
            sin +

            localY *
            cos;

        return {

            x,
            y,
            angle

        };

    }

    // =====================================
    // DEBUG
    // =====================================

    drawDebug(
        handX,
        handY
    ) {

        if (
            !this.debugEnabled ||
            !this.debugGraphics
        ) {

            return;

        }

        this.debugGraphics.clear();

        // =====================================
        // GRIP / HAND
        // VERDE
        // =====================================

        this.debugGraphics.fillStyle(
            0x00ff00,
            1
        );

        this.debugGraphics.fillCircle(
            handX,
            handY,
            3
        );

        // =====================================
        // MUZZLE
        // VERMELHO
        // =====================================

        const muzzle =
            this.getMuzzlePosition();

        if (muzzle) {

            this.debugGraphics.fillStyle(
                0xff0000,
                1
            );

            this.debugGraphics.fillCircle(
                muzzle.x,
                muzzle.y,
                3
            );

            // Linha grip -> muzzle
            this.debugGraphics.lineStyle(
                1,
                0xffff00,
                0.8
            );

            this.debugGraphics.beginPath();

            this.debugGraphics.moveTo(
                handX,
                handY
            );

            this.debugGraphics.lineTo(
                muzzle.x,
                muzzle.y
            );

            this.debugGraphics.strokePath();

        }

    }

    // =====================================
    // DEBUG ON/OFF
    // =====================================

    setDebug(
        enabled
    ) {

        this.debugEnabled =
            enabled;

        if (
            this.debugGraphics
        ) {

            this.debugGraphics
                .setVisible(
                    enabled
                );

            if (!enabled) {

                this.debugGraphics.clear();

            }

        }

    }

    // =====================================
    // HIDE
    // =====================================

    hide() {

        this.sprite
            ?.setVisible(
                false
            );

        this.debugGraphics
            ?.clear();

    }

    // =====================================
    // DESTROY
    // =====================================

    destroy() {

        if (
            this.sprite
        ) {

            this.sprite.destroy();

            this.sprite =
                null;

        }

        if (
            this.debugGraphics
        ) {

            this.debugGraphics.destroy();

            this.debugGraphics =
                null;

        }

        this.currentTexture =
            null;

        this.weaponManager =
            null;

        this.scene =
            null;

    }

}