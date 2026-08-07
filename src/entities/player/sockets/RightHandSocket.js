import Socket from "./Socket.js";

export default class RightHandSocket extends Socket {

    constructor() {

        // Posição padrão da mão
        // relativa ao centro do Player 128x128
        super(
            27,
            4
        );

    }

}