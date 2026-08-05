export default class AnimationFactory {

    static create(scene) {

        const animations = [

            "idle",
            "walk",
            "run",
            "jump",
            "sit"

        ];

        animations.forEach(name => {

            scene.anims.create({

                key: `body_${name}`,

                frames: scene.anims.generateFrameNumbers(

                    `body_${name}`,

                    {

                        start: 0,

                        end: 5

                    }

                ),

                frameRate: 10,

                repeat: -1

            });

        });

    }

}