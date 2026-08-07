import PlayerState
    from "./states/PlayerState.js";

export default class PlayerController {

    constructor(player) {

        this.player =
            player;

        this.input =
            player.input;

        this.movement =
            player.movement;

        this.physics =
            player.physicsController;

        this.stateMachine =
            player.stateMachine;

        this.stats =
            player.stats;

        this.wasGrounded =
            false;

        this.landDuration =
            110;

    }

    update() {

        const now =
            this.player.scene.time.now;

        const grounded =
            this.physics.isGrounded();

        this.handleLanding(

            grounded,
            now

        );

        this.handleJump(

            grounded,
            now

        );

        this.handleMovement(

            now

        );

        this.updateAirState(
            grounded,
            now
        );

        this.updateGroundState(
            grounded,
            now
        );

        this.wasGrounded =
            grounded;

    }

    handleMovement() {

        const speed =
            this.input.run()

                ? this.stats.runSpeed

                : this.stats.walkSpeed;

        if (this.input.left()) {

            this.movement.moveLeft(
                speed
            );

            return;

        }

        if (this.input.right()) {

            this.movement.moveRight(
                speed
            );

            return;

        }

        this.movement
            .stopHorizontal();

    }

    handleJump(
        grounded,
        now
    ) {

        if (
            !this.input.jump() ||
            !grounded
        ) {

            return;

        }

        this.movement.jump(

            this.stats.jumpForce

        );

        this.stateMachine.change(

            PlayerState.JUMP,
            now

        );

    }

    handleLanding(
        grounded,
        now
    ) {

        const justLanded =

            grounded &&

            !this.wasGrounded &&

            (
                this.stateMachine.is(
                    PlayerState.FALL
                ) ||

                this.stateMachine.is(
                    PlayerState.JUMP
                )
            );

        if (!justLanded) {

            return;

        }

        this.stateMachine.change(

            PlayerState.LAND,
            now

        );

    }

    updateAirState(
        grounded,
        now
    ) {

        if (grounded) {

            return;

        }

        if (
            this.physics.isFalling()
        ) {

            this.stateMachine.change(

                PlayerState.FALL,
                now

            );

            return;

        }

        if (
            this.physics.isRising() &&

            !this.stateMachine.is(
                PlayerState.JUMP
            )
        ) {

            this.stateMachine.change(

                PlayerState.JUMP,
                now

            );

        }

    }

    updateGroundState(
        grounded,
        now
    ) {

        if (!grounded) {

            return;

        }

        if (
            this.stateMachine.is(
                PlayerState.LAND
            )
        ) {

            if (
                this.stateMachine.timeInState(
                    now
                ) <
                this.landDuration
            ) {

                return;

            }

        }

        if (
            this.input.left() ||
            this.input.right()
        ) {

            this.stateMachine.change(

                this.input.run()

                    ? PlayerState.RUN

                    : PlayerState.WALK,

                now

            );

            return;

        }

        this.stateMachine.change(

            PlayerState.IDLE,
            now

        );

    }

}