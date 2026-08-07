import DamageSystem
    from "./DamageSystem.js";

export default class CollisionSystem {

    constructor(scene) {

        this.scene =
            scene;

        this.colliders = [];

    }

    addPlayerGround(
        player,
        ground
    ) {

        if (
            !player ||
            !ground
        ) {

            return null;

        }

        const collider =
            this.scene.physics.add.collider(

                player,
                ground

            );

        this.colliders.push(
            collider
        );

        return collider;

    }

    addProjectileEnemies(
        projectiles,
        enemies
    ) {

        if (
            !projectiles ||
            !enemies
        ) {

            return null;

        }

        const collider =
            this.scene.physics.add.overlap(

                projectiles,
                enemies,

                this.handleProjectileHit,

                undefined,

                this

            );

        this.colliders.push(
            collider
        );

        return collider;

    }

    handleProjectileHit(
        bullet,
        enemy
    ) {

        if (
            !bullet?.active ||
            !enemy?.active
        ) {

            return;

        }

        /*
         * Impede que o projétil
         * acerte o próprio dono.
         */

        if (
            bullet.owner === enemy
        ) {

            return;

        }

        DamageSystem.apply(

            enemy,

            bullet.damage,

            bullet.owner

        );

        if (
            typeof bullet.kill ===
            "function"
        ) {

            bullet.kill();

        }

    }

    destroy() {

        this.colliders.forEach(

            collider => {

                if (collider) {

                    collider.destroy();

                }

            }

        );

        this.colliders.length =
            0;

    }

}