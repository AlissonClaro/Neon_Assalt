const AnimationDatabase = {

    idle: {

        key:
            "player_idle",

        texture:
            "player_walk",

        start: 0,
        end: 0,

        frameRate: 1,

        repeat: -1

    },

    walk: {

        key:
            "player_walk",

        texture:
            "player_walk",

        start: 0,
        end: 11,

        frameRate: 12,

        repeat: -1

    },

    run: {

        key:
            "player_run",

        texture:
            "player_run",

        start: 0,
        end: 11,

        frameRate: 16,

        repeat: -1

    },

    jump: {

        key:
            "player_jump",

        texture:
            "player_jump",

        start: 0,
        end: 9,

        frameRate: 14,

        repeat: 0

    },

    fall: {

        key:
            "player_fall",

        texture:
            "player_fall",

        start: 0,
        end: 10,

        frameRate: 12,

        repeat: -1

    },

    land: {

        key:
            "player_land",

        texture:
            "player_land",

        start: 0,
        end: 5,

        frameRate: 14,

        repeat: 0

    },

    roll: {

        key:
            "player_roll",

        texture:
            "player_roll",

        start: 0,
        end: 8,

        frameRate: 16,

        repeat: 0

    }

};

export default AnimationDatabase;