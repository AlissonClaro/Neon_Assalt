import Bullet from "./Bullet.js";

export default class BulletManager {

    constructor(scene) {

        this.scene = scene;

        this.group = scene.physics.add.group({

            classType: Bullet,

            maxSize: 100,

            runChildUpdate: true

        });

    }

    fire(x, y, angle, speed, damage) {

        const bullet = this.group.get();

        if (!bullet)
            return;

        bullet.fire(

            x,
            y,
            angle,
            speed,
            damage

        );

    }

}