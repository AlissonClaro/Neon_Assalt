const VALID_SLOTS =
    Object.freeze([

        "primary",
        "secondary",
        "melee"

    ]);

export default class EquipmentSystem {

    static equip(
        owner,
        slot,
        equipment
    ) {

        if (
            !owner?.inventory ||
            !VALID_SLOTS.includes(slot)
        ) {

            return false;

        }

        owner.inventory[slot] =
            equipment;

        return true;

    }

    static unequip(
        owner,
        slot
    ) {

        if (
            !owner?.inventory ||
            !VALID_SLOTS.includes(slot)
        ) {

            return null;

        }

        const previous =
            owner.inventory[slot];

        owner.inventory[slot] =
            null;

        return previous;
    }

    static get(
        owner,
        slot
    ) {

        if (
            !owner?.inventory ||
            !VALID_SLOTS.includes(slot)
        ) {

            return null;

        }

        return (
            owner.inventory[slot] ??
            null
        );

    }

    static getSlots() {

        return [
            ...VALID_SLOTS
        ];

    }

}