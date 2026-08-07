const ItemDatabase = {

    medkit: {

        id: "medkit",

        name: "Medkit",

        type: "consumable",

        description:
            "Recupera parte da vida do jogador.",

        stackable: true,

        maxStack: 10,

        value: 50,

        data: {

            heal: 35

        }

    },

    ammoBox: {

        id: "ammoBox",

        name: "Ammo Box",

        type: "ammo",

        description:
            "Caixa de munição universal.",

        stackable: true,

        maxStack: 20,

        value: 25,

        data: {

            ammo: 30

        }

    },

    grenade: {

        id: "grenade",

        name: "Grenade",

        type: "grenade",

        description:
            "Granada explosiva.",

        stackable: true,

        maxStack: 8,

        value: 75,

        data: {

            damage: 120,

            radius: 140

        }

    },

    credits: {

        id: "credits",

        name: "Credits",

        type: "currency",

        description:
            "Moeda utilizada no NeonAssault.",

        stackable: true,

        maxStack: 999999,

        value: 1

    }

};

export default ItemDatabase;