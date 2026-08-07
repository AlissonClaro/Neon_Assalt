export default class DamageSystem {

    static apply(
        target,
        amount,
        source = null
    ) {

        if (
            !target ||
            !target.health
        ) {

            return false;

        }

        const damage =
            Math.max(
                0,
                Number(amount) || 0
            );

        if (damage <= 0) {

            return false;

        }

        target.health.damage(
            damage
        );

        if (
            target.health.isDead()
        ) {

            this.handleDeath(
                target,
                source
            );

        }

        return true;

    }

    static heal(
        target,
        amount
    ) {

        if (
            !target ||
            !target.health
        ) {

            return false;

        }

        target.health.heal(
            amount
        );

        return true;

    }

    static handleDeath(
        target,
        source = null
    ) {

        if (
            typeof target.die ===
            "function"
        ) {

            target.die(
                source
            );

            return;

        }

        if (
            typeof target.destroy ===
            "function"
        ) {

            target.destroy();

        }

    }

}