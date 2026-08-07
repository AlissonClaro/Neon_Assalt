import AssetManifest
    from "../config/AssetManifest.js";

export default class AssetManager {

    // =====================================================
    // LOAD ALL
    // =====================================================

    static load(scene) {

        if (!scene) {

            console.error(
                "[AssetManager] Scene não informada."
            );

            return;

        }

        this.loadPlayer(scene);

        this.loadWeapons(scene);

        this.loadBullets(scene);

        this.loadEffects(scene);

        this.loadMaps(scene);

        this.loadUI(scene);

        this.loadAudio(scene);

        this.loadEnemies(scene);



    }

    // =====================================================
    // LASER BULLETS
    // =====================================================

    static loadLaserBullets(scene) {

        const laserBullets =
            AssetManifest.laserBullets ?? {};

        Object.entries(
            laserBullets
        ).forEach(
            ([key, path]) => {

                if (
                    !key ||
                    !path
                ) {

                    return;

                }

                scene.load.image(
                    key,
                    path
                );

            }
        );

    }

    // =====================================================
    // PLAYER
    // =====================================================

    static loadPlayer(scene) {

        const playerAssets =
            AssetManifest.player ?? {};

        Object.entries(
            playerAssets
        ).forEach(
            ([name, asset]) => {

                if (
                    !asset ||
                    typeof asset !== "object"
                ) {

                    console.warn(
                        `[AssetManager] Player asset inválido: ${name}`,
                        asset
                    );

                    return;

                }

                const {
                    key,
                    path,
                    frameWidth,
                    frameHeight
                } = asset;

                if (
                    !key ||
                    !path ||
                    !frameWidth ||
                    !frameHeight
                ) {

                    console.warn(
                        `[AssetManager] Player asset incompleto: ${name}`,
                        asset
                    );

                    return;

                }

                scene.load.spritesheet(

                    key,

                    path,

                    {

                        frameWidth,

                        frameHeight

                    }

                );

            }
        );

    }

    // =====================================================
    // WEAPONS
    // =====================================================

    static loadWeapons(scene) {

        const weapons =
            AssetManifest.weapons ?? {};

        Object.entries(
            weapons
        ).forEach(
            ([weaponType, weapon]) => {

                if (
                    !weapon ||
                    typeof weapon !== "object"
                ) {

                    console.warn(
                        `[AssetManager] Configuração inválida da arma: ${weaponType}`
                    );

                    return;

                }

                const folder =
                    weapon.folder;

                const models =
                    weapon.models;

                if (
                    !folder ||
                    !Array.isArray(models)
                ) {

                    console.warn(
                        `[AssetManager] Weapon config incompleta: ${weaponType}`,
                        weapon
                    );

                    return;

                }

                models.forEach(
                    model => {

                        const modelId =
                            String(model);

                        const textureKey =
                            `weapon_${weaponType}_${modelId}`;

                        const path =
                            `${folder}${modelId}.png`;

                        scene.load.image(

                            textureKey,

                            path

                        );

                    }
                );

            }
        );

    }

    // =====================================================
    // BULLETS
    // =====================================================

    static loadBullets(scene) {

        const bullets =
            AssetManifest.bullets ?? {};

        Object.entries(
            bullets
        ).forEach(
            ([key, path]) => {

                if (
                    !key ||
                    !path
                ) {

                    console.warn(
                        "[AssetManager] Bullet asset inválido:",
                        key,
                        path
                    );

                    return;

                }

                scene.load.image(

                    key,

                    path

                );

            }
        );

    }

    // =====================================================
    // EFFECTS
    // =====================================================

    static loadEffects(scene) {

        const effects =
            AssetManifest.effects ?? {};

        Object.entries(
            effects
        ).forEach(
            ([key, path]) => {

                if (
                    !key ||
                    !path
                ) {

                    console.warn(
                        "[AssetManager] Effect asset inválido:",
                        key,
                        path
                    );

                    return;

                }

                scene.load.image(

                    key,

                    path

                );

            }
        );

    }

    // =====================================================
    // MAPS
    // =====================================================

    static loadMaps(scene) {

        const maps =
            AssetManifest.maps ?? {};

        Object.entries(
            maps
        ).forEach(
            ([name, map]) => {

                if (
                    !map ||
                    typeof map !== "object"
                ) {

                    console.warn(
                        `[AssetManager] Map inválido: ${name}`
                    );

                    return;

                }

                // ==========================================
                // TILEMAP JSON
                // ==========================================

                if (
                    map.key &&
                    map.json
                ) {

                    scene.load.tilemapTiledJSON(

                        map.key,

                        map.json

                    );

                }

                // ==========================================
                // TILESET
                // ==========================================

                if (
                    map.tilesetKey &&
                    map.tileset
                ) {

                    scene.load.image(

                        map.tilesetKey,

                        map.tileset

                    );

                }

            }
        );

    }

    // =====================================================
    // UI
    // =====================================================

    static loadUI(scene) {

        const ui =
            AssetManifest.ui ?? {};

        Object.entries(
            ui
        ).forEach(
            ([key, asset]) => {

                if (!asset) {

                    return;

                }

                // ==========================================
                // STRING PATH
                // ==========================================

                if (
                    typeof asset === "string"
                ) {

                    scene.load.image(

                        key,

                        asset

                    );

                    return;

                }

                // ==========================================
                // OBJECT CONFIG
                // ==========================================

                if (
                    typeof asset === "object" &&
                    asset.path
                ) {

                    scene.load.image(

                        asset.key ?? key,

                        asset.path

                    );

                    return;

                }

                console.warn(
                    `[AssetManager] UI asset inválido: ${key}`,
                    asset
                );

            }
        );

    }

    // =====================================================
    // AUDIO
    // =====================================================

    static loadAudio(scene) {

        const audio =
            AssetManifest.audio ?? {};

        Object.entries(
            audio
        ).forEach(
            ([key, asset]) => {

                if (!asset) {

                    return;

                }

                // ==========================================
                // STRING
                // ==========================================

                if (
                    typeof asset === "string"
                ) {

                    scene.load.audio(

                        key,

                        asset

                    );

                    return;

                }

                // ==========================================
                // ARRAY
                // ==========================================

                if (
                    Array.isArray(asset)
                ) {

                    scene.load.audio(

                        key,

                        asset

                    );

                    return;

                }

                // ==========================================
                // OBJECT
                // ==========================================

                if (
                    typeof asset === "object" &&
                    asset.path
                ) {

                    scene.load.audio(

                        asset.key ?? key,

                        asset.path

                    );

                    return;

                }

                console.warn(
                    `[AssetManager] Audio asset inválido: ${key}`,
                    asset
                );

            }
        );

    }

    // =====================================================
    // ENEMIES
    // =====================================================

    static loadEnemies(scene) {

        const enemies =
            AssetManifest.enemies ?? {};

        Object.entries(
            enemies
        ).forEach(
            ([name, enemy]) => {

                if (
                    !enemy ||
                    typeof enemy !== "object"
                ) {

                    return;

                }

                const {
                    key,
                    path,
                    frameWidth,
                    frameHeight
                } = enemy;

                // ==========================================
                // SPRITESHEET
                // ==========================================

                if (
                    key &&
                    path &&
                    frameWidth &&
                    frameHeight
                ) {

                    scene.load.spritesheet(

                        key,

                        path,

                        {

                            frameWidth,

                            frameHeight

                        }

                    );

                    return;

                }

                // ==========================================
                // SIMPLE IMAGE
                // ==========================================

                if (
                    key &&
                    path
                ) {

                    scene.load.image(

                        key,

                        path

                    );

                    return;

                }

                console.warn(
                    `[AssetManager] Enemy asset inválido: ${name}`,
                    enemy
                );

            }
        );

    }

}