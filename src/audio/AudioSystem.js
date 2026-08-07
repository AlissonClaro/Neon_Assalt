import SoundManager
    from "../../audio/SoundManager.js";

import MusicManager
    from "../../audio/MusicManager.js";

export default class AudioSystem {

    constructor(scene) {

        this.scene =
            scene;

        this.sound =
            new SoundManager(
                scene
            );

        this.music =
            new MusicManager(
                scene
            );

    }

    playSound(
        key,
        config = {}
    ) {

        return this.sound.play(
            key,
            config
        );

    }

    playMusic(
        key,
        config = {}
    ) {

        return this.music.play(
            key,
            config
        );

    }

    setMasterVolume(
        value
    ) {

        this.sound.setVolume(
            value
        );

        this.music.setVolume(
            value
        );

    }

    mute() {

        this.sound.mute();

        this.music.mute();

    }

    unmute() {

        this.sound.unmute();

        this.music.unmute();

    }

    destroy() {

        this.sound.destroy();

        this.music.destroy();

        this.scene = null;

    }

}