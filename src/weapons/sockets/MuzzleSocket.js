import WeaponSocket from "./WeaponSocket.js";

export default class MuzzleSocket extends WeaponSocket {

    constructor(
        x = 0.85,
        y = 0.30
    ) {

        super(
            x,
            y
        );

    }

}