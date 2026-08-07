import PlayerFrameSockets from "./PlayerFrameSockets.js";

export default class FrameSocketResolver {

    static resolve(
        player,
        fallback = { x: 6, y: 25 }
    ) {

        if (!player) {

            return {
                ...fallback
            };

        }

        const animation =
            player.anims
                ?.currentAnim
                ?.key;

        if (!animation) {

            return {
                ...fallback
            };

        }

        const sockets =
            PlayerFrameSockets[
                animation
            ];

        if (
            !Array.isArray(sockets) ||
            sockets.length === 0
        ) {

            return {
                ...fallback
            };

        }

        const frame =
            player.anims
                ?.currentFrame;

        /*
         * Phaser AnimationFrame.index costuma
         * começar em 1.
         */

        let index =

            (
                frame?.index ??
                1
            ) - 1;

        index =
            Math.max(
                0,
                index
            );

        /*
         * Se por algum motivo o frame ultrapassar
         * a quantidade cadastrada, usamos
         * o último socket disponível.
         */

        index =
            Math.min(
                index,
                sockets.length - 1
            );

        const socket =
            sockets[index];

        return {

            x:
                socket?.x ??
                fallback.x,

            y:
                socket?.y ??
                fallback.y

        };

    }

}