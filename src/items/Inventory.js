export default class Inventory {

    constructor(
        capacity = 30
    ) {

        this.capacity =
            Math.max(
                1,
                capacity
            );

        this.slots = [];

    }

    add(item) {

        if (!item) {

            return false;

        }

        let remaining =
            item.quantity;

        // =====================================
        // STACK EXISTENTE
        // =====================================

        if (item.stackable) {

            for (
                const slot
                of this.slots
            ) {

                if (
                    slot.id !== item.id ||
                    slot.quantity >=
                        slot.maxStack
                ) {

                    continue;

                }

                const available =
                    slot.maxStack -
                    slot.quantity;

                const amount =
                    Math.min(
                        available,
                        remaining
                    );

                slot.quantity +=
                    amount;

                remaining -=
                    amount;

                if (
                    remaining <= 0
                ) {

                    return true;

                }

            }

        }

        // =====================================
        // NOVOS SLOTS
        // =====================================

        while (
            remaining > 0
        ) {

            if (
                this.slots.length >=
                this.capacity
            ) {

                return false;

            }

            const amount =
                item.stackable

                    ? Math.min(
                        remaining,
                        item.maxStack
                    )

                    : 1;

            this.slots.push(

                item.clone(
                    amount
                )

            );

            remaining -=
                amount;

        }

        return true;

    }

    remove(
        id,
        quantity = 1
    ) {

        let remaining =
            Math.max(
                1,
                quantity
            );

        for (
            let i =
                this.slots.length - 1;

            i >= 0;

            i--
        ) {

            const slot =
                this.slots[i];

            if (
                slot.id !== id
            ) {

                continue;

            }

            const amount =
                Math.min(
                    slot.quantity,
                    remaining
                );

            slot.quantity -=
                amount;

            remaining -=
                amount;

            if (
                slot.quantity <= 0
            ) {

                this.slots.splice(
                    i,
                    1
                );

            }

            if (
                remaining <= 0
            ) {

                return true;

            }

        }

        return false;

    }

    count(id) {

        return this.slots

            .filter(
                item =>
                    item.id === id
            )

            .reduce(
                (
                    total,
                    item
                ) =>
                    total +
                    item.quantity,

                0
            );

    }

    has(
        id,
        quantity = 1
    ) {

        return (
            this.count(id) >=
            quantity
        );

    }

    get(id) {

        return (

            this.slots.find(
                item =>
                    item.id === id
            ) ??

            null

        );

    }

    isFull() {

        return (
            this.slots.length >=
            this.capacity
        );

    }

    clear() {

        this.slots.length =
            0;

    }

    getAll() {

        return [
            ...this.slots
        ];

    }

}