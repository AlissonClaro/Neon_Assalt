const WeaponDatabase = {

    pistol: {

        name: "Pistol",

        damage: 18,

        fireRate: 250,

        bulletSpeed: 900,

        recoil: 2,

        spread: 0,

        magazine: 15,

        reload: 1200,

        automatic: false,

        bullet: "bullet_1",

        effect: "effect_1_1",

        sound: "pistol"

    },

    smg: {

        name: "SMG",

        damage: 10,

        fireRate: 90,

        magazine: 40,

        reload: 1800,

        automatic: true,

        bulletSpeed: 950

    },

    shotgun: {

        name: "Shotgun",

        damage: 14,

        pellets: 8,

        fireRate: 700,

        magazine: 8,

        reload: 2200,

        automatic: false,

        bulletSpeed: 800

    },

    rifle: {

        name: "Rifle",

        damage: 28,

        fireRate: 170,

        magazine: 30,

        reload: 1700,

        automatic: true,

        bulletSpeed: 1100

    },

    sniper: {

        name: "Sniper",

        damage: 90,

        fireRate: 900,

        magazine: 5,

        reload: 2500,

        automatic: false,

        bulletSpeed: 1600

    },

    minigun: {

        damage: 8,

        fireRate: 45,

        bulletSpeed: 850,

        recoil: 0.4,

        spread: 6,

        magazine: 300,

        reload: 5000,

        automatic: true,

        bullet: "bullet_9",

        effect: "effect_5_2",

        sound: "minigun"

    }

};

export default WeaponDatabase;