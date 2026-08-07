export default class PlayerHealth {

    constructor(
        max = 100
    ) {

        this.max =
            Math.max(
                1,
                max
            );

        this.current =
            this.max;

    }

    damage(value) {

        const amount =
            Math.max(
                0,
                Number(value) || 0
            );

        this.current =
            Math.max(

                0,

                this.current -
                amount

            );

        return this.current;

    }

    heal(value) {

        const amount =
            Math.max(
                0,
                Number(value) || 0
            );

        this.current =
            Math.min(

                this.max,

                this.current +
                amount

            );

        return this.current;

    }

    setMax(
        value,
        refill = false
    ) {

        this.max =
            Math.max(
                1,
                value
            );

        if (refill) {

            this.current =
                this.max;

            return;

        }

        this.current =
            Math.min(

                this.current,
                this.max

            );

    }

    isDead() {

        return (
            this.current <= 0
        );

    }

    isFull() {

        return (
            this.current >=
            this.max
        );

    }

    ratio() {

        return (
            this.current /
            this.max
        );

    }

}