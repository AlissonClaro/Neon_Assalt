import Weapon from "./Weapon.js";
import WeaponDatabase from "./WeaponDatabase.js";

export default class WeaponManager{

    constructor(player){

        this.player = player;

        this.weapon = null;

    }

    equip(name){

        const data = WeaponDatabase[name];

        if(!data){

            console.warn("Arma não encontrada:",name);

            return;

        }

        this.weapon = new Weapon(data);

    }

    getWeapon(){

        return this.weapon;

    }

}