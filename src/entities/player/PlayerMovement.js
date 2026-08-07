export default class PlayerMovement {

    constructor(player) {

        this.player = player;

    }

    moveLeft(speed) {

        this.player.setVelocityX(
            -Math.abs(speed)
        );

        this.player.setFlipX(
            true
        );

    }

    moveRight(speed) {

        this.player.setVelocityX(
            Math.abs(speed)
        );

        this.player.setFlipX(
            false
        );

    }

    stopHorizontal() {

        this.player.setVelocityX(
            0
        );

    }

    jump(force) {

        this.player.setVelocityY(
            -Math.abs(force)
        );

    }

    dash(force) {

        const direction =
            this.player.flipX
                ? -1
                : 1;

        this.player.setVelocityX(

            direction *
            Math.abs(force)

        );

    }

    knockback(
        forceX,
        forceY = 0
    ) {

        this.player.setVelocity(

            forceX,
            forceY

        );

    }

}