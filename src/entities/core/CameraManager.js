export default class CameraManager {

    constructor(scene) {

        this.scene = scene;

        this.camera =
            scene.cameras.main;

        this.targetOffsetX = 0;
        this.currentOffsetX = 0;

        this.lookAheadDistance = 100;
        this.lookAheadLerp = 0.08;

    }

    follow(target) {

        this.camera.startFollow(

            target,

            true,

            0.08,
            0.08

        );

    }

    update(target) {

        if (!target) {
            return;
        }

        this.targetOffsetX =
            target.flipX
                ? -this.lookAheadDistance
                : this.lookAheadDistance;

        this.currentOffsetX +=
            (
                this.targetOffsetX -
                this.currentOffsetX
            ) *
            this.lookAheadLerp;

        this.camera.setFollowOffset(

            this.currentOffsetX,
            0

        );

    }

    setBounds(
        width,
        height
    ) {

        this.camera.setBounds(

            0,
            0,
            width,
            height

        );

    }

    setZoom(value) {

        this.camera.setZoom(
            value
        );

    }

    setLookAhead(
        distance
    ) {

        this.lookAheadDistance =
            distance;

    }

    shake(
        duration = 150,
        intensity = 0.004
    ) {

        this.camera.shake(

            duration,
            intensity

        );

    }

    flash(
        duration = 150
    ) {

        this.camera.flash(
            duration
        );

    }

    fadeIn(
        duration = 300
    ) {

        this.camera.fadeIn(
            duration
        );

    }

    fadeOut(
        duration = 300
    ) {

        this.camera.fadeOut(
            duration
        );

    }

    centerOn(
        x,
        y
    ) {

        this.camera.centerOn(
            x,
            y
        );

    }

}