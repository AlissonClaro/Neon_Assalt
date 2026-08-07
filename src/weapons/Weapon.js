import ShootSocket from "../entities/player/sockets/ShootSocket.js";

export default class Weapon {

    constructor(data, skin = null) {

        if (!data) {

            throw new Error(
                "Weapon: dados da arma são obrigatórios."
            );

        }

        this.id = data.id;

        this.name =
            data.name ?? data.id;

        this.category =
            data.category ?? "firearm";

        // =====================================
        // DAMAGE
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

        this.bullet =
            data.bullet ?? null;

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
        // STATE
        // =====================================

        this.skin =
            skin;

        this.reloading =
            false;

        this.lastShotTime =
            -Infinity;

        // =====================================
        // SOCKET
        // =====================================

        this.shootSocket =
            new ShootSocket();

    }

    isMelee() {

        return (
            this.category === "melee"
        );

    }

    usesAmmo() {

        return (
            this.magazineSize > 0
        );

    }

    canShoot(time) {

        if (this.reloading) {

            return false;

        }

        if (
            this.usesAmmo() &&
            this.ammo <= 0
        ) {

            return false;

        }

        return (
            time - this.lastShotTime >=
            this.fireRate
        );

    }

    registerShot(time) {

        this.lastShotTime = time;

        if (this.usesAmmo()) {

            this.ammo = Math.max(
                0,
                this.ammo - 1
            );

        }

    }

    needsReload() {

        return (
            this.usesAmmo() &&
            this.ammo < this.magazineSize &&
            this.reserveAmmo > 0
        );

    }

    reload() {

        if (!this.needsReload()) {

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

        this.ammo += amount;

        this.reserveAmmo -= amount;

        return true;

    }

}