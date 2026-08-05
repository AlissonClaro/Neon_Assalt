export default class PlayerHealth {

    constructor(max = 100) {

        this.max = max;

        this.current = max;

    }

    damage(value) {

        this.current -= value;

        if (this.current < 0)
            this.current = 0;

    }

    heal(value) {

        this.current += value;

        if (this.current > this.max)
            this.current = this.max;

    }

}