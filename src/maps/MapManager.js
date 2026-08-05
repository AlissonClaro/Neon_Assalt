export default class MapManager {

    constructor(scene) {

        this.scene = scene;

    }

    createLevel(name) {

        const map = this.scene.make.tilemap({

            key: name

        });

        const tiles = map.addTilesetImage(

            "neon_tiles",

            "neon_tiles"

        );

        const ground = map.createLayer(

            "Ground",

            tiles

        );

        const collision = map.createLayer(

            "Collision",

            tiles

        );

        collision.setCollisionByProperty({

            collides: true

        });

        return {

            map,
            ground,
            collision

        };

    }

}