import Entity from "../core/Entity.js";

export default class Enemy extends Entity{

    constructor(scene,x,y,texture){

        super(

            scene,

            x,

            y,

            texture

        );

        this.speed = 60;

        this.health = 100;

    }

    update(){}

}