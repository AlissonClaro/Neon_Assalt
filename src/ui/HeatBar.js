export default class HealthBar {

    constructor(scene) {

        this.scene = scene;

        this.graphics = scene.add.graphics();

        this.graphics.setScrollFactor(0);

    }

    update(player) {

        const max = player.health.maxHealth;
        const hp = player.health.currentHealth;

        const width = 220;
        const height = 20;

        this.graphics.clear();

        // fundo
        this.graphics.fillStyle(0x222222);
        this.graphics.fillRoundedRect(20,20,width,height,5);

        // vida
        this.graphics.fillStyle(0x00ff66);
        this.graphics.fillRoundedRect(
            20,
            20,
            width*(hp/max),
            height,
            5
        );

    }

}