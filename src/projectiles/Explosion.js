export default class Explosion {

    constructor(
        scene,
        x,
        y,
        {
            radius = 120,
            damage = 100,
            owner = null
        } = {}
    ) {

        this.scene = scene;

        this.x = x;
        this.y = y;

        this.radius = radius;
        this.damage = damage;

        this.owner = owner;

        this.active = true;

    }

    contains(
        targetX,
        targetY
    ) {

        const dx =
            targetX - this.x;

        const dy =
            targetY - this.y;

        return (
            dx * dx +
            dy * dy
            <=
            this.radius *
            this.radius
        );

    }

    destroy() {

        this.active = false;

    }

}