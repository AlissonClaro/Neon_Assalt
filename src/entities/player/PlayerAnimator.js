export default class PlayerAnimator {

    constructor(
        player,
        animationController
    ) {

        this.player =
            player;

        this.animationController =
            animationController;

        this.lastState =
            null;

    }

    update() {

        if (
            !this.player ||
            !this.animationController
        ) {

            return;

        }

        const state =
            this.player
                .stateMachine
                ?.getState?.() ??
            this.player
                .stateMachine
                ?.currentState ??
            "idle";

        if (
            state ===
            this.lastState
        ) {

            return;

        }

        this.lastState =
            state;

        switch (state) {

            case "idle":

                this.play(
                    "player_idle"
                );

                break;

            case "walk":

                this.play(
                    "player_walk"
                );

                break;

            case "run":

                this.play(
                    "player_run"
                );

                break;

            case "jump":

                this.play(
                    "player_jump"
                );

                break;

            case "fall":

                this.play(
                    "player_fall"
                );

                break;

            case "land":

                this.play(
                    "player_land"
                );

                break;

            case "roll":

                this.play(
                    "player_roll"
                );

                break;

            default:

                this.play(
                    "player_idle"
                );

                break;

        }

    }

    play(
        animationKey
    ) {

        if (
            !this.animationController
        ) {

            return;

        }

        this.animationController.play(
            animationKey,
            true
        );

    }

    force(
        animationKey
    ) {

        if (
            !this.animationController
        ) {

            return;

        }

        this.lastState =
            null;

        this.animationController.play(
            animationKey,
            false
        );

    }

    reset() {

        this.lastState =
            null;

    }

    destroy() {

        this.player =
            null;

        this.animationController =
            null;

        this.lastState =
            null;

    }

}