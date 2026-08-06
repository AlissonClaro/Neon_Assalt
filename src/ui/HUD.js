import HealthBar from "./HealthBar.js";
import AmmoCounter from "./AmmoCounter.js";
import WeaponIcon from "./WeaponIcon.js";
import Crosshair from "./Crosshair.js";

export default class HUD{

    constructor(scene){

        this.health =

            new HealthBar(scene);

        this.ammo =

            new AmmoCounter(scene);

        this.weapon =

            new WeaponIcon(scene);

        this.crosshair =

            new Crosshair(scene);

    }

    update(player){

        this.health.update(player);

        this.ammo.update(player);

        this.weapon.update(player);

        this.crosshair.update();

    }

}