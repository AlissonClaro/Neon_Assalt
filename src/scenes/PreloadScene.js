import Phaser from "phaser";

import AssetManager
    from "../assets/AssetManager.js";

import AnimationFactory
    from "../animation/AnimationFactory.js";

export default class PreloadScene extends Phaser.Scene {

    constructor() {

        super(
            "PreloadScene"
        );

    }

    preload() {

        // ==========================================
        // LOAD ALL ASSETS
        // ==========================================

        AssetManager.load(
            this
        );

    }

    create() {

        // ==========================================
        // CREATE PLAYER ANIMATIONS
        // ==========================================

        AnimationFactory.create(
            this
        );

        // ==========================================
        // DEBUG
        // ==========================================

        const animations = [

            "player_idle",
            "player_walk",
            "player_run",
            "player_jump",
            "player_fall",
            "player_land",
            "player_roll"

        ];

        animations.forEach(
            key => {

                console.log(
                    `[PreloadScene] ${key}:`,
                    this.anims.exists(key)
                );

            }
        );

        // ==========================================
        // START LEVEL
        // ==========================================

        this.scene.start(
            "Level1Scene"
        );

    }

}