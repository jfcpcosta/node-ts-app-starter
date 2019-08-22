import { DateUtils } from './../time/date-utils';
import { ConsoleColor, Console } from '../console';

export default class Logger {

    public static log(message: any, color?: ConsoleColor): void {
        const date = Console.colorizedText(`[${DateUtils.shortDate()}] `, ConsoleColor.FgWhite);
        message = Console.colorizedText(message, color ? color : ConsoleColor.FgWhite);
        Console.write(date + message, color);
    }
}