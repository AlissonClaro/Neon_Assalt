export default class CameraManager {

    constructor(scene) {

        this.scene = scene;
        this.camera = scene.cameras.main;

    }

    follow(target) {

        this.camera.startFollow(
            target,
            true,
            0.08,
            0.08
        );

    }

    setBounds(width, height) {

        this.camera.setBounds(
            0,
            0,
            width,
            height
        );

    }

    setZoom(value) {

        this.camera.setZoom(value);

    }

    shake(duration = 150, intensity = 0.004) {

        this.camera.shake(
            duration,
            intensity
        );

    }

    flash(duration = 150) {

        this.camera.flash(
            duration
        );

    }

    fadeIn(duration = 300) {

        this.camera.fadeIn(
            duration
        );

    }

    fadeOut(duration = 300) {

        this.camera.fadeOut(
            duration
        );

    }

    centerOn(x, y) {

        this.camera.centerOn(
            x,
            y
        );

    }

}