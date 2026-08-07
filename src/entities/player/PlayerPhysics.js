export default class PlayerPhysics {

    constructor(player) {

        this.player = player;

    }

    get body() {

        return this.player.body;

    }

    isGrounded() {

        if (!this.body) {

            return false;

        }

        return (

            this.body.blocked.down ||

            this.body.touching.down

        );

    }

    isFalling() {

        if (!this.body) {

            return false;

        }

        return (

            !this.isGrounded() &&

            this.body.velocity.y > 30

        );

    }

    isRising() {

        if (!this.body) {

            return false;

        }

        return (

            !this.isGrounded() &&

            this.body.velocity.y < -30

        );

    }

    velocityX() {

        return (
            this.body?.velocity.x ??
            0
        );

    }

    velocityY() {

        return (
            this.body?.velocity.y ??
            0
        );

    }

    speedX() {

        return Math.abs(
            this.velocityX()
        );

    }

    speedY() {

        return Math.abs(
            this.velocityY()
        );

    }

}