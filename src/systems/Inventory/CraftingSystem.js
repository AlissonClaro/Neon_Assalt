import ItemFactory
    from "../../items/ItemFactory.js";

export default class CraftingSystem {

    constructor() {

        this.recipes =
            new Map();

    }

    register(
        id,
        recipe
    ) {

        if (
            !id ||
            !recipe
        ) {

            return false;

        }

        this.recipes.set(
            id,
            recipe
        );

        return true;

    }

    canCraft(
        inventory,
        recipeId
    ) {

        const recipe =
            this.recipes.get(
                recipeId
            );

        if (
            !inventory ||
            !recipe
        ) {

            return false;

        }

        return recipe.ingredients
            .every(

                ingredient =>
                    inventory.hasItem(

                        ingredient.id,

                        ingredient.quantity

                    )

            );

    }

    craft(
        inventory,
        recipeId
    ) {

        const recipe =
            this.recipes.get(
                recipeId
            );

        if (
            !recipe ||
            !this.canCraft(
                inventory,
                recipeId
            )
        ) {

            return null;

        }

        recipe.ingredients.forEach(

            ingredient => {

                inventory.removeItem(

                    ingredient.id,

                    ingredient.quantity

                );

            }

        );

        const result =
            ItemFactory.create(

                recipe.result.id,

                recipe.result.quantity ??
                1

            );

        if (!result) {

            return null;

        }

        inventory.addItem(
            result
        );

        return result;

    }

}