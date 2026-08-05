import AssetManifest from "../config/AssetManifest.js";

export default class AssetManager {

    static load(scene) {

        this.loadPlayer(scene);
        this.loadWeapons(scene);
        this.loadBullets(scene);
        this.loadEffects(scene);

        // Próximas Sprints
        this.loadMaps(scene);
        this.loadAudio(scene);
        this.loadEnemies(scene);
        this.loadUI(scene);

    }

    // ==========================================
    // PLAYER
    // ==========================================

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

    // ==========================================
    // WEAPONS
    // ==========================================

    static loadWeapons(scene) {

        Object.values(AssetManifest.weapons).forEach(asset => {

            scene.load.image(
                asset.key,
                asset.idle
            );

            scene.load.image(
                `${asset.key}_fire`,
                asset.fire
            );

        });

    }

    // ==========================================
    // BULLETS
    // ==========================================

    static loadBullets(scene) {

        const bullets = [

            "1",
            "2",
            "3",
            "4_1",
            "4_2",
            "5_1",
            "5_2",
            "6",
            "7_1",
            "7_2",
            "8",
            "9",
            "10"

        ];

        bullets.forEach(name => {

            scene.load.image(
                `bullet_${name}`,
                `sprites/bullets/${name}.png`
            );

        });

    }

    // ==========================================
    // SHOOT EFFECTS
    // ==========================================

    static loadEffects(scene) {

        for (let i = 1; i <= 5; i++) {

            for (let j = 1; j <= 2; j++) {

                scene.load.spritesheet(

                    `effect_${i}_${j}`,

                    `sprites/shoot_effects/${i}_${j}.png`,

                    {
                        frameWidth: 48,
                        frameHeight: 48
                    }

                );

            }

        }

    }

    // ==========================================
    // MAPS
    // ==========================================

    static loadMaps(scene) {

        scene.load.tilemapTiledJSON(
            "level1",
            "maps/level1/level1.tmj"
        );

        scene.load.image(
            "neon_tiles",
            "maps/level1/neon_tiles.png"
        );

    }

    // ==========================================
    // AUDIO
    // ==========================================

    static loadAudio(scene) {

        // Exemplo:
        // scene.load.audio("pistol_shot","audio/weapons/pistol.wav");
        // scene.load.audio("jump","audio/player/jump.wav");

    }

    // ==========================================
    // ENEMIES
    // ==========================================

    static loadEnemies(scene) {

        // Próxima Sprint

    }

    // ==========================================
    // UI
    // ==========================================

    static loadUI(scene) {

        // HUD
        // Crosshair
        // Barra de vida
        // Inventário

    }

}