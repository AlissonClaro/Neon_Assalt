export default class WeaponInventory {

    constructor() {

        this.weapons = [];

        this.currentIndex = -1;

    }

    add(weapon) {

        if (!weapon) {

            return false;

        }

        const alreadyExists =
            this.weapons.some(

                item =>
                    item.id === weapon.id

            );

        if (alreadyExists) {

            return false;

        }

        this.weapons.push(
            weapon
        );

        if (
            this.currentIndex === -1
        ) {

            this.currentIndex = 0;

        }

        return true;

    }

    remove(type) {

        const index =
            this.weapons.findIndex(

                weapon =>
                    weapon.id === type

            );

        if (index === -1) {

            return false;

        }

        this.weapons.splice(
            index,
            1
        );

        if (
            this.weapons.length === 0
        ) {

            this.currentIndex = -1;

            return true;

        }

        if (
            this.currentIndex >=
            this.weapons.length
        ) {

            this.currentIndex = 0;

        }

        return true;

    }

    has(type) {

        return this.weapons.some(

            weapon =>
                weapon.id === type

        );

    }

    get(type) {

        return this.weapons.find(

            weapon =>
                weapon.id === type

        ) ?? null;

    }

    current() {

        if (
            this.currentIndex < 0 ||
            this.weapons.length === 0
        ) {

            return null;

        }

        return (
            this.weapons[
                this.currentIndex
            ] ?? null
        );

    }

    next() {

        if (
            this.weapons.length === 0
        ) {

            return null;

        }

        this.currentIndex =
            (
                this.currentIndex + 1
            ) %
            this.weapons.length;

        return this.current();

    }

    previous() {

        if (
            this.weapons.length === 0
        ) {

            return null;

        }

        this.currentIndex--;

        if (
            this.currentIndex < 0
        ) {

            this.currentIndex =
                this.weapons.length - 1;

        }

        return this.current();

    }

    select(type) {

        const index =
            this.weapons.findIndex(

                weapon =>
                    weapon.id === type

            );

        if (index === -1) {

            return null;

        }

        this.currentIndex =
            index;

        return this.current();

    }

    all() {

        return [
            ...this.weapons
        ];

    }

}