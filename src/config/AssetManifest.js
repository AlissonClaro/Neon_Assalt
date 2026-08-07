const PLAYER_PATH = "sprites/player/";
const WEAPON_PATH = "sprites/weapons/";

const AssetManifest = {

    // =====================================================
    // PLAYER
    // =====================================================

    player: {

        walk: {

            key: "player_walk",

            path:
                PLAYER_PATH +
                "Walking/Walking.png",

            frameWidth: 128,
            frameHeight: 128

        },

        run: {

            key: "player_run",

            path:
                PLAYER_PATH +
                "Running/Running.png",

            frameWidth: 128,
            frameHeight: 128

        },

        jump: {

            key: "player_jump",

            path:
                PLAYER_PATH +
                "Jumping/Jumping.png",

            frameWidth: 128,
            frameHeight: 128

        },

        fall: {

            key: "player_fall",

            path:
                PLAYER_PATH +
                "Falling/Falling.png",

            frameWidth: 128,
            frameHeight: 128

        },

        land: {

            key: "player_land",

            path:
                PLAYER_PATH +
                "Landing/Landing.png",

            frameWidth: 128,
            frameHeight: 128

        },

        roll: {

            key: "player_roll",

            path:
                PLAYER_PATH +
                "Roll/Roll.png",

            frameWidth: 128,
            frameHeight: 128

        }

    },

    // =====================================================
    // WEAPONS
    // =====================================================

    weapons: {

        pistol: {
            folder: WEAPON_PATH + "pistol/"
        },

        smg: {
            folder: WEAPON_PATH + "smg/"
        },

        shotgun: {
            folder: WEAPON_PATH + "shotgun/"
        },

        rifle: {
            folder: WEAPON_PATH + "rifle/"
        },

        sniper: {
            folder: WEAPON_PATH + "sniper/"
        },

        laser: {
            folder: WEAPON_PATH + "laser/"
        },

        plasma: {
            folder: WEAPON_PATH + "plasma/"
        },

        rocket: {
            folder: WEAPON_PATH + "rocket/"
        },

        minigun: {
            folder: WEAPON_PATH + "minigun/"
        },

        weapon1: {
            folder: WEAPON_PATH + "Weapon_1/"
        },

        weapon2: {
            folder: WEAPON_PATH + "Weapon_2/"
        },

        weapon3: {
            folder: WEAPON_PATH + "Weapon_3/"
        }

    },

    // =====================================================
    // BULLETS
    // =====================================================

    /*
        No projeto atual encontrei:

        public/sprites/bullets/bullet.png

        e também a pasta:
        public/sprites/bullets/Laser Sprites/

        Portanto não vamos tentar carregar bullet_1.png,
        bullet_2.png etc. porque esses arquivos não existem
        nesse caminho atualmente.
    */

    bullets: {

        bullet_default: "sprites/bullets/bullet.png"

    },

    // =====================================================
    // EFFECTS
    // =====================================================

    /*
        Vamos preencher quando organizarmos os efeitos
        de disparo definitivamente.
    */

    effects: {

    },

    // =====================================================
    // MAPS
    // =====================================================

    /*
        O ZIP atualmente possui level1.tmj e neon_titles.png,
        porém ambos estão vazios.

        Por isso não vamos carregá-los ainda.
        Quando criarmos o primeiro mapa real,
        cadastraremos aqui.
    */

    maps: {

    },

    // =====================================================
    // UI
    // =====================================================

    ui: {

        crosshair: "assets/sprites/ui/crosshair.png"

    },

    // =====================================================
    // AUDIO
    // =====================================================

    audio: {

    },

    // =====================================================
    // ENEMIES
    // =====================================================

    enemies: {

    }

};

export default AssetManifest;