export default class HitboxSystem {

    static createRectangle(
        scene,
        x,
        y,
        width,
        height
    ) {

        const zone =
            scene.add.zone(

                x,
                y,
                width,
                height

            );

        scene.physics.add.existing(
            zone
        );

        zone.body.allowGravity =
            false;

        zone.body.setImmovable(
            true
        );

        return zone;

    }

    static setEnabled(
        hitbox,
        enabled
    ) {

        if (
            !hitbox?.body
        ) {

            return;

        }

        hitbox.body.enable =
            enabled;

        hitbox.setActive(
            enabled
        );

    }

    static destroy(
        hitbox
    ) {

        if (hitbox) {

            hitbox.destroy();

        }

    }

}