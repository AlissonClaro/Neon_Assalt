export default class AnimationController {

    constructor(sprite) {

        this.sprite = sprite;

        this.current = null;

    }

    play(key, ignoreIfPlaying = true) {

        if (this.current === key && ignoreIfPlaying) {
            return;
        }

        this.current = key;

        this.sprite.play(key, true);

    }

    stop() {

        this.current = null;

        this.sprite.stop();

    }

    getCurrent() {

        return this.current;

    }

}