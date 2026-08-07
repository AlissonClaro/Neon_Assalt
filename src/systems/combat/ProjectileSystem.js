import BulletManager from "../../projectiles/BulletManager.js";

export default class ProjectileSystem {

    constructor(scene) {

        this.scene = scene;

        this.bullets =
            new BulletManager(scene);

    }

    fireWeapon(
        player,
        weapon,
        muzzle
    ) {

        return this.bullets.fireWeapon(
            player,
            weapon,
            muzzle
        );

    }

    getGroup() {

        return this.bullets.group;

    }

    clear() {

        this.bullets.clear();

    }

    destroy() {

        this.bullets.destroy();

    }

}