import PlayerState
    from "./states/PlayerState.js";

export default class PlayerStateMachine {

    constructor() {

        this.current =
            PlayerState.IDLE;

        this.previous =
            null;

        this.changedAt =
            0;

    }

    change(
        state,
        time = 0
    ) {

        if (
            !state ||
            this.current === state
        ) {

            return false;

        }

        this.previous =
            this.current;

        this.current =
            state;

        this.changedAt =
            time;

        return true;

    }

    is(state) {

        return (
            this.current === state
        );

    }

    was(state) {

        return (
            this.previous === state
        );

    }

    timeInState(
        now
    ) {

        return Math.max(

            0,
            now - this.changedAt

        );

    }

}