import AnimationConfig from "../config/AnimationConfig.js";

export default class AnimationFactory {

    static create(scene) {

        Object.values(AnimationConfig).forEach(anim => {

            scene.anims.create({

                key: anim.key,

                frames: scene.anims.generateFrameNumbers(

                    anim.texture,

                    {

                        start: anim.start,

                        end: anim.end

                    }

                ),

                frameRate: anim.fps,

                repeat: anim.repeat

            });

        });

    }

}