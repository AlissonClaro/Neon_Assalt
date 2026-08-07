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

        this.currentVisual =
            null;

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

        this.currentVisual =
            visual;

        // =====================================
        // SCALE
        // =====================================

        this.calculateScale(
            visual.targetWidth
        );

        // =====================================
        // GRIP
        // =====================================

        this.sprite.setOrigin(

            visual.grip.x,

            visual.grip.y

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
        // PLAYER HAND SOCKET
        // =====================================

        const hand =
            player.handSocket;

        const handX =

            player.x +

            (
                hand?.x ?? 12
            ) *
            direction;

        const handY =

            player.y +

            (
                hand?.y ?? -8
            );

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

                visual.rotationOffset

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

        // =====================================
        // VISIBILITY
        // =====================================

        this.sprite.setVisible(
            true
        );

    }

    // =====================================
    // TEXTURE
    // =====================================

    updateTexture(weapon) {

        const texture =
            WeaponSkinManager.texture(

                weapon.id,

                weapon.skin

            );

        if (!texture) {

            return false;

        }

        if (
            !this.scene
                .textures
                .exists(texture)
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

        const visual =
            weapon.getVisual();

        const frame =
            this.sprite.frame;

        if (!frame) {

            return null;

        }

        const displayWidth =

            frame.realWidth *
            this.weaponScale;

        const displayHeight =

            frame.realHeight *
            this.weaponScale;

        // =====================================
        // MUZZLE RELATIVE TO GRIP
        // =====================================

        const localX =

            (
                visual.muzzle.x -
                visual.grip.x
            ) *
            displayWidth;

        let localY =

            (
                visual.muzzle.y -
                visual.grip.y
            ) *
            displayHeight;

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

    // =====================================
    // VISIBILITY
    // =====================================

    hide() {

        this.sprite?.setVisible(
            false
        );

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

        this.currentTexture =
            null;

        this.currentVisual =
            null;

        this.weaponManager =
            null;

        this.scene =
            null;

    }

}