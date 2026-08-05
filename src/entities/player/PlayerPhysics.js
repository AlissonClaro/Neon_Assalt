import Phaser from "phaser";

import PlayerStats from "./PlayerStats.js";
import PlayerHealth from "./PlayerHealth.js";
import PlayerInventory from "./PlayerInventory.js";

import PlayerInput from "./PlayerInput.js";
import PlayerPhysics from "./PlayerPhysics.js";
import PlayerMovement from "./PlayerMovement.js";

import PlayerController from "./PlayerController.js";
import PlayerStateMachine from "./PlayerStateMachine.js";
import PlayerAnimator from "./PlayerAnimator.js";

import AnimationController from "../../animation/AnimationController.js";

import WeaponManager from "../../weapons/WeaponManager.js";
import WeaponRenderer from "../../weapons/WeaponRenderer.js";

import RightHandSocket from "./sockets/RightHandSocket.js";

export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {

        super(scene, x, y, "player_idle");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.initialize();

    }

    initialize() {

        /* ===========================
           Física
        =========================== */

        this.setCollideWorldBounds(true);

        this.body.setGravityY(1000);

        this.setBounce(0);

        this.setDragX(1200);

        this.setMaxVelocity(400, 900);

        this.setDepth(10);

        this.handSocket =

    new RightHandSocket();

        /* ===========================
           Componentes
        =========================== */

        this.stats = new PlayerStats();

        this.health = new PlayerHealth();

        this.inventory = new PlayerInventory();

        this.input = new PlayerInput(this.scene);

        this.physicsController = new PlayerPhysics(this);

        this.movement = new PlayerMovement(this);

        this.stateMachine = new PlayerStateMachine();

        /* ===========================
           Sistema de animação
        =========================== */

        this.animation = new AnimationController(this);

        this.animator = new PlayerAnimator(
            this,
            this.animation
        );

        /* ===========================
           Sistema de armas
        =========================== */

        this.weaponManager = new WeaponManager(this);

        this.weaponRenderer = new WeaponRenderer(
            this.scene,
            this.weaponManager
        );

        this.weaponManager.equip("pistol");

        /* ===========================
           Controle
        =========================== */

        this.controller = new PlayerController(this);

    }

    update() {

        this.controller.update();

        this.animator.update();

        this.weaponManager.update();

        this.weaponRenderer.update(this);

    }

    destroy(fromScene) {

        if (this.weaponRenderer) {

            this.weaponRenderer.destroy();

        }

        super.destroy(fromScene);

    }

}