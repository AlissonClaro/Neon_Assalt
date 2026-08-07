import PlayerState
    from "./states/PlayerState.js";

export default class PlayerAnimator {

    constructor(
        player,
        animationController
    ) {

        this.player =
            player;

        this.animation =
            animationController;

    }

    update() {

        const state =
            this.player
                .stateMachine
                .current;

        switch (state) {

            case PlayerState.WALK:

                this.animation.play(
                    "player_walk"
                );

                break;

            case PlayerState.RUN:

                this.animation.play(
                    "player_run"
                );

                break;

            case PlayerState.JUMP:

                this.animation.play(
                    "player_jump"
                );

                break;

            case PlayerState.FALL:

                this.animation.play(
                    "player_fall"
                );

                break;

            case PlayerState.LAND:

                this.animation.play(
                    "player_land"
                );

                break;

            case PlayerState.ROLL:

                this.animation.play(
                    "player_roll"
                );

                break;

            case PlayerState.IDLE:
            default:

                this.animation.play(
                    "player_idle"
                );

                break;

        }

    }

}