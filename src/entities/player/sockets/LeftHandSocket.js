import Socket from "./Socket.js";

export default class LeftHandSocket
    extends Socket {

    constructor() {

        super(
            10,
            -10
        );

    }

}