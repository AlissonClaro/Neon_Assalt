import AssetManifest from "../config/AssetManifest.js";

const PLAYER_PATH = "sprites/player/";

const AssetManifest = {

    // =====================================
    // PLAYER
    // =====================================

    player: {

        idle: {
            key: "player_idle",
            path: PLAYER_PATH + "Walking/Walking.png",
            frameWidth: 128,
            frameHeight: 128
        },

        walk: {
            key: "player_walk",
            path: PLAYER_PATH + "Walking/Walking.png",
            frameWidth: 128,
            frameHeight: 128
        },

        run: {
            key: "player_run",
            path: PLAYER_PATH + "Running/Running.png",
            frameWidth: 128,
            frameHeight: 128
        },

        jump: {
            key: "player_jump",
            path: PLAYER_PATH + "Jumping/Jumping.png",
            frameWidth: 128,
            frameHeight: 128
        },

        fall: {
            key: "player_fall",
            path: PLAYER_PATH + "Falling/Falling.png",
            frameWidth: 128,
            frameHeight: 128
        },

        land: {
            key: "player_land",
            path: PLAYER_PATH + "Landing/Landing.png",
            frameWidth: 128,
            frameHeight: 128
        },

        roll: {
            key: "player_roll",
            path: PLAYER_PATH + "Roll/Roll.png",
            frameWidth: 128,
            frameHeight: 128
        }

    },

    // =====================================
    // WEAPONS
    // =====================================

    weapons: {

        pistol: {

            folder: "sprites/weapons/pistol/",

            models: [
                "1","2","4","6","11","16","21",
                "25","26","31","36","41","46"
            ]

        },

        smg: {

            folder: "sprites/weapons/smg/",

            models: []

        },

        shotgun: {

            folder: "sprites/weapons/shotgun/",

            models: []

        },

        rifle: {

            folder: "sprites/weapons/rifle/",

            models: []

        },

        sniper: {

            folder: "sprites/weapons/sniper/",

            models: []

        },

        laser: {

            folder: "sprites/weapons/laser/",

            models: [
                "12"
            ]

        },

        plasma: {

            folder: "sprites/weapons/plasma/",

            models: [
                "3",
                "7",
                "16"
            ]

        },

        rocket: {

            folder: "sprites/weapons/rocket/",

            models: []

        },

        minigun: {

            folder: "sprites/weapons/minigun/",

            models: [
                "15",
                "22",
                "23",
                "24",
                "30"
            ]

        },

        weapon1: {

            folder: "sprites/weapons/Weapon_1/",

            models: []

        },

        weapon2: {

            folder: "sprites/weapons/Weapon_2/",

            models: []

        },

        weapon3: {

            folder: "sprites/weapons/Weapon_3/",

            models: []

        }

    },

    // =====================================
    // BULLETS
    // =====================================

    bullets: {

        bullet_1: "sprites/bullets/1.png",
        bullet_2: "sprites/bullets/2.png",
        bullet_3: "sprites/bullets/3.png",
        bullet_4_1: "sprites/bullets/4_1.png",
        bullet_4_2: "sprites/bullets/4_2.png",
        bullet_5_1: "sprites/bullets/5_1.png",
        bullet_5_2: "sprites/bullets/5_2.png",
        bullet_6: "sprites/bullets/6.png",
        bullet_7_1: "sprites/bullets/7_1.png",
        bullet_7_2: "sprites/bullets/7_2.png",
        bullet_8: "sprites/bullets/8.png",
        bullet_9: "sprites/bullets/9.png",
        bullet_10: "sprites/bullets/10.png"

    },

    // =====================================
    // SHOOT EFFECTS
    // =====================================

    effects: {

        effect_1_1: "sprites/shoot_effects/1_1.png",
        effect_1_2: "sprites/shoot_effects/1_2.png",

        effect_2_1: "sprites/shoot_effects/2_1.png",
        effect_2_2: "sprites/shoot_effects/2_2.png",

        effect_3_1: "sprites/shoot_effects/3_1.png",
        effect_3_2: "sprites/shoot_effects/3_2.png",

        effect_4_1: "sprites/shoot_effects/4_1.png",
        effect_4_2: "sprites/shoot_effects/4_2.png",

        effect_5_1: "sprites/shoot_effects/5_1.png",
        effect_5_2: "sprites/shoot_effects/5_2.png"

    },

    // =====================================
    // MAPS
    // =====================================

    maps: {

        level1: {

            key: "level1",

            json: "maps/level1/level1.tmj",

            tilesetKey: "neon_tiles",

            tileset: "maps/level1/neon_tiles.png"

        }

    },

    // =====================================
    // UI
    // =====================================

    ui: {

        crosshair: "assets/sprites/ui/crosshair.png"

    },

    // =====================================
    // AUDIO
    // =====================================

    audio: {

    },

    // =====================================
    // ENEMIES
    // =====================================

    enemies: {

    }

};

export default AssetManifest;