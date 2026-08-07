export default class CameraManager {

    constructor(scene) {

        this.scene = scene;

        this.camera =
            scene.cameras.main;

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

        this.camera.setZoom(
            value
        );

    }

}