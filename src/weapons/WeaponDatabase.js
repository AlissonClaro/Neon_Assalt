const WeaponDatabase = {

    pistol:{

        name:"Pistol",

        damage:20,

        fireRate:250,

        magazine:15,

        reload:1200,

        automatic:false,

        bulletSpeed:900

    },

    smg:{

        name:"SMG",

        damage:10,

        fireRate:90,

        magazine:40,

        reload:1800,

        automatic:true,

        bulletSpeed:950

    },

    shotgun:{

        name:"Shotgun",

        damage:14,

        pellets:8,

        fireRate:700,

        magazine:8,

        reload:2200,

        automatic:false,

        bulletSpeed:800

    },

    rifle:{

        name:"Rifle",

        damage:28,

        fireRate:170,

        magazine:30,

        reload:1700,

        automatic:true,

        bulletSpeed:1100

    },

    sniper:{

        name:"Sniper",

        damage:90,

        fireRate:900,

        magazine:5,

        reload:2500,

        automatic:false,

        bulletSpeed:1600

    }

};

export default WeaponDatabase;