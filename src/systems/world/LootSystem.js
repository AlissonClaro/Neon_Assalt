import ItemFactory
    from "../../items/ItemFactory.js";

export default class LootSystem {

    static generate(
        lootTable,
        rolls = 1
    ) {

        if (!lootTable) {

            return [];

        }

        const result = [];

        const totalRolls =
            Math.max(
                0,
                rolls
            );

        for (
            let i = 0;
            i < totalRolls;
            i++
        ) {

            const roll =
                lootTable.roll();

            if (!roll) {

                continue;

            }

            const item =
                ItemFactory.create(

                    roll.item,

                    roll.quantity

                );

            if (item) {

                result.push(
                    item
                );

            }

        }

        return result;

    }

    static giveTo(
        owner,
        items
    ) {

        if (
            !owner?.inventory ||
            !Array.isArray(items)
        ) {

            return false;

        }

        let allAdded =
            true;

        for (
            const item
            of items
        ) {

            const added =
                owner.inventory
                    .addItem(item);

            if (!added) {

                allAdded =
                    false;

            }

        }

        return allAdded;

    }

}