export default class PlayerInput {

    constructor(scene) {

        if (!scene.inputManager) {

            throw new Error(
                "PlayerInput: scene.inputManager não foi inicializado."
            );

        }

        this.inputManager = scene.inputManager;

    }

    left() {

        return this.inputManager.left();

    }

    right() {

        return this.inputManager.right();

    }

    up() {

        return this.inputManager.up();

    }

    down() {

        return this.inputManager.down();

    }

    jump() {

        return this.inputManager.jump();

    }

    run() {

        return this.inputManager.run();

    }

    crouch() {

        return this.inputManager.crouch();

    }

    reload() {

        return this.inputManager.reload();

    }

    fire() {

        return this.inputManager.fire();

    }

    weaponNext() {

        return this.inputManager.weaponNext();

    }

    weaponPrevious() {

        return this.inputManager.weaponPrevious();

    }

    pointerX() {

        return this.inputManager.pointerX();

    }

    pointerY() {

        return this.inputManager.pointerY();

    }

}