import Phaser from "phaser";

import Player
    from "../entities/player/Player.js";

import InputManager
    from "../core/InputManager.js";

import CameraManager
    from "../core/CameraManager.js";

import AnimationFactory
    from "../animation/AnimationFactory.js";

import CombatSystem
    from "../systems/combat/CombatSystem.js";

import HUDSystem
    from "../systems/ui/HUDSystem.js";

export default class Level1Scene
    extends Phaser.Scene {

    constructor() {

        super({
            key: "Level1Scene"
        });

    }

    create() {

        // =====================================
        // WORLD
        // =====================================

        this.worldWidth =
            3000;

        this.worldHeight =
            720;

        this.physics.world.setBounds(

            0,
            0,

            this.worldWidth,
            this.worldHeight

        );

        // =====================================
        // INPUT
        // =====================================

        this.inputManager =
            new InputManager(
                this
            );

        // =====================================
        // TEMPORARY GROUND
        // =====================================

        /*
            O mapa real ainda será integrado
            depois.

            Por enquanto usamos um Rectangle
            físico para não depender de
            __ground ou tilemap.
        */

        this.ground =
            this.add.rectangle(

                this.worldWidth / 2,

                680,

                this.worldWidth,

                80,

                0x20242e

            );

        this.physics.add.existing(

            this.ground,

            true

        );

        // =====================================
        // ANIMATIONS
        // =====================================

        AnimationFactory.create(
            this
        );

        // =====================================
        // COMBAT
        // =====================================

        this.combatSystem =
            new CombatSystem(
                this
            );

        /*
            Compatibilidade temporária
            com WeaponManager.

            Depois WeaponManager poderá
            acessar diretamente CombatSystem.
        */

        this.projectileSystem =
            this.combatSystem
                .getProjectileSystem();

        // =====================================
        // PLAYER
        // =====================================

        this.player =
            new Player(

                this,

                180,
                400

            );

        // =====================================
        // COLLISION
        // =====================================

        this.combatSystem
            .collisions
            .addPlayerGround(

                this.player,

                this.ground

            );

        // =====================================
        // CAMERA
        // =====================================

        this.cameraManager =
            new CameraManager(
                this
            );

        this.cameraManager.follow(
            this.player
        );

        this.cameraManager.setBounds(

            this.worldWidth,

            this.worldHeight

        );

        this.cameraManager.setZoom(
            1
        );

        // =====================================
        // HUD
        // =====================================

        this.hudSystem =
            new HUDSystem(
                this
            );

        // =====================================
        // CLEANUP
        // =====================================

        this.events.once(

            Phaser.Scenes.Events.SHUTDOWN,

            this.shutdown,

            this

        );

    }

    update() {

        if (
            !this.player ||
            !this.player.active
        ) {

            return;

        }

        // PLAYER

        this.player.update();

        // CAMERA

        this.cameraManager.update(
            this.player
        );

        // HUD

        this.hudSystem.update(
            this.player
        );

    }

    shutdown() {

        if (
            this.hudSystem
        ) {

            this.hudSystem.destroy();

            this.hudSystem =
                null;

        }

        if (
            this.combatSystem
        ) {

            this.combatSystem.destroy();

            this.combatSystem =
                null;

        }

        this.projectileSystem =
            null;

        this.player =
            null;

        this.ground =
            null;

        this.inputManager =
            null;

        this.cameraManager =
            null;

    }

}