import Inventory
    from "../../items/Inventory.js";

export default class PlayerInventory {

    constructor(
        capacity = 30
    ) {

        // =====================================
        // ITEMS
        // =====================================

        this.items =
            new Inventory(
                capacity
            );

        // =====================================
        // EQUIPMENT SLOTS
        // =====================================

        this.primary = null;

        this.secondary = null;

        this.melee = null;

        // =====================================
        // THROWABLE
        // =====================================

        this.grenades = 0;

    }

    addItem(item) {

        return this.items.add(
            item
        );

    }

    removeItem(
        id,
        quantity = 1
    ) {

        return this.items.remove(
            id,
            quantity
        );

    }

    hasItem(
        id,
        quantity = 1
    ) {

        return this.items.has(
            id,
            quantity
        );

    }

    countItem(id) {

        return this.items.count(
            id
        );

    }

    getItems() {

        return this.items.getAll();

    }

}