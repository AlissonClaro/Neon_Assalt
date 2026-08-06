export default class AmmoCounter {

    constructor(scene){

        this.text = scene.add.text(

            20,
            55,

            "",

            {

                fontSize:"24px",

                color:"#ffffff",

                fontFamily:"Arial"

            }

        );

        this.text.setScrollFactor(0);

    }

    update(player){

        const weapon =

            player.weaponManager.weapon;

        if(!weapon)
            return;

        this.text.setText(

            weapon.ammo +

            " / " +

            weapon.reserveAmmo

        );

    }

}