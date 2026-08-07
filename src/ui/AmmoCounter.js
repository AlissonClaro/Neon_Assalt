export default class AmmoCounter {

    constructor(scene) {

        this.text =
            scene.add.text(

                20,
                52,
                "",

                {
                    fontSize: "22px",
                    color: "#ffffff",
                    fontFamily: "Arial"
                }

            );

        this.text
            .setScrollFactor(0)
            .setDepth(1000);

    }

    update(player) {

        const weapon =
            player?.weaponManager
                ?.getWeapon();

        if (!weapon) {

            this.text.setText("");

            return;

        }

        if (weapon.isMelee()) {

            this.text.setText(
                weapon.name
            );

            return;

        }

        if (weapon.reloading) {

            this.text.setText(
                `${weapon.name}  RELOAD`
            );

            return;

        }

        this.text.setText(

            `${weapon.name}  ${weapon.ammo} / ${weapon.reserveAmmo}`

        );

    }

    destroy() {

        this.text.destroy();

    }

}