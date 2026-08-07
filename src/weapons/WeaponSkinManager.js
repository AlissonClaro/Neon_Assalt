import WeaponCatalog from "../config/WeaponCatalog.js";

export default class WeaponSkinManager {

    static getModels(type) {

        return WeaponCatalog[type] ?? [];

    }

    static hasSkin(type, skin) {

        const models =
            this.getModels(type);

        return models
            .map(String)
            .includes(String(skin));

    }

    static getDefaultSkin(type) {

        const models =
            this.getModels(type);

        if (models.length === 0) {

            return null;

        }

        return String(models[0]);

    }

    static resolveSkin(type, requestedSkin = null) {

        if (
            requestedSkin !== null &&
            this.hasSkin(type, requestedSkin)
        ) {

            return String(requestedSkin);

        }

        return this.getDefaultSkin(type);

    }

    static texture(type, skin) {

        if (!type || skin === null) {

            return null;

        }

        return `weapon_${type}_${skin}`;

    }

    static random(type) {

        const models =
            this.getModels(type);

        if (models.length === 0) {

            return null;

        }

        const index =
            Math.floor(
                Math.random() * models.length
            );

        return String(
            models[index]
        );

    }

}