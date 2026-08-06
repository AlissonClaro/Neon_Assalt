import Weapon from "./Weapon.js";
import WeaponDatabase from "./WeaponDatabase.js";

export default class WeaponFactory {

    static create(name) {

        const data = WeaponDatabase[name];

        if (!data) {

            console.warn("Arma não encontrada:", name);

            return null;

        }

        return new Weapon(data);

    }

}