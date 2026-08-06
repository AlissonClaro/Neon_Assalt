export default class Crosshair{

    constructor(scene){

        this.scene = scene;

        this.sprite = scene.add.image(

            0,

            0,

            "crosshair"

        );

        this.sprite.setDepth(999);

    }

    update(){

        const pointer =

            this.scene.input.activePointer;

        this.sprite.x =

            pointer.worldX;

        this.sprite.y =

            pointer.worldY;

    }

}