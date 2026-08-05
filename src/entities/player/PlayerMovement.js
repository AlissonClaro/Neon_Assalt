export default class PlayerMovement {

    constructor(player) {

        this.player = player;

    }

    walkLeft(speed) {

        this.player.setVelocityX(-speed);

        this.player.setFlipX(true);

    }

    walkRight(speed) {

        this.player.setVelocityX(speed);

        this.player.setFlipX(false);

    }

    stop() {

        this.player.setVelocityX(0);

    }

    jump(force) {

        this.player.setVelocityY(-force);

    }

    dash(force) {

        const direction =
            this.player.flipX ? -1 : 1;

        this.player.setVelocityX(
            direction * force
        );

    }

}