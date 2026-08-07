import Entity from "../core/Entity.js";

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
import FrameSocketResolver from "./sockets/FrameSocketResolver.js";

export default class Player extends Entity {

    constructor(
        scene,
        x,
        y
    ) {

        super(
            scene,
            x,
            y,
            "player_walk",
            0
        );

        this.initialize();

    }

    initialize() {

        // =====================================
        // PHYSICS
        // =====================================

        this.setCollideWorldBounds(
            true
        );

        this.setBounce(
            0
        );

        this.setDragX(
            1200
        );

        this.setMaxVelocity(
            400,
            900
        );

        this.setDepth(
            10
        );

        // =====================================
        // FALLBACK HAND SOCKET
        // =====================================

        this.handSocket =
            new RightHandSocket();

        // =====================================
        // PLAYER COMPONENTS
        // =====================================

        this.stats =
            new PlayerStats();

        this.health =
            new PlayerHealth(
                this.stats.maxLife
            );

        this.inventory =
            new PlayerInventory();

        this.playerControls =
            new PlayerInput(
                this.scene
            );

        this.physicsController =
            new PlayerPhysics(
                this
            );

        this.movement =
            new PlayerMovement(
                this
            );

        this.stateMachine =
            new PlayerStateMachine();

        // =====================================
        // ANIMATION
        // =====================================

        this.animation =
            new AnimationController(
                this
            );

        this.animator =
            new PlayerAnimator(
                this,
                this.animation
            );

        // =====================================
        // WEAPON
        // =====================================

        this.weaponManager =
            new WeaponManager(
                this
            );

        this.weaponRenderer =
            new WeaponRenderer(
                this.scene,
                this.weaponManager
            );

        this.weaponManager.equip(
            "pistol",
            "1"
        );

        // =====================================
        // CONTROLLER
        // =====================================

        this.controller =
            new PlayerController(
                this
            );

    }

    // ==========================================
    // FRAME SOCKET
    // ==========================================

    getWeaponHandSocket() {

        return FrameSocketResolver.resolve(
            this,
            this.handSocket
        );

    }

    // ==========================================
    // UPDATE
    // ==========================================

    update() {

        if (
            !this.alive
        ) {

            return;

        }

        if (
            this.controller
        ) {

            this.controller.update();

        }

        if (
            this.animator
        ) {

            this.animator.update();

        }

        if (
            this.weaponManager
        ) {

            this.weaponManager.update();

        }

        if (
            this.weaponRenderer
        ) {

            this.weaponRenderer.update(
                this
            );

        }

    }

    // ==========================================
    // DESTROY
    // ==========================================

    destroy(
        fromScene
    ) {

        if (
            this.weaponManager
        ) {

            this.weaponManager.destroy();

            this.weaponManager =
                null;

        }

        if (
            this.weaponRenderer
        ) {

            this.weaponRenderer.destroy();

            this.weaponRenderer =
                null;

        }

        this.controller =
            null;

        this.animator =
            null;

        this.playerControls =
            null;

        this.handSocket =
            null;

        super.destroy(
            fromScene
        );

    }

}