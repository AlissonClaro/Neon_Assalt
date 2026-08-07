import WeaponFactory from "./WeaponFactory.js";
import WeaponInventory from "./WeaponInventory.js";

export default class WeaponManager {

    constructor(player) {

        this.player = player;

        this.scene = player.scene;

        this.inventory =
            new WeaponInventory();

        this.weapon = null;

        this.triggerWasDown =
            false;

        this.reloadEvent =
            null;

    }

    update() {

        if (!this.weapon) {
            return;
        }

        this.handleWeaponSwitch();

        this.handleReload();

        this.handleFireInput();

    }

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
            this.inventory.get(type);

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

        this.inventory.select(
            type
        );

        this.cancelReload();

        this.weapon =
            weapon;

        return weapon;

    }

    next() {

        const weapon =
            this.inventory.next();

        if (weapon) {

            this.cancelReload();

            this.weapon =
                weapon;

        }

        return weapon;

    }

    previous() {

        const weapon =
            this.inventory.previous();

        if (weapon) {

            this.cancelReload();

            this.weapon =
                weapon;

        }

        return weapon;

    }

    getWeapon() {

        return this.weapon;

    }

    handleWeaponSwitch() {

        if (
            this.player.input.weaponNext()
        ) {

            this.next();

        }

        if (
            this.player.input.weaponPrevious()
        ) {

            this.previous();

        }

    }

    handleReload() {

        if (
            this.player.input.reload()
        ) {

            this.reload();

        }

    }

    handleFireInput() {

        const triggerDown =
            this.player.input.fire();

        if (!triggerDown) {

            this.triggerWasDown =
                false;

            return;

        }

        const weapon =
            this.weapon;

        if (!weapon) {
            return;
        }

        const shouldShoot =
            weapon.automatic ||
            !this.triggerWasDown;

        this.triggerWasDown =
            true;

        if (!shouldShoot) {
            return;
        }

        this.tryFire();

    }

    tryFire() {

        const weapon =
            this.weapon;

        if (!weapon) {
            return false;
        }

        const time =
            this.scene.time.now;

        if (
            !weapon.canShoot(time)
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
            this.player.weaponRenderer;

        const projectileSystem =
            this.scene.projectileSystem;

        if (
            !renderer ||
            !projectileSystem
        ) {

            return false;

        }

        const muzzle =
            renderer.getMuzzlePosition();

        if (!muzzle) {
            return false;
        }

        weapon.registerShot(
            time
        );

        projectileSystem.fireWeapon(
            this.player,
            weapon,
            muzzle
        );

        return true;

    }

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

        if (this.reloadEvent) {

            this.reloadEvent.remove(
                false
            );

            this.reloadEvent =
                null;

        }

        if (this.weapon) {

            this.weapon.reloading =
                false;

        }

    }

    destroy() {

        this.cancelReload();

        this.inventory.weapons.length =
            0;

        this.weapon =
            null;

    }

}