export default class ParticleManager {

    constructor(scene) {

        this.scene =
            scene;

        this.emitters =
            new Set();

    }

    register(emitter) {

        if (!emitter) {

            return emitter;

        }

        this.emitters.add(
            emitter
        );

        return emitter;

    }

    unregister(emitter) {

        this.emitters.delete(
            emitter
        );

    }

    clear() {

        this.emitters.forEach(
            emitter => {

                if (
                    emitter &&
                    typeof emitter.destroy ===
                    "function"
                ) {

                    emitter.destroy();

                }

            }
        );

        this.emitters.clear();

    }

    destroy() {

        this.clear();

        this.scene = null;

    }

}