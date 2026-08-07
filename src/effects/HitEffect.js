export default class HitEffect {

    constructor(scene) {

        this.scene =
            scene;

    }

    play(
        x,
        y
    ) {

        const effect =
            this.scene.add.circle(

                x,
                y,

                4,

                0xffffff

            );

        effect.setDepth(
            30
        );

        this.scene.tweens.add({

            targets:
                effect,

            scale: 3,

            alpha: 0,

            duration: 120,

            onComplete: () => {

                effect.destroy();

            }

        });

    }

}