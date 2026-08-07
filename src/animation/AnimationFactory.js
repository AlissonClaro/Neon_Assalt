import AnimationDatabase
    from "./AnimationDatabase.js";

export default class AnimationFactory {

    static create(scene) {

        if (
            !scene ||
            !scene.anims
        ) {

            console.error(
                "[AnimationFactory] Scene inválida."
            );

            return;

        }

        Object.values(
            AnimationDatabase
        ).forEach(animation => {

            this.createAnimation(
                scene,
                animation
            );

        });

    }

    static createAnimation(
        scene,
        animation
    ) {

        if (
            !animation ||
            !animation.key ||
            !animation.texture
        ) {

            console.warn(
                "[AnimationFactory] Configuração inválida:",
                animation
            );

            return;

        }

        // ==========================================
        // ALREADY EXISTS
        // ==========================================

        if (
            scene.anims.exists(
                animation.key
            )
        ) {

            return;

        }

        // ==========================================
        // TEXTURE
        // ==========================================

        if (
            !scene.textures.exists(
                animation.texture
            )
        ) {

            console.warn(
                `[AnimationFactory] Textura inexistente: ${animation.texture}`
            );

            return;

        }

        // ==========================================
        // CREATE
        // ==========================================

        scene.anims.create({

            key:
                animation.key,

            frames:
                scene.anims.generateFrameNumbers(

                    animation.texture,

                    {

                        start:
                            animation.start,

                        end:
                            animation.end

                    }

                ),

            frameRate:
                animation.frameRate,

            repeat:
                animation.repeat

        });

    }

}