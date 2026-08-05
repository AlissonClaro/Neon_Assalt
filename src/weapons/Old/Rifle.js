export default class Weapon {

    constructor(scene, id) {

        this.scene = scene;

        this.id = id;

        this.sprite = scene.add.image(
            18,
            2,
            "weapon01_idle"
        );

    }

    setPosition(x, y) {

        this.sprite.setPosition(x, y);

    }

    flip(value) {

        this.sprite.setFlipX(value);

    }

    fire() {

        this.sprite.setTexture(

            `weapon${this.id}_fire`

        );

    }

    idle() {

        this.sprite.setTexture(

            `weapon${this.id}_idle`

        );

    }

}