import AnimationDatabase
    from "./AnimationDatabase.js";

export default class AnimationFactory {

    static create(scene) {

        if (!scene?.anims) {

            throw new Error(
                "AnimationFactory.create: Scene inválida."
            );

        }

        Object.values(
            AnimationDatabase
        ).forEach(animation => {

            if (
                scene.anims.exists(
                    animation.key
                )
            ) {

                return;

            }

            if (
                !scene.textures.exists(
                    animation.texture
                )
            ) {

                console.warn(
                    `[AnimationFactory] Textura ausente: ${animation.texture}`
                );

                return;

            }

            const frames =
                scene.anims
                    .generateFrameNumbers(

                        animation.texture,

                        {
                            start:
                                animation.start,

                            end:
                                animation.end
                        }

                    );

            scene.anims.create({

                key:
                    animation.key,

                frames,

                frameRate:
                    animation.frameRate,

                repeat:
                    animation.repeat

            });

        });

    }

}