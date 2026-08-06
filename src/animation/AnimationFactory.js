import AnimationDatabase from "./AnimationDatabase.js";

export default class AnimationFactory {

    static create(scene) {

        Object.values(AnimationDatabase).forEach(animation => {

            if (scene.anims.exists(animation.key)) {
                return;
            }

            scene.anims.create({

                key: animation.key,

                frames: scene.anims.generateFrameNumbers(

                    animation.sprite,

                    {

                        start: animation.start,
                        end: animation.end

                    }

                ),

                frameRate: animation.frameRate,

                repeat: animation.repeat

            });

        });

    }

}