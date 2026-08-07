import Weapon from "./Weapon.js";
import WeaponDatabase from "./WeaponDatabase.js";
import WeaponSkinManager from "./WeaponSkinManager.js";

export default class WeaponFactory {

    static create(type, skin = null) {

        const data =
            WeaponDatabase[type];

        if (!data) {

            console.warn(
                `[WeaponFactory] Arma não encontrada: ${type}`
            );

            return null;

        }

        const resolvedSkin =
            WeaponSkinManager.resolveSkin(
                type,
                skin
            );

        return new Weapon(
            data,
            resolvedSkin
        );

    }

}