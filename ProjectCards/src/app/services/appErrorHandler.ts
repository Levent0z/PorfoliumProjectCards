import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export default class AppErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(error: any): void {
        let errorMsg: string;

        if (typeof error === 'string') {
            errorMsg = error;
            console.error(errorMsg);
        } else if (error instanceof Error) {
            errorMsg = error.message;
            console.error(errorMsg);

            // TODO: Check environment. Assume development
            if (error.stack) {
                console.debug(error.stack);
            }
        }

        if (errorMsg) {         
            return;
        }

        throw new Error("An unknown error has occurred.");
    }
}