export default class LootTable {

    constructor(
        entries = []
    ) {

        this.entries = [
            ...entries
        ];

    }

    add({
        item,
        weight = 1,
        min = 1,
        max = 1
    }) {

        if (!item) {

            return this;

        }

        this.entries.push({

            item,

            weight:
                Math.max(
                    0,
                    weight
                ),

            min:
                Math.max(
                    1,
                    min
                ),

            max:
                Math.max(
                    min,
                    max
                )

        });

        return this;

    }

    roll() {

        const valid =
            this.entries.filter(

                entry =>
                    entry.weight > 0

            );

        if (
            valid.length === 0
        ) {

            return null;

        }

        const totalWeight =
            valid.reduce(

                (
                    total,
                    entry
                ) =>
                    total +
                    entry.weight,

                0
            );

        let random =
            Math.random() *
            totalWeight;

        for (
            const entry
            of valid
        ) {

            random -=
                entry.weight;

            if (
                random <= 0
            ) {

                const quantity =
                    this.randomInt(

                        entry.min,

                        entry.max

                    );

                return {

                    item:
                        entry.item,

                    quantity

                };

            }

        }

        return null;

    }

    randomInt(
        min,
        max
    ) {

        return (

            Math.floor(

                Math.random() *
                (
                    max -
                    min +
                    1
                )

            ) +

            min

        );

    }

}