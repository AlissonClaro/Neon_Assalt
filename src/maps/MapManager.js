export default class MapManager {

    constructor(scene) {

        this.scene = scene;

    }

    createLevel({

        mapKey,

        tilesetName,

        tilesetKey,

        groundLayer = "Ground",

        collisionLayer = "Collision",

        collisionProperty = "collides"

    }) {

        const map =
            this.scene.make.tilemap({

                key: mapKey

            });

        const tileset =
            map.addTilesetImage(

                tilesetName,
                tilesetKey

            );

        if (!tileset) {

            throw new Error(
                `[MapManager] Tileset não encontrado: ${tilesetName}`
            );

        }

        const ground =
            map.createLayer(

                groundLayer,
                tileset

            );

        const collision =
            map.createLayer(

                collisionLayer,
                tileset

            );

        if (collision) {

            collision.setCollisionByProperty({

                [collisionProperty]: true

            });

        }

        return {

            map,
            tileset,
            ground,
            collision

        };

    }

}