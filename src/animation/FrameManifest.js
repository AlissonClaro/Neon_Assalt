const FrameManifest = {

    player: {

        idle: {
            start: 0,
            end: 11,
            fps: 10,
            repeat: -1
        },

        walk: {
            start: 0,
            end: 11,
            fps: 12,
            repeat: -1
        },

        run: {
            start: 0,
            end: 11,
            fps: 16,
            repeat: -1
        },

        jump: {
            start: 0,
            end: 7,
            fps: 14,
            repeat: 0
        },

        doubleJump: {
            start: 0,
            end: 7,
            fps: 14,
            repeat: 0
        },

        fall: {
            start: 0,
            end: 7,
            fps: 12,
            repeat: -1
        },

        land: {
            start: 0,
            end: 5,
            fps: 12,
            repeat: 0
        },

        roll: {
            start: 0,
            end: 7,
            fps: 16,
            repeat: 0
        },

        slide: {
            start: 0,
            end: 7,
            fps: 16,
            repeat: 0
        },

        wallJump: {
            start: 0,
            end: 7,
            fps: 12,
            repeat: 0
        },

        hurt: {
            start: 0,
            end: 5,
            fps: 10,
            repeat: 0
        }

    }

};

export default FrameManifest;