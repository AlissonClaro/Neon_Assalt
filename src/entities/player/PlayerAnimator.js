import PlayerState from "./states/PlayerState.js";

export default class PlayerAnimator {

    constructor(player) {

        this.player = player;

        this.sprite = player;

    }

    update() {

        switch (this.player.stateMachine.current) {

            case PlayerState.IDLE:

                this.play("player_idle");
                break;

            case PlayerState.WALK:

                this.play("player_walk");
                break;

            case PlayerState.RUN:

                this.play("player_run");
                break;

            case PlayerState.JUMP:

                this.play("player_jump");
                break;

            case PlayerState.FALL:

                this.play("player_fall");
                break;

            case PlayerState.LAND:

                this.play("player_land");
                break;

            case PlayerState.ROLL:

                this.play("player_roll");
                break;

        }

    }

    play(key) {

        if (this.sprite.anims.currentAnim?.key === key)
            return;

        this.sprite.play(key);

    }

}