import ItemFactory
    from "./ItemFactory.js";

export default class ItemManager {

    static create(
        id,
        quantity = 1
    ) {

        return ItemFactory.create(
            id,
            quantity
        );

    }

    static give(
        inventory,
        id,
        quantity = 1
    ) {

        if (!inventory) {

            return false;

        }

        const item =
            ItemFactory.create(
                id,
                quantity
            );

        if (!item) {

            return false;

        }

        if (
            typeof inventory.addItem ===
            "function"
        ) {

            return inventory.addItem(
                item
            );

        }

        if (
            typeof inventory.add ===
            "function"
        ) {

            return inventory.add(
                item
            );

        }

        console.warn(
            "[ItemManager] Inventário inválido."
        );

        return false;

    }

}