export default class SaveSystem {

    static STORAGE_KEY =
        "neon_assault_save";

    static VERSION =
        1;

    static save(data) {

        try {

            const payload = {

                version:
                    this.VERSION,

                savedAt:
                    Date.now(),

                data

            };

            localStorage.setItem(

                this.STORAGE_KEY,

                JSON.stringify(
                    payload
                )

            );

            return true;

        }
        catch (error) {

            console.error(
                "[SaveSystem] Falha ao salvar:",
                error
            );

            return false;

        }

    }

    static load() {

        try {

            const raw =
                localStorage.getItem(
                    this.STORAGE_KEY
                );

            if (!raw) {

                return null;

            }

            const payload =
                JSON.parse(raw);

            if (
                !payload ||
                typeof payload !==
                    "object"
            ) {

                return null;

            }

            return (
                payload.data ??
                null
            );

        }
        catch (error) {

            console.error(
                "[SaveSystem] Falha ao carregar:",
                error
            );

            return null;

        }

    }

    static exists() {

        return (
            localStorage.getItem(
                this.STORAGE_KEY
            ) !== null
        );

    }

    static delete() {

        try {

            localStorage.removeItem(
                this.STORAGE_KEY
            );

            return true;

        }
        catch (error) {

            console.error(
                "[SaveSystem] Falha ao apagar save:",
                error
            );

            return false;

        }

    }

}