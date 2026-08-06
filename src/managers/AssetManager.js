import AssetManifest from "../config/AssetManifest.js";

import WeaponCatalog from "../config/WeaponCatalog.js";

Object.entries(AssetManifest.weapons).forEach(([type, weapon]) => {

    WeaponCatalog[type].forEach(model => {

        scene.load.image(

            `weapon_${type}_${model}`,

            `${weapon.folder}${model}.png`

        );

    });

});

export default class AssetManager {

    static load(scene) {

        this.loadPlayer(scene);
        this.loadWeapons(scene);
        this.loadBullets(scene);
        this.loadEffects(scene);
        this.loadMaps(scene);
        this.loadAudio(scene);
        this.loadEnemies(scene);
        this.loadUI(scene);

    }

    // =====================================
    // PLAYER
    // =====================================

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

    // =====================================
    // WEAPONS
    // =====================================

    static loadWeapons(scene) {

        Object.entries(AssetManifest.weapons).forEach(

            ([weaponType, weapon]) => {

                weapon.models.forEach(model => {

                    scene.load.image(

                        `weapon_${weaponType}_${model}`,

                        `${weapon.folder}${model}.png`

                    );

                });

            }

        );

    }

    // =====================================
    // BULLETS
    // =====================================

    static loadBullets(scene) {

        Object.entries(AssetManifest.bullets).forEach(

            ([key, path]) => {

                scene.load.image(

                    key,

                    path

                );

            }

        );

    }

    // =====================================
    // SHOOT EFFECTS
    // =====================================

    static loadEffects(scene) {

        Object.entries(AssetManifest.effects).forEach(

            ([key, path]) => {

                scene.load.spritesheet(

                    key,

                    path,

                    {

                        frameWidth: 48,

                        frameHeight: 48

                    }

                );

            }

        );

    }

    // =====================================
    // MAPS
    // =====================================

    static loadMaps(scene) {

        Object.values(AssetManifest.maps).forEach(map => {

            scene.load.tilemapTiledJSON(

                map.key,

                map.json

            );

            scene.load.image(

                map.tilesetKey,

                map.tileset

            );

        });

    }

    // =====================================
    // AUDIO
    // =====================================

    static loadAudio(scene) {

        Object.entries(AssetManifest.audio).forEach(

            ([key, path]) => {

                scene.load.audio(

                    key,

                    path

                );

            }

        );

    }

    // =====================================
    // ENEMIES
    // =====================================

    static loadEnemies(scene) {

        Object.values(AssetManifest.enemies).forEach(enemy => {

            scene.load.spritesheet(

                enemy.key,

                enemy.path,

                {

                    frameWidth: enemy.frameWidth,

                    frameHeight: enemy.frameHeight

                }

            );

        });

    }

    // =====================================
    // UI
    // =====================================

    static loadUI(scene) {

        Object.entries(AssetManifest.ui).forEach(

            ([key, path]) => {

                scene.load.image(

                    key,

                    path

                );

            }

        );

    }

    

}