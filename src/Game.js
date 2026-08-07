import Phaser from "phaser";

import BootScene from "./scenes/BootScene.js";
import PreloadScene from "./scenes/PreloadScene.js";
import Level1Scene from "./scenes/Level1Scene.js";

const config = {

    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    backgroundColor: "#080b14",

    pixelArt: true,

    physics: {

        default: "arcade",

        arcade: {

            gravity: {
                y: 1200
            },

            debug: false

        }

    },

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter:
            Phaser.Scale.CENTER_BOTH

    },

    scene: [

        BootScene,
        PreloadScene,
        Level1Scene

    ]

};

const game =
    new Phaser.Game(config);

export default game;