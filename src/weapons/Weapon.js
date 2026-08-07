import ShootSocket from "../entities/player/sockets/ShootSocket.js";

import GripSocket from "./sockets/GripSocket.js";
import MuzzleSocket from "./sockets/MuzzleSocket.js";

export default class Weapon {

    constructor(
        data,
        skin = null
    ) {

        if (!data) {

            throw new Error(
                "Weapon: dados obrigatórios."
            );

        }

        // =====================================
        // IDENTITY
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
        // DAMAGE / FIRE
        // =====================================

        this.damage =
            data.damage ?? 0;

        this.fireRate =
            data.fireRate ?? 250;

        this.bulletSpeed =
            data.bulletSpeed ?? 900;

        this.pellets =
            data.pellets ?? 1;

        this.spread =
            data.spread ?? 0;

        this.recoil =
            data.recoil ?? 0;

        this.automatic =
            data.automatic ?? false;

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
            data.magazine ?? 0;

        this.ammo =
            this.magazineSize;

        this.reserveAmmo =
            data.reserveAmmo ?? 0;

        this.reloadTime =
            data.reloadTime ?? 0;

        // =====================================
        // VISUAL DATABASE
        // =====================================

        this.defaultVisual =
            data.visual ?? {};

        this.skinVisuals =
            data.skins ?? {};

        // =====================================
        // WEAPON SOCKETS
        // =====================================

        const visual =
            this.getVisualData();

        this.gripSocket =
            new GripSocket(
                visual.grip.x,
                visual.grip.y
            );

        this.muzzleSocket =
            new MuzzleSocket(
                visual.muzzle.x,
                visual.muzzle.y
            );

        /*
         * Mantemos temporariamente porque
         * partes antigas do projeto podem
         * ainda utilizar ShootSocket.
         */
        this.shootSocket =
            new ShootSocket();

        // =====================================
        // STATE
        // =====================================

        this.reloading =
            false;

        this.lastShotTime =
            -Infinity;

    }

    // =====================================
    // RAW VISUAL DATA
    // =====================================

    getVisualData() {

        const skinVisual =
            this.skin !== null
                ? this.skinVisuals[
                    String(this.skin)
                ]
                : null;

        return {

            targetWidth:

                skinVisual?.targetWidth ??

                this.defaultVisual
                    ?.targetWidth ??

                42,

            rotationOffset:

                skinVisual?.rotationOffset ??

                this.defaultVisual
                    ?.rotationOffset ??

                0,

            grip: {

                x:

                    skinVisual?.grip?.x ??

                    this.defaultVisual
                        ?.grip?.x ??

                    0.28,

                y:

                    skinVisual?.grip?.y ??

                    this.defaultVisual
                        ?.grip?.y ??

                    0.72

            },

            muzzle: {

                x:

                    skinVisual?.muzzle?.x ??

                    this.defaultVisual
                        ?.muzzle?.x ??

                    0.85,

                y:

                    skinVisual?.muzzle?.y ??

                    this.defaultVisual
                        ?.muzzle?.y ??

                    0.30

            }

        };

    }

    // =====================================
    // VISUAL
    // =====================================

    getVisual() {

        const visual =
            this.getVisualData();

        /*
         * Atualiza os sockets caso
         * a skin da arma mude.
         */

        this.gripSocket.set(
            visual.grip.x,
            visual.grip.y
        );

        this.muzzleSocket.set(
            visual.muzzle.x,
            visual.muzzle.y
        );

        return {

            targetWidth:
                visual.targetWidth,

            rotationOffset:
                visual.rotationOffset,

            grip:
                this.gripSocket,

            muzzle:
                this.muzzleSocket

        };

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