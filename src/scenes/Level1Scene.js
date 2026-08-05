import Phaser from "phaser";

import Player from "../entities/player/Player.js";

import InputManager from "../core/InputManager.js";
import CameraManager from "../core/CameraManager.js";
import AnimationFactory from "../animation/AnimationFactory.js";
import BulletManager from "../projectiles/BulletManager.js";

export default class Level1Scene extends Phaser.Scene {

    constructor() {
        super("Level1Scene");
    }


    create() {

        this.physics.world.setBounds(0, 0, 3000, 720);

        this.inputManager = new InputManager(this);

        this.ground = this.physics.add.staticGroup();

        for (let i = 0; i < 50; i++) {

            this.ground.create(
                i * 64,
                688,
                "__ground"
            ).setOrigin(0);

        }

        AnimationFactory.create(this);

        this.player = new Player(
            this,
            150,
            400
        );

        this.bullets = new BulletManager(this);

        this.physics.add.collider(
            this.player,
            this.ground
        );

        this.cameraManager = new CameraManager(this);

        this.cameraManager.follow(this.player);

        this.cameraManager.setBounds(
            3000,
            720
        );

        this.cameraManager.setZoom(1);

    }

    update() {

        this.player.update();

        if (this.input.activePointer.isDown) {

            this.bullets.shoot(this.player);

        }

    }

}