import PlayerState from "./states/PlayerState.js";

export default class PlayerStateMachine {

    constructor() {

        this.current = PlayerState.IDLE;

        this.previous = null;

    }

    change(state) {

        if (this.current === state)
            return;

        this.previous = this.current;

        this.current = state;

    }

    is(state) {

        return this.current === state;

    }

}