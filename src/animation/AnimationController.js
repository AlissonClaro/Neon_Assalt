export default class AnimationController {

    constructor(sprite) {

        this.sprite =
            sprite;

        this.current =
            null;

    }

    // =====================================================
    // PLAY
    // =====================================================

    play(
        key,
        ignoreIfPlaying = true
    ) {

        if (
            !this.sprite ||
            !key
        ) {

            return false;

        }

        // ==========================================
        // CHECK ANIMATION
        // ==========================================

        const scene =
            this.sprite.scene;

        if (
            !scene ||
            !scene.anims
        ) {

            return false;

        }

        if (
            !scene.anims.exists(
                key
            )
        ) {

            /*
             * Evita centenas de warnings
             * por segundo.
             */

            if (
                this.current !==
                `missing:${key}`
            ) {

                console.warn(
                    `[AnimationController] Animação inexistente: ${key}`
                );

            }

            this.current =
                `missing:${key}`;

            return false;

        }

        // ==========================================
        // SAME ANIMATION
        // ==========================================

        if (
            ignoreIfPlaying &&
            this.sprite.anims
                ?.currentAnim
                ?.key === key &&
            this.sprite.anims
                ?.isPlaying
        ) {

            this.current =
                key;

            return true;

        }

        // ==========================================
        // PLAY
        // ==========================================

        this.sprite.play(
            key,
            ignoreIfPlaying
        );

        this.current =
            key;

        return true;

    }

    // =====================================================
    // STOP
    // =====================================================

    stop() {

        if (
            !this.sprite
        ) {

            return;

        }

        this.sprite.stop();

        this.current =
            null;

    }

    // =====================================================
    // CURRENT
    // =====================================================

    getCurrent() {

        return this.current;

    }

    // =====================================================
    // EXISTS
    // =====================================================

    exists(key) {

        return (
            this.sprite
                ?.scene
                ?.anims
                ?.exists(key) ??
            false
        );

    }

    // =====================================================
    // DESTROY
    // =====================================================

    destroy() {

        this.sprite =
            null;

        this.current =
            null;

    }

}