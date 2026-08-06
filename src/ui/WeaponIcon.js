export default class WeaponIcon {

    constructor(scene){

        this.icon = scene.add.image(

            20,

            110,

            "weapon_pistol"

        );

        this.icon.setOrigin(0);

        this.icon.setScale(2);

        this.icon.setScrollFactor(0);

    }

    update(player){

        const weapon =

            player.weaponManager.weapon;

        if(!weapon)
            return;

        this.icon.setTexture(

            weapon.sprite

        );

    }

}