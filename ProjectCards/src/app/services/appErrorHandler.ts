import { ErrorHandler } from "@angular/core";

export default class AppErrorHandler implements ErrorHandler {

    constructor() {
    }

    handleError(error: any): void {
        if (typeof error === 'string') {
            console.error(error);
            return;
        }

        if (error instanceof Error) {
            console.error(error.message);

            // TODO: Check environment. Assume development
            if (error.stack) {
                console.debug(error.stack);
            }
            return;
        }

        throw new Error("An unknown error has occurred.");
    }
}