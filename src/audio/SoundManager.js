import Phaser from "phaser";

export default class SoundManager {

    constructor(scene) {

        this.scene = scene;

        this.enabled = true;

        this.volume = 1;

        this.activeSounds =
            new Set();

    }

    play(
        key,
        config = {}
    ) {

        if (
            !this.enabled ||
            !key
        ) {

            return null;

        }

        if (
            !this.scene.cache.audio.exists(
                key
            )
        ) {

            console.warn(
                `[SoundManager] Áudio não carregado: ${key}`
            );

            return null;

        }

        const sound =
            this.scene.sound.add(

                key,

                {
                    volume:
                        config.volume ??
                        this.volume,

                    rate:
                        config.rate ?? 1,

                    detune:
                        config.detune ?? 0,

                    loop:
                        config.loop ?? false

                }

            );

        this.activeSounds.add(
            sound
        );

        sound.once(
            "destroy",

            () => {

                this.activeSounds.delete(
                    sound
                );

            }
        );

        sound.play();

        return sound;

    }

    stopAll() {

        this.activeSounds.forEach(
            sound => {

                if (sound) {

                    sound.stop();
                    sound.destroy();

                }

            }
        );

        this.activeSounds.clear();

    }

    setVolume(value) {

        this.volume =
            Phaser.Math.Clamp(
                value,
                0,
                1
            );

    }

    mute() {

        this.enabled = false;

        this.stopAll();

    }

    unmute() {

        this.enabled = true;

    }

    destroy() {

        this.stopAll();

        this.scene = null;

    }

}