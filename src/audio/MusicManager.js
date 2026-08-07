import Phaser from "phaser";

export default class MusicManager {

    constructor(scene) {

        this.scene = scene;

        this.current = null;

        this.currentKey = null;

        this.enabled = true;

        this.volume = 0.6;

    }

    play(
        key,
        {
            loop = true,
            volume = this.volume,
            fadeIn = 0
        } = {}
    ) {

        if (
            !this.enabled ||
            !key
        ) {

            return null;

        }

        if (
            this.currentKey === key &&
            this.current?.isPlaying
        ) {

            return this.current;

        }

        if (
            !this.scene.cache.audio.exists(
                key
            )
        ) {

            console.warn(
                `[MusicManager] Música não carregada: ${key}`
            );

            return null;

        }

        this.stop();

        this.currentKey =
            key;

        this.current =
            this.scene.sound.add(

                key,

                {
                    loop,
                    volume:
                        fadeIn > 0
                            ? 0
                            : volume
                }

            );

        this.current.play();

        if (
            fadeIn > 0
        ) {

            this.scene.tweens.add({

                targets:
                    this.current,

                volume,

                duration:
                    fadeIn

            });

        }

        return this.current;

    }

    stop(
        fadeOut = 0
    ) {

        if (!this.current) {

            return;

        }

        if (
            fadeOut > 0 &&
            this.current.isPlaying
        ) {

            const sound =
                this.current;

            this.scene.tweens.add({

                targets:
                    sound,

                volume: 0,

                duration:
                    fadeOut,

                onComplete: () => {

                    sound.stop();
                    sound.destroy();

                }

            });

        }
        else {

            this.current.stop();
            this.current.destroy();

        }

        this.current = null;
        this.currentKey = null;

    }

    pause() {

        if (
            this.current?.isPlaying
        ) {

            this.current.pause();

        }

    }

    resume() {

        if (
            this.current?.isPaused
        ) {

            this.current.resume();

        }

    }

    setVolume(value) {

        this.volume =
            Phaser.Math.Clamp(
                value,
                0,
                1
            );

        if (this.current) {

            this.current.setVolume(
                this.volume
            );

        }

    }

    mute() {

        this.enabled =
            false;

        if (this.current) {

            this.current.setMute(
                true
            );

        }

    }

    unmute() {

        this.enabled =
            true;

        if (this.current) {

            this.current.setMute(
                false
            );

        }

    }

    destroy() {

        this.stop();

        this.scene = null;

    }

}