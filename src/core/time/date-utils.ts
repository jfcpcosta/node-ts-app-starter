export class DateUtils {

    public static shortDate(date?: Date): string {
        if (!date) {
            date = new Date();
        }

        const year = date.getFullYear();
        const month = this.leadZero(date.getMonth() + 1);
        const day = this.leadZero(date.getDate());
        const hours = this.leadZero(date.getHours());
        const minutes = this.leadZero(date.getMinutes());
        const seconds = this.leadZero(date.getSeconds());

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    private static leadZero(part: number): string {
        return (part < 10) ? `0${part}` : `${part}`;
    }
}