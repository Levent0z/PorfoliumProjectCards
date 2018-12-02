export default class Utility {

    static toInt(value: string): number {
        // TODO: Have a more stringent conversion (such as regex) as parseInt is too forgiving
        return typeof value === undefined ? undefined : parseInt(value);
    }
    static toBool(value: string): boolean {
        // Defaults to false if value is anything but 1. 
        // Don't use this to check for truthiness.
        return value === '1';
    }

    static toDate(value: string): Date | undefined {
        // TODO: Deal with timezones
        return value ? new Date(value) : undefined;
    }
}