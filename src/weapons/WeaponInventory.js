export default class WeaponInventory {

    constructor() {

        this.weapons = [];

        this.currentIndex = 0;

    }

    add(weapon) {

        if (!this.weapons.includes(weapon)) {

            this.weapons.push(weapon);

        }

    }

    current() {

        return this.weapons[this.currentIndex];

    }

    next() {

        if (this.weapons.length === 0) return null;

        this.currentIndex++;

        if (this.currentIndex >= this.weapons.length) {

            this.currentIndex = 0;

        }

        return this.current();

    }

    previous() {

        if (this.weapons.length === 0) return null;

        this.currentIndex--;

        if (this.currentIndex < 0) {

            this.currentIndex = this.weapons.length - 1;

        }

        return this.current();

    }

}