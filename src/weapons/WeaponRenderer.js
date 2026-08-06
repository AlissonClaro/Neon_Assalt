import Phaser from "phaser";

export default class WeaponRenderer {

    constructor(scene) {

        this.scene = scene;

        this.sprite = scene.add.image(0, 0, "weapon_pistol");

        this.sprite.setOrigin(0.15, 0.5);

    }

    update(player) {

        const pointer =

            this.scene.input.activePointer;

        const angle = Phaser.Math.Angle.Between(

            player.x,

            player.y,

            pointer.worldX,

            pointer.worldY

        );

        const hand =

            player.handSocket;

        const cos = Math.cos(angle);

        const sin = Math.sin(angle);

        this.sprite.x =

            player.x +

            hand.x * cos -

            hand.y * sin;

        this.sprite.y =

            player.y +

            hand.x * sin +

            hand.y * cos;

        this.sprite.rotation = angle;

        this.sprite.setFlipY(

            pointer.worldX < player.x

        );

    }

}