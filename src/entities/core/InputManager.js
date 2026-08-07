import Phaser from "phaser";

export default class InputManager {

    constructor(scene) {

        this.scene = scene;

        this.keys = scene.input.keyboard.addKeys({

            A: Phaser.Input.Keyboard.KeyCodes.A,
            D: Phaser.Input.Keyboard.KeyCodes.D,
            W: Phaser.Input.Keyboard.KeyCodes.W,
            S: Phaser.Input.Keyboard.KeyCodes.S,

            SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE,

            SHIFT: Phaser.Input.Keyboard.KeyCodes.SHIFT,

            CTRL: Phaser.Input.Keyboard.KeyCodes.CTRL,

            Q: Phaser.Input.Keyboard.KeyCodes.Q,

            E: Phaser.Input.Keyboard.KeyCodes.E,

            R: Phaser.Input.Keyboard.KeyCodes.R

        });

        this.pointer =
            scene.input.activePointer;

    }

    left() {

        return this.keys.A.isDown;

    }

    right() {

        return this.keys.D.isDown;

    }

    up() {

        return this.keys.W.isDown;

    }

    down() {

        return this.keys.S.isDown;

    }

    jump() {

        return Phaser.Input.Keyboard.JustDown(
            this.keys.SPACE
        );

    }

    run() {

        return this.keys.SHIFT.isDown;

    }

    crouch() {

        return this.keys.CTRL.isDown;

    }

    reload() {

        return Phaser.Input.Keyboard.JustDown(
            this.keys.R
        );

    }

    weaponNext() {

        return Phaser.Input.Keyboard.JustDown(
            this.keys.E
        );

    }

    weaponPrevious() {

        return Phaser.Input.Keyboard.JustDown(
            this.keys.Q
        );

    }

    fire() {

        return this.pointer.isDown;

    }

    fireJustDown() {

        return Phaser.Input.Pointer.JustDown(
            this.pointer
        );

    }

    pointerX() {

        return this.pointer.worldX;

    }

    pointerY() {

        return this.pointer.worldY;

    }

}