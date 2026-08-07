import GripSocket from "./sockets/GripSocket.js";
import MuzzleSocket from "./sockets/MuzzleSocket.js";

export default class Weapon {

    constructor(
        data,
        skin = null
    ) {

        if (!data) {

            throw new Error(
                "Weapon: dados da arma são obrigatórios."
            );

        }

        // =====================================
        // ID
        // =====================================

        this.id =
            data.id;

        this.name =
            data.name ??
            data.id;

        this.category =
            data.category ??
            "firearm";

        this.skin =
            skin !== null
                ? String(skin)
                : null;

        // =====================================
        // GAMEPLAY
        // =====================================

        this.damage =
            data.damage ?? 0;

        this.fireRate =
            data.fireRate ?? 250;

        this.bulletSpeed =
            data.bulletSpeed ?? 900;

        this.automatic =
            data.automatic ?? false;

        this.pellets =
            data.pellets ?? 1;

        this.spread =
            data.spread ?? 0;

        this.recoil =
            data.recoil ?? 0;

        // =====================================
        // PROJECTILE
        // =====================================

        this.bullet =
            data.bullet ??
            null;

        this.bulletVisual = {

            targetWidth:
                data.bulletVisual
                    ?.targetWidth ??
                22

        };

        // =====================================
        // AMMO
        // =====================================

        this.magazineSize =
            Math.max(
                0,
                data.magazine ?? 0
            );

        this.ammo =
            this.magazineSize;

        this.reserveAmmo =
            Math.max(
                0,
                data.reserveAmmo ?? 0
            );

        this.reloadTime =
            Math.max(
                0,
                data.reloadTime ?? 0
            );

        // =====================================
        // VISUAL
        // =====================================

        this.defaultVisual =
            data.visual ?? {};

        this.skinVisuals =
            data.skins ?? {};

        // =====================================
        // SOCKETS
        // =====================================

        this.gripSocket =
            new GripSocket();

        this.muzzleSocket =
            new MuzzleSocket();

        this.updateSockets();

        // =====================================
        // STATE
        // =====================================

        this.reloading =
            false;

        this.lastShotTime =
            -Infinity;

    }

    // =====================================
    // VISUAL
    // =====================================

    getSkinVisual() {

        if (
            this.skin === null
        ) {

            return null;

        }

        return (
            this.skinVisuals[
                String(this.skin)
            ] ??
            null
        );

    }

    getVisual() {

        const skin =
            this.getSkinVisual();

        return {

            targetWidth:

                skin?.targetWidth ??

                this.defaultVisual
                    ?.targetWidth ??

                42,

            rotationOffset:

                skin?.rotationOffset ??

                this.defaultVisual
                    ?.rotationOffset ??

                0,

            grip: {

                x:

                    skin?.grip?.x ??

                    this.defaultVisual
                        ?.grip?.x ??

                    0,

                y:

                    skin?.grip?.y ??

                    this.defaultVisual
                        ?.grip?.y ??

                    0

            },

            muzzle: {

                x:

                    skin?.muzzle?.x ??

                    this.defaultVisual
                        ?.muzzle?.x ??

                    0,

                y:

                    skin?.muzzle?.y ??

                    this.defaultVisual
                        ?.muzzle?.y ??

                    0

            }

        };

    }

    updateSockets() {

        const visual =
            this.getVisual();

        this.gripSocket.set(
            visual.grip.x,
            visual.grip.y
        );

        this.muzzleSocket.set(
            visual.muzzle.x,
            visual.muzzle.y
        );

    }

    getGripSocket() {

        this.updateSockets();

        return this.gripSocket;

    }

    getMuzzleSocket() {

        this.updateSockets();

        return this.muzzleSocket;

    }

    // =====================================
    // TYPE
    // =====================================

    isMelee() {

        return (
            this.category ===
            "melee"
        );

    }

    isFirearm() {

        return (
            this.category ===
            "firearm"
        );

    }

    isEnergy() {

        return (
            this.category ===
            "energy"
        );

    }

    isExplosive() {

        return (
            this.category ===
            "explosive"
        );

    }

    usesAmmo() {

        return (
            this.magazineSize > 0
        );

    }

    // =====================================
    // SHOOT
    // =====================================

    canShoot(time) {

        if (
            this.reloading
        ) {

            return false;

        }

        if (
            this.usesAmmo() &&
            this.ammo <= 0
        ) {

            return false;

        }

        return (

            time -
            this.lastShotTime >=
            this.fireRate

        );

    }

    registerShot(time) {

        this.lastShotTime =
            time;

        if (
            this.usesAmmo()
        ) {

            this.ammo =
                Math.max(
                    0,
                    this.ammo - 1
                );

        }

    }

    // =====================================
    // RELOAD
    // =====================================

    needsReload() {

        return (

            this.usesAmmo() &&

            this.ammo <
                this.magazineSize &&

            this.reserveAmmo > 0

        );

    }

    reload() {

        if (
            !this.needsReload()
        ) {

            return false;

        }

        const missing =
            this.magazineSize -
            this.ammo;

        const amount =
            Math.min(
                missing,
                this.reserveAmmo
            );

        this.ammo +=
            amount;

        this.reserveAmmo -=
            amount;

        return true;

    }

}