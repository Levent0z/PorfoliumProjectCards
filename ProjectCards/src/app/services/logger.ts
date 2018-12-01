import { Injectable } from '@angular/core';

@Injectable()
export default class LoggerService {

    constructor() { }

    public info(message: string) {
        console.log(message);
    }

    public warn(message: string) {
        console.warn(message);
    }

    public error(message: string) {
        console.error(message);
    }
}