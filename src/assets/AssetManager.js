import AssetManifest
    from "../config/AssetManifest.js";

import WeaponCatalog
    from "../config/WeaponCatalog.js";

export default class AssetManager {

    static load(scene) {

        if (!scene) {

            throw new Error(
                "AssetManager.load: Scene inválida."
            );

        }

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

        const assets =
            AssetManifest.player ?? {};

        Object.values(
            assets
        ).forEach(asset => {

            if (
                !asset.key ||
                !asset.path ||
                !asset.frameWidth ||
                !asset.frameHeight
            ) {

                console.warn(
                    "[AssetManager] Player asset inválido:",
                    asset
                );

                return;

            }

            scene.load.spritesheet(

                asset.key,
                asset.path,

                {
                    frameWidth:
                        asset.frameWidth,

                    frameHeight:
                        asset.frameHeight
                }

            );

        });

    }

    // =====================================
    // WEAPONS
    // =====================================

    static loadWeapons(scene) {

        const weapons =
            AssetManifest.weapons ?? {};

        Object.entries(
            weapons
        ).forEach(
            ([
                weaponType,
                weapon
            ]) => {

                const models =
                    WeaponCatalog[
                        weaponType
                    ] ?? [];

                if (!weapon.folder) {

                    console.warn(
                        `[AssetManager] Pasta não definida para ${weaponType}.`
                    );

                    return;

                }

                models.forEach(
                    model => {

                        const key =
                            `weapon_${weaponType}_${model}`;

                        const path =
                            `${weapon.folder}${model}.png`;

                        scene.load.image(
                            key,
                            path
                        );

                    }
                );

            }
        );

    }

    // =====================================
    // BULLETS
    // =====================================

    static loadBullets(scene) {

        const bullets =
            AssetManifest.bullets ?? {};

        Object.entries(
            bullets
        ).forEach(
            ([key, path]) => {

                if (!path) {
                    return;
                }

                scene.load.image(
                    key,
                    path
                );

            }
        );

    }

    // =====================================
    // EFFECTS
    // =====================================

    static loadEffects(scene) {

        const effects =
            AssetManifest.effects ?? {};

        Object.entries(
            effects
        ).forEach(
            ([key, asset]) => {

                if (!asset) {
                    return;
                }

                if (
                    typeof asset ===
                    "string"
                ) {

                    scene.load.image(
                        key,
                        asset
                    );

                    return;

                }

                if (!asset.path) {
                    return;
                }

                if (
                    asset.frameWidth &&
                    asset.frameHeight
                ) {

                    scene.load.spritesheet(

                        key,
                        asset.path,

                        {
                            frameWidth:
                                asset.frameWidth,

                            frameHeight:
                                asset.frameHeight
                        }

                    );

                    return;

                }

                scene.load.image(
                    key,
                    asset.path
                );

            }
        );

    }

    // =====================================
    // MAPS
    // =====================================

    static loadMaps(scene) {

        const maps =
            AssetManifest.maps ?? {};

        Object.values(
            maps
        ).forEach(map => {

            if (
                !map.key ||
                !map.json
            ) {

                return;

            }

            scene.load.tilemapTiledJSON(
                map.key,
                map.json
            );

            if (
                map.tilesetKey &&
                map.tileset
            ) {

                scene.load.image(
                    map.tilesetKey,
                    map.tileset
                );

            }

        });

    }

    // =====================================
    // AUDIO
    // =====================================

    static loadAudio(scene) {

        const audio =
            AssetManifest.audio ?? {};

        Object.entries(
            audio
        ).forEach(
            ([key, path]) => {

                if (!path) {
                    return;
                }

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

        const enemies =
            AssetManifest.enemies ?? {};

        Object.values(
            enemies
        ).forEach(enemy => {

            if (
                !enemy.key ||
                !enemy.path
            ) {

                return;

            }

            if (
                enemy.frameWidth &&
                enemy.frameHeight
            ) {

                scene.load.spritesheet(

                    enemy.key,
                    enemy.path,

                    {
                        frameWidth:
                            enemy.frameWidth,

                        frameHeight:
                            enemy.frameHeight
                    }

                );

                return;

            }

            scene.load.image(
                enemy.key,
                enemy.path
            );

        });

    }

    // =====================================
    // UI
    // =====================================

    static loadUI(scene) {

        const ui =
            AssetManifest.ui ?? {};

        Object.entries(
            ui
        ).forEach(
            ([key, path]) => {

                if (!path) {
                    return;
                }

                scene.load.image(
                    key,
                    path
                );

            }
        );

    }

}