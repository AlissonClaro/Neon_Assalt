import HUD
    from "../../ui/HUD.js";

export default class HUDSystem {

    constructor(scene) {

        this.scene =
            scene;

        this.hud =
            new HUD(
                scene
            );

        this.enabled =
            true;

    }

    update(player) {

        if (
            !this.enabled ||
            !this.hud
        ) {

            return;

        }

        this.hud.update(
            player
        );

    }

    show() {

        this.enabled =
            true;

    }

    hide() {

        this.enabled =
            false;

    }

    destroy() {

        if (this.hud) {

            this.hud.destroy();

            this.hud =
                null;

        }

        this.scene = null;

    }

}