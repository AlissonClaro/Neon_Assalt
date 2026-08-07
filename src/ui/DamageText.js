export default class DamageText {

    static show(
        scene,
        x,
        y,
        damage,
        {
            critical = false
        } = {}
    ) {

        const text =
            scene.add.text(

                x,
                y,

                String(
                    Math.round(
                        damage
                    )
                ),

                {
                    fontFamily:
                        "Arial",

                    fontSize:
                        critical
                            ? "24px"
                            : "18px",

                    color:
                        "#ffffff",

                    stroke:
                        "#000000",

                    strokeThickness:
                        4

                }

            );

        text
            .setOrigin(
                0.5
            )
            .setDepth(
                200
            );

        scene.tweens.add({

            targets:
                text,

            y:
                y - 45,

            alpha: 0,

            duration:
                650,

            ease:
                "Quad.Out",

            onComplete:
                () => {

                    text.destroy();

                }

        });

        return text;

    }

}