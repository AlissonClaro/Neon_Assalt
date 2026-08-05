import PlayerState from "../../states/PlayerState.js";

export default class PlayerController {

    constructor(player) {

        this.player = player;

        this.input = player.input;
        this.movement = player.movement;
        this.physics = player.physicsController;
        this.stateMachine = player.stateMachine;
        this.stats = player.stats;

    }

    update() {

        this.handleMovement();

        this.handleJump();

        this.updateStates();

    }

    handleMovement() {

        const speed = this.input.run()
            ? this.stats.runSpeed
            : this.stats.walkSpeed;

        if (this.input.left()) {

            this.movement.walkLeft(speed);
            return;

        }

        if (this.input.right()) {

            this.movement.walkRight(speed);
            return;

        }

        this.movement.stop();

    }

    handleJump() {

        if (
            this.input.jump()
            &&
            this.physics.isGrounded()
        ) {

            this.movement.jump(
                this.stats.jumpForce
            );

            this.stateMachine.change(
                PlayerState.JUMP
            );

        }

    }

    updateStates() {

        if (!this.physics.isGrounded()) {

            if (this.physics.isFalling()) {

                this.stateMachine.change(
                    PlayerState.FALL
                );

            }

            return;

        }

        if (this.input.left() || this.input.right()) {

            if (this.input.run()) {

                this.stateMachine.change(
                    PlayerState.RUN
                );

            }

            else {

                this.stateMachine.change(
                    PlayerState.WALK
                );

            }

            return;

        }

        this.stateMachine.change(
            PlayerState.IDLE
        );

    }

}