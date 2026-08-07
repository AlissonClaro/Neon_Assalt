export default class ExplosionEffect {

    constructor(scene) {

        this.scene =
            scene;

    }

    play(
        x,
        y,
        radius = 80
    ) {

        const circle =
            this.scene.add.circle(

                x,
                y,

                radius * 0.2,

                0xffffff,

                0.9

            );

        circle.setDepth(
            30
        );

        this.scene.tweens.add({

            targets:
                circle,

            radius:
                radius,

            alpha: 0,

            duration: 220,

            ease:
                "Quad.Out",

            onComplete: () => {

                circle.destroy();

            }

        });

    }

}