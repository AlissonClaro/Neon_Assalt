import WeaponSocket from "./WeaponSocket.js";

export default class GripSocket extends WeaponSocket {

    constructor(
        x = 0.28,
        y = 0.72
    ) {

        super(
            x,
            y
        );

    }

}