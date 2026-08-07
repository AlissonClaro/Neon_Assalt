const WeaponDatabase = {

    pistol: {

        id: "pistol",
        name: "Neo Pistol",

        category: "firearm",

        damage: 18,

        fireRate: 250,

        bulletSpeed: 900,

        magazine: 15,

        reserveAmmo: 120,

        reloadTime: 1200,

        automatic: false,

        pellets: 1,

        spread: 0,

        recoil: 2,

        bullet: "bullet_default"

    },

    smg: {

        id: "smg",
        name: "Viper SMG",

        category: "firearm",

        damage: 10,

        fireRate: 80,

        bulletSpeed: 950,

        magazine: 40,

        reserveAmmo: 240,

        reloadTime: 1800,

        automatic: true,

        pellets: 1,

        spread: 4,

        recoil: 1,

        bullet: "bullet_default"

    },

    shotgun: {

        id: "shotgun",
        name: "Shock Shotgun",

        category: "firearm",

        damage: 14,

        fireRate: 650,

        bulletSpeed: 800,

        magazine: 8,

        reserveAmmo: 64,

        reloadTime: 2200,

        automatic: false,

        pellets: 8,

        spread: 14,

        recoil: 8,

        bullet: "bullet_default"

    },

    rifle: {

        id: "rifle",
        name: "Thunder Rifle",

        category: "firearm",

        damage: 25,

        fireRate: 130,

        bulletSpeed: 1100,

        magazine: 30,

        reserveAmmo: 180,

        reloadTime: 1800,

        automatic: true,

        pellets: 1,

        spread: 2,

        recoil: 2,

        bullet: "bullet_default"

    },

    sniper: {

        id: "sniper",
        name: "Rail Sniper",

        category: "firearm",

        damage: 100,

        fireRate: 1000,

        bulletSpeed: 1700,

        magazine: 5,

        reserveAmmo: 40,

        reloadTime: 2600,

        automatic: false,

        pellets: 1,

        spread: 0,

        recoil: 10,

        bullet: "bullet_default"

    },

    laser: {

        id: "laser",
        name: "Neon Laser",

        category: "energy",

        damage: 16,

        fireRate: 90,

        bulletSpeed: 1400,

        magazine: 60,

        reserveAmmo: 300,

        reloadTime: 2000,

        automatic: true,

        pellets: 1,

        spread: 0,

        recoil: 0.5,

        bullet: "bullet_default"

    },

    plasma: {

        id: "plasma",
        name: "Plasma Cannon",

        category: "energy",

        damage: 42,

        fireRate: 450,

        bulletSpeed: 750,

        magazine: 12,

        reserveAmmo: 72,

        reloadTime: 2300,

        automatic: false,

        pellets: 1,

        spread: 1,

        recoil: 5,

        bullet: "bullet_default"

    },

    rocket: {

        id: "rocket",
        name: "Rocket Launcher",

        category: "explosive",

        damage: 120,

        fireRate: 1100,

        bulletSpeed: 550,

        magazine: 4,

        reserveAmmo: 20,

        reloadTime: 3000,

        automatic: false,

        pellets: 1,

        spread: 0,

        recoil: 12,

        bullet: "bullet_default"

    },

    minigun: {

        id: "minigun",
        name: "Vulcan Minigun",

        category: "firearm",

        damage: 8,

        fireRate: 45,

        bulletSpeed: 1000,

        magazine: 250,

        reserveAmmo: 750,

        reloadTime: 4500,

        automatic: true,

        pellets: 1,

        spread: 5,

        recoil: 0.5,

        bullet: "bullet_default"

    },

    weapon1: {

        id: "weapon1",
        name: "Special Weapon I",

        category: "melee",

        damage: 55,

        fireRate: 500,

        magazine: 0,

        reserveAmmo: 0,

        reloadTime: 0,

        automatic: false,

        pellets: 0,

        spread: 0,

        recoil: 0,

        bullet: null

    },

    weapon2: {

        id: "weapon2",
        name: "Special Weapon II",

        category: "melee",

        damage: 75,

        fireRate: 650,

        magazine: 0,

        reserveAmmo: 0,

        reloadTime: 0,

        automatic: false,

        pellets: 0,

        spread: 0,

        recoil: 0,

        bullet: null

    },

    weapon3: {

        id: "weapon3",
        name: "Special Weapon III",

        category: "melee",

        damage: 100,

        fireRate: 850,

        magazine: 0,

        reserveAmmo: 0,

        reloadTime: 0,

        automatic: false,

        pellets: 0,

        spread: 0,

        recoil: 0,

        bullet: null

    }

};

export default WeaponDatabase;