export default class Crosshair {

    constructor(scene) {

        this.scene = scene;

        this.sprite =
            scene.add.image(
                0,
                0,
                "crosshair"
            );

        this.sprite
            .setScrollFactor(0)
            .setDepth(2000);

        scene.input.setDefaultCursor(
            "none"
        );

    }

    update() {

        const pointer =
            this.scene.input.activePointer;

        this.sprite.setPosition(
            pointer.x,
            pointer.y
        );

    }

    destroy() {

        this.scene.input.setDefaultCursor(
            "default"
        );

        this.sprite.destroy();

    }

}