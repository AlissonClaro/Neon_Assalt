import Phaser from "phaser";

import AssetManager from "../managers/AssetManager.js";

export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super("PreloadScene");
    }

    preload() {

        AssetManager.load(this);

    }

    create() {

        this.scene.start("Level1Scene");

    }

}