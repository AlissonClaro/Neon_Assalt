export default class MuzzleFlash {

    constructor(scene) {

        this.scene =
            scene;

    }

    play(
        x,
        y,
        angle = 0
    ) {

        const flash =
            this.scene.add.rectangle(

                x,
                y,

                16,
                5,

                0xffffff,

                1

            );

        flash.setRotation(
            angle
        );

        flash.setDepth(
            25
        );

        this.scene.tweens.add({

            targets:
                flash,

            alpha: 0,

            scaleX: 2,

            duration: 60,

            onComplete: () => {

                flash.destroy();

            }

        });

    }

}