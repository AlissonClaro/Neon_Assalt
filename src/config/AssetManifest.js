const PLAYER_PATH =
    "sprites/player/";

const AssetManifest = {

    // =====================================================
    // PLAYER
    // =====================================================

    player: {

        aiming2: {

            key:
                "player_aiming2",

            path:
                PLAYER_PATH +
                "Aiming/Aiming2.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        walk: {

            key:
                "player_walk",

            path:
                PLAYER_PATH +
                "Walking/Walking.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        run: {

            key:
                "player_run",

            path:
                PLAYER_PATH +
                "Running/Running.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        jump: {

            key:
                "player_jump",

            path:
                PLAYER_PATH +
                "Jumping/Jumping.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        fall: {

            key:
                "player_fall",

            path:
                PLAYER_PATH +
                "Falling/Falling.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        land: {

            key:
                "player_land",

            path:
                PLAYER_PATH +
                "Landing/Landing.png",

            frameWidth:
                128,

            frameHeight:
                128

        },

        roll: {

            key:
                "player_roll",

            path:
                PLAYER_PATH +
                "Roll/Roll.png",

            frameWidth:
                128,

            frameHeight:
                128

        }

    },

    // =====================================================
    // WEAPONS
    // =====================================================

    weapons: {

        pistol: {

            folder:
                "sprites/weapons/pistol/",

            models: [

                "1",
                "2",
                "4",
                "6",
                "11",
                "16",
                "21",
                "25",
                "26",
                "31",
                "36",
                "41",
                "46"

            ]

        },

        smg: {

            folder:
                "sprites/weapons/smg/",

            models: []

        },

        shotgun: {

            folder:
                "sprites/weapons/shotgun/",

            models: []

        },

        rifle: {

            folder:
                "sprites/weapons/rifle/",

            models: []

        },

        sniper: {

            folder:
                "sprites/weapons/sniper/",

            models: []

        },

        laser: {

            folder:
                "sprites/weapons/laser/",

            models: [

                "12"

            ]

        },

        plasma: {

            folder:
                "sprites/weapons/plasma/",

            models: [

                "3",
                "7",
                "16"

            ]

        },

        rocket: {

            folder:
                "sprites/weapons/rocket/",

            models: []

        },

        minigun: {

            folder:
                "sprites/weapons/minigun/",

            models: [

                "15",
                "22",
                "23",
                "24",
                "30"

            ]

        },

        weapon1: {

            folder:
                "sprites/weapons/Weapon_1/",

            models: []

        },

        weapon2: {

            folder:
                "sprites/weapons/Weapon_2/",

            models: []

        },

        weapon3: {

            folder:
                "sprites/weapons/Weapon_3/",

            models: []

        }

    },

    // =====================================================
    // BULLETS
    // =====================================================
    //
    // No projeto atual existe:
    //
    // public/sprites/bullets/bullet.png
    //
    // Portanto todas as armas comuns usam
    // essa textura por enquanto.
    // =====================================================

    bullets: {

        bullet_default:
            "sprites/bullets/bullet.png"

    },

    // =====================================================
    // LASER PROJECTILES
    // =====================================================

    laserBullets: {

        laser_01:
            "sprites/bullets/Laser Sprites/01.png",

        laser_02:
            "sprites/bullets/Laser Sprites/02.png",

        laser_03:
            "sprites/bullets/Laser Sprites/03.png",

        laser_04:
            "sprites/bullets/Laser Sprites/04.png",

        laser_05:
            "sprites/bullets/Laser Sprites/05.png",

        laser_06:
            "sprites/bullets/Laser Sprites/06.png",

        laser_07:
            "sprites/bullets/Laser Sprites/07.png",

        laser_08:
            "sprites/bullets/Laser Sprites/08.png",

        laser_09:
            "sprites/bullets/Laser Sprites/09.png",

        laser_10:
            "sprites/bullets/Laser Sprites/10.png"

    },

    // =====================================================
    // EFFECTS
    // =====================================================
    //
    // Os antigos:
    //
    // sprites/shoot_effects/1_1.png
    // sprites/shoot_effects/1_2.png
    //
    // NÃO existem no projeto atual.
    //
    // Deixamos vazio por enquanto.
    // =====================================================

    effects: {},

    // =====================================================
    // MAPS
    // =====================================================
    //
    // DESABILITADO TEMPORARIAMENTE.
    //
    // level1.tmj atualmente está vazio
    // e causa:
    //
    // Unexpected end of JSON input
    //
    // =====================================================

    maps: {},

    // =====================================================
    // UI
    // =====================================================

    ui: {

        crosshair: {

            key:
                "crosshair",

            path:
                "assets/sprites/ui/Old/Crosshair1.png"

        }

    },

    // =====================================================
    // AUDIO
    // =====================================================

    audio: {},

    // =====================================================
    // ENEMIES
    // =====================================================

    enemies: {}

};

export default AssetManifest;