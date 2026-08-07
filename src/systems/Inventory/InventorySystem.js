import ItemManager
    from "../../items/ItemManager.js";

export default class InventorySystem {

    static addItem(
        owner,
        itemId,
        quantity = 1
    ) {

        if (
            !owner?.inventory
        ) {

            return false;

        }

        return ItemManager.give(

            owner.inventory,

            itemId,

            quantity

        );

    }

    static removeItem(
        owner,
        itemId,
        quantity = 1
    ) {

        if (
            !owner?.inventory
        ) {

            return false;

        }

        return owner.inventory
            .removeItem(

                itemId,

                quantity

            );

    }

    static hasItem(
        owner,
        itemId,
        quantity = 1
    ) {

        if (
            !owner?.inventory
        ) {

            return false;

        }

        return owner.inventory
            .hasItem(

                itemId,

                quantity

            );

    }

    static countItem(
        owner,
        itemId
    ) {

        if (
            !owner?.inventory
        ) {

            return 0;

        }

        return owner.inventory
            .countItem(
                itemId
            );

    }

}