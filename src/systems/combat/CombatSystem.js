import ProjectileSystem
    from "./ProjectileSystem.js";

import CollisionSystem
    from "./CollisionSystem.js";

import DamageSystem
    from "./DamageSystem.js";

export default class CombatSystem {

    constructor(scene) {

        this.scene =
            scene;

        this.projectiles =
            new ProjectileSystem(
                scene
            );

        this.collisions =
            new CollisionSystem(
                scene
            );

    }

    getProjectileSystem() {

        return this.projectiles;

    }

    getProjectileGroup() {

        return this.projectiles
            .getGroup();

    }

    damage(
        target,
        amount,
        source = null
    ) {

        return DamageSystem.apply(

            target,
            amount,
            source

        );

    }

    heal(
        target,
        amount
    ) {

        return DamageSystem.heal(

            target,
            amount

        );

    }

    destroy() {

        if (this.collisions) {

            this.collisions.destroy();

        }

        if (this.projectiles) {

            this.projectiles.destroy();

        }

        this.collisions =
            null;

        this.projectiles =
            null;

    }

}