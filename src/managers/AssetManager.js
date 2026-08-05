import AssetManifest from "../config/AssetManifest.js";

export default class AssetManager {

    static load(scene) {

        this.loadPlayer(scene);
        this.loadWeapons(scene);

    }

    static loadPlayer(scene) {

        Object.values(AssetManifest.player).forEach(asset => {

            scene.load.spritesheet(

                asset.key,

                asset.path,

                {

                    frameWidth: asset.frameWidth,

                    frameHeight: asset.frameHeight

                }

            );

        });

    }

    static loadWeapons(scene) {

        Object.values(AssetManifest.weapons).forEach(asset => {

            scene.load.image(

                asset.key,

                asset.folder + "idle.png"

            );

        });

    }

}