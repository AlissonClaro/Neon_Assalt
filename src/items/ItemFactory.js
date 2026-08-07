import Item from "./Item.js";

import ItemDatabase
    from "./ItemDatabase.js";

export default class ItemFactory {

    static create(
        id,
        quantity = 1
    ) {

        const data =
            ItemDatabase[id];

        if (!data) {

            console.warn(
                `[ItemFactory] Item inexistente: ${id}`
            );

            return null;

        }

        return new Item({

            ...data,

            quantity

        });

    }

}