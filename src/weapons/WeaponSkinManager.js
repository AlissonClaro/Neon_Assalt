export default class WeaponSkinManager {

    constructor(scene){

        this.scene = scene;

    }

    texture(type,id){

        return `weapon_${type}_${id}`;

    }

}