import Phaser from "phaser";

import AssetManager
    from "../assets/AssetManager.js";

export default class PreloadScene
    extends Phaser.Scene {

    constructor() {

        super({
            key: "PreloadScene"
        });

    }

    preload() {

        AssetManager.load(
            this
        );

    }

    create() {

        this.scene.start(
            "Level1Scene"
        );

    }

}