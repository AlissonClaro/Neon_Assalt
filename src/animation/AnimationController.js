export default class AnimationController {

    constructor(sprite) {

        this.sprite = sprite;

    }

    play(
        key,
        ignoreIfPlaying = true
    ) {

        if (!key) {
            return false;
        }

        if (
            !this.sprite.scene.anims.exists(
                key
            )
        ) {

            console.warn(
                `[AnimationController] Animação inexistente: ${key}`
            );

            return false;

        }

        if (
            ignoreIfPlaying &&
            this.sprite.anims
                .currentAnim?.key === key &&
            this.sprite.anims.isPlaying
        ) {

            return true;

        }

        this.sprite.play(
            key,
            ignoreIfPlaying
        );

        return true;

    }

    stop() {

        this.sprite.stop();

    }

    getCurrent() {

        return (
            this.sprite.anims
                .currentAnim?.key ??
            null
        );

    }

    isPlaying(key) {

        return (

            this.sprite.anims
                .currentAnim?.key === key &&

            this.sprite.anims
                .isPlaying

        );

    }

}