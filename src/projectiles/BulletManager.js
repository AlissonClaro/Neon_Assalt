import Phaser from "phaser";
import Bullet from "./Bullet.js";


export default class BulletManager {

    constructor(
        scene,
        maxSize = 150
    ) {

        this.scene = scene;

        this.group =
            scene.physics.add.group({

                classType: Bullet,

                maxSize,

                runChildUpdate: true

            });

    }

    fire(config) {

        const bullet =
            this.group.get();

        if (!bullet) {

            return null;

        }

        bullet.fire(config);

        return bullet;

    }

    fireWeapon(
        player,
        weapon,
        muzzle
    ) {

        if (
            !player ||
            !weapon ||
            !muzzle
        ) {

            return [];

        }

        if (weapon.isMelee()) {

            return [];

        }

        const projectiles = [];

        const pellets =
            Math.max(
                1,
                weapon.pellets ?? 1
            );

        const spread =
            weapon.spread ?? 0;

        for (
            let i = 0;
            i < pellets;
            i++
        ) {

            const angle =
                this.applySpread(
                    muzzle.angle,
                    spread
                );

            const bullet =
                this.fire({

                    x: muzzle.x,
                    y: muzzle.y,

                    angle,

                    speed:
                        weapon.bulletSpeed,

                    damage:
                        weapon.damage,

                    owner:
                        player,

                    texture:
                        weapon.bullet ??
                        "bullet_default"

                });

            if (bullet) {

                projectiles.push(
                    bullet
                );

            }

        }

        return projectiles;

    }

    applySpread(
        angle,
        spreadDegrees
    ) {

        if (!spreadDegrees) {

            return angle;

        }

        const half =
            spreadDegrees / 2;

        const randomDegrees =
            Phaser.Math.FloatBetween(
                -half,
                half
            );

        return (
            angle +
            Phaser.Math.DegToRad(
                randomDegrees
            )
        );

    }

    clear() {

        this.group.children.each(
            bullet => {

                if (
                    bullet &&
                    bullet.active &&
                    typeof bullet.kill ===
                    "function"
                ) {

                    bullet.kill();

                }

            }
        );

    }

    destroy() {

        this.clear();

        this.group.destroy(
            true
        );

    }

}