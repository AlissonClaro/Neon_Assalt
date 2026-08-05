import AssetManifest from "../config/AssetManifest.js";
import FrameManifest from "../config/FrameManifest.js";

export default class AnimationFactory {

    static create(scene) {

        Object.entries(FrameManifest.player).forEach(

            ([name, anim]) => {

                const asset = AssetManifest.player[name];

                if (!asset)
                    return;

                scene.anims.create({

                    key: asset.key,

                    frames: scene.anims.generateFrameNumbers(

                        asset.key,

                        {

                            start: anim.start,

                            end: anim.end

                        }

                    ),

                    frameRate: anim.fps,

                    repeat: anim.repeat

                });

            }

        );

    }

}