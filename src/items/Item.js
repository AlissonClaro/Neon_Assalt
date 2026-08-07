export default class Item {

    constructor({
        id,
        name,
        type = "misc",
        description = "",
        stackable = true,
        maxStack = 99,
        quantity = 1,
        value = 0,
        data = {}
    }) {

        if (!id) {

            throw new Error(
                "Item: o campo 'id' é obrigatório."
            );

        }

        this.id = id;

        this.name =
            name ?? id;

        this.type =
            type;

        this.description =
            description;

        this.stackable =
            stackable;

        this.maxStack =
            stackable
                ? Math.max(1, maxStack)
                : 1;

        this.quantity =
            Math.max(
                1,
                quantity
            );

        this.value =
            Math.max(
                0,
                value
            );

        this.data = {
            ...data
        };

    }

    clone(quantity = this.quantity) {

        return new Item({

            id: this.id,

            name: this.name,

            type: this.type,

            description:
                this.description,

            stackable:
                this.stackable,

            maxStack:
                this.maxStack,

            quantity,

            value:
                this.value,

            data: {
                ...this.data
            }

        });

    }

}