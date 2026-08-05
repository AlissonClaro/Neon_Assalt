const PLAYER_PATH = "sprites/player/";
const WEAPON_PATH = "sprites/weapons/";

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

        doubleJump: {
            key: "player_double_jump",
            path: PLAYER_PATH + "Double_Jump/Double_Jump.png",
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
        },

        slide: {
            key: "player_slide",
            path: PLAYER_PATH + "Slide_Attack/Slide_Attack.png",
            frameWidth: 128,
            frameHeight: 128
        },

        wallJump: {
            key: "player_wall_jump",
            path: PLAYER_PATH + "Wall_Jump/Wall_Jump.png",
            frameWidth: 128,
            frameHeight: 128
        },

        hurt: {
            key: "player_hurt",
            path: PLAYER_PATH + "Hurt/Hurt.png",
            frameWidth: 128,
            frameHeight: 128
        }

    },

    // =====================================
    // WEAPONS
    // =====================================

    weapons: {

        pistol: {
            key: "weapon_pistol",
            idle: WEAPON_PATH + "pistol/idle.png",
            fire: WEAPON_PATH + "pistol/fire.png",
            bullet: "bullet_1",
            effect: "effect_1_1"
        },

        smg: {
            key: "weapon_smg",
            idle: WEAPON_PATH + "smg/idle.png",
            fire: WEAPON_PATH + "smg/fire.png",
            bullet: "bullet_2",
            effect: "effect_2_1"
        },

        shotgun: {
            key: "weapon_shotgun",
            idle: WEAPON_PATH + "shotgun/idle.png",
            fire: WEAPON_PATH + "shotgun/fire.png",
            bullet: "bullet_3",
            effect: "effect_3_1"
        },

        rifle: {
            key: "weapon_rifle",
            idle: WEAPON_PATH + "rifle/idle.png",
            fire: WEAPON_PATH + "rifle/fire.png",
            bullet: "bullet_4_1",
            effect: "effect_2_2"
        },

        sniper: {
            key: "weapon_sniper",
            idle: WEAPON_PATH + "sniper/idle.png",
            fire: WEAPON_PATH + "sniper/fire.png",
            bullet: "bullet_5_1",
            effect: "effect_4_1"
        },

        laser: {
            key: "weapon_laser",
            idle: WEAPON_PATH + "laser/idle.png",
            fire: WEAPON_PATH + "laser/fire.png",
            bullet: "bullet_6",
            effect: "effect_5_1"
        },

        plasma: {
            key: "weapon_plasma",
            idle: WEAPON_PATH + "plasma/idle.png",
            fire: WEAPON_PATH + "plasma/fire.png",
            bullet: "bullet_7_1",
            effect: "effect_5_2"
        },

        rocket: {
            key: "weapon_rocket",
            idle: WEAPON_PATH + "rocket/idle.png",
            fire: WEAPON_PATH + "rocket/fire.png",
            bullet: "bullet_8",
            effect: "effect_4_2"
        },

        minigun: {
            key: "weapon_minigun",
            idle: WEAPON_PATH + "minigun/idle.png",
            fire: WEAPON_PATH + "minigun/fire.png",
            bullet: "bullet_9",
            effect: "effect_3_2"
        },

        weapon1: {
            key: "weapon_1",
            idle: WEAPON_PATH + "Weapon_1/idle.png",
            fire: WEAPON_PATH + "Weapon_1/fire.png",
            bullet: "bullet_10",
            effect: "effect_1_2"
        },

        weapon2: {
            key: "weapon_2",
            idle: WEAPON_PATH + "Weapon_2/idle.png",
            fire: WEAPON_PATH + "Weapon_2/fire.png",
            bullet: "bullet_10",
            effect: "effect_2_2"
        },

        weapon3: {
            key: "weapon_3",
            idle: WEAPON_PATH + "Weapon_3/idle.png",
            fire: WEAPON_PATH + "Weapon_3/fire.png",
            bullet: "bullet_10",
            effect: "effect_3_2"
        }

    }

};

export default AssetManifest;