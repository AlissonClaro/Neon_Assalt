import WeaponFactory from "./WeaponFactory.js";
import WeaponInventory from "./WeaponInventory.js";

export default class WeaponManager {

    constructor(player) {

        this.player =
            player;

        this.scene =
            player.scene;

        this.playerControls =
            player.playerControls;

        this.inventory =
            new WeaponInventory();

        this.weapon =
            null;

        this.triggerWasDown =
            false;

        this.reloadEvent =
            null;

    }

    update() {

        if (
            !this.player ||
            !this.weapon
        ) {

            return;

        }

        this.handleWeaponSwitch();

        this.handleReload();

        this.handleFireInput();

    }

    // =====================================
    // INVENTORY
    // =====================================

    add(
        type,
        skin = null
    ) {

        const weapon =
            WeaponFactory.create(
                type,
                skin
            );

        if (!weapon) {

            return null;

        }

        const added =
            this.inventory.add(
                weapon
            );

        if (
            added &&
            !this.weapon
        ) {

            this.weapon =
                weapon;

        }

        return weapon;

    }

    equip(
        type,
        skin = null
    ) {

        let weapon =
            this.inventory.get(
                type
            );

        if (!weapon) {

            weapon =
                this.add(
                    type,
                    skin
                );

        }

        if (!weapon) {

            console.warn(
                `[WeaponManager] Não foi possível equipar "${type}".`
            );

            return null;

        }

        this.cancelReload();

        this.inventory.select(
            type
        );

        this.weapon =
            weapon;

        return weapon;

    }

    next() {

        const weapon =
            this.inventory.next();

        if (!weapon) {

            return null;

        }

        this.cancelReload();

        this.weapon =
            weapon;

        return weapon;

    }

    previous() {

        const weapon =
            this.inventory.previous();

        if (!weapon) {

            return null;

        }

        this.cancelReload();

        this.weapon =
            weapon;

        return weapon;

    }

    getWeapon() {

        return this.weapon;

    }

    // =====================================
    // INPUT
    // =====================================

    getControls() {

        /*
         * Rebusca a referência no Player.
         *
         * Isso também protege contra
         * mudanças durante inicialização.
         */

        if (
            !this.playerControls &&
            this.player
        ) {

            this.playerControls =
                this.player.playerControls;

        }

        return this.playerControls;

    }

    handleWeaponSwitch() {

        const controls =
            this.getControls();

        if (!controls) {

            return;

        }

        if (
            typeof controls.weaponNext ===
                "function" &&
            controls.weaponNext()
        ) {

            this.next();

        }

        if (
            typeof controls.weaponPrevious ===
                "function" &&
            controls.weaponPrevious()
        ) {

            this.previous();

        }

    }

    handleReload() {

        const controls =
            this.getControls();

        if (
            !controls ||
            typeof controls.reload !==
                "function"
        ) {

            return;

        }

        if (controls.reload()) {

            this.reload();

        }

    }

    handleFireInput() {

        const controls =
            this.getControls();

        if (
            !controls ||
            typeof controls.fire !==
                "function"
        ) {

            return;

        }

        const triggerDown =
            controls.fire();

        if (!triggerDown) {

            this.triggerWasDown =
                false;

            return;

        }

        if (!this.weapon) {

            return;

        }

        const shouldShoot =

            this.weapon.automatic ||

            !this.triggerWasDown;

        this.triggerWasDown =
            true;

        if (!shouldShoot) {

            return;

        }

        this.tryFire();

    }

    // =====================================
    // SHOOTING
    // =====================================

    tryFire() {

        const weapon =
            this.weapon;

        if (!weapon) {

            return false;

        }

        const now =
            this.scene.time.now;

        if (
            !weapon.canShoot(
                now
            )
        ) {

            if (
                weapon.usesAmmo() &&
                weapon.ammo <= 0
            ) {

                this.reload();

            }

            return false;

        }

        const renderer =
            this.player
                .weaponRenderer;

        if (!renderer) {

            return false;

        }

        const muzzle =
            renderer
                .getMuzzlePosition();

        if (!muzzle) {

            return false;

        }

        const projectileSystem =
            this.scene
                .projectileSystem;

        if (!projectileSystem) {

            console.warn(
                "[WeaponManager] ProjectileSystem não encontrado."
            );

            return false;

        }

        weapon.registerShot(
            now
        );

        projectileSystem.fireWeapon(

            this.player,

            weapon,

            muzzle

        );

        return true;

    }

    // =====================================
    // RELOAD
    // =====================================

    reload() {

        const weapon =
            this.weapon;

        if (
            !weapon ||
            weapon.reloading ||
            !weapon.needsReload()
        ) {

            return false;

        }

        weapon.reloading =
            true;

        this.reloadEvent =
            this.scene.time.delayedCall(

                weapon.reloadTime,

                () => {

                    weapon.reload();

                    weapon.reloading =
                        false;

                    this.reloadEvent =
                        null;

                }

            );

        return true;

    }

    cancelReload() {

        if (
            this.reloadEvent
        ) {

            this.reloadEvent.remove(
                false
            );

            this.reloadEvent =
                null;

        }

        if (
            this.weapon
        ) {

            this.weapon.reloading =
                false;

        }

    }

    destroy() {

        this.cancelReload();

        if (
            this.inventory
        ) {

            this.inventory
                .weapons
                .length = 0;

        }

        this.weapon = null;

        this.playerControls = null;

        this.player = null;

        this.scene = null;

    }

}