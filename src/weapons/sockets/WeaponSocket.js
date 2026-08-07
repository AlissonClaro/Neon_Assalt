export default class WeaponSocket {

    constructor(
        x = 0,
        y = 0
    ) {

        this.x = x;

        this.y = y;

    }

    set(
        x,
        y
    ) {

        this.x = x;

        this.y = y;

        return this;

    }

    copy(socket) {

        if (!socket) {

            return this;

        }

        this.x = socket.x;

        this.y = socket.y;

        return this;

    }

    clone() {

        return new WeaponSocket(
            this.x,
            this.y
        );

    }

}