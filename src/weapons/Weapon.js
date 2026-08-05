import ShootSocket from "../entities/player/sockets/ShootSocket.js";

export default class Weapon {

    constructor(data) {

        Object.assign(this, data);

        this.socket = new ShootSocket();

    }

}