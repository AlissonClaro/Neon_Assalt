import WeaponSkinManager from "../weapons/WeaponSkinManager.js";

export default class WeaponIcon {

    constructor(scene) {

        this.scene = scene;

        this.icon = null;

        this.currentTexture =
            null;

    }

    update(player) {

        const weapon =
            player?.weaponManager
                ?.getWeapon();

        if (!weapon) {

            this.setVisible(false);

            return;

        }

        const texture =
            WeaponSkinManager.texture(
                weapon.id,
                weapon.skin
            );

        if (
            !texture ||
            !this.scene.textures.exists(
                texture
            )
        ) {

            this.setVisible(false);

            return;

        }

        if (!this.icon) {

            this.icon =
                this.scene.add.image(

                    20,
                    88,
                    texture

                );

            this.icon
                .setOrigin(0)
                .setScrollFactor(0)
                .setDepth(1000);

        }

        if (
            this.currentTexture !==
            texture
        ) {

            this.icon.setTexture(
                texture
            );

            this.currentTexture =
                texture;

        }

        this.setVisible(true);

    }

    setVisible(value) {

        if (this.icon) {

            this.icon.setVisible(
                value
            );

        }

    }

    destroy() {

        if (this.icon) {

            this.icon.destroy();

            this.icon = null;

        }

    }

}