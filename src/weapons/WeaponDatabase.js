const WeaponDatabase = {

    pistol: {

        id: "pistol",

        damage: 18,

        fireRate: 250,

        bulletSpeed: 900,

        magazine: 15,

        automatic: false,

        folder: "pistol"

    },

    rifle: {

        id: "rifle",

        damage: 30,

        fireRate: 120,

        bulletSpeed: 1100,

        magazine: 30,

        automatic: true,

        folder: "rifle"

    },

    shotgun: {

        id: "shotgun",

        damage: 14,

        pellets: 8,

        fireRate: 600,

        folder: "shotgun"

    }

};

export default WeaponDatabase;