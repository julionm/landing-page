export function getDateTimeFormatter(options: Intl.DateTimeFormatOptions = {}): Intl.DateTimeFormat {
    return new Intl.DateTimeFormat(navigator.language, options);
}

export function formatNumericDate(date: Date): string {
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        month: 'numeric',
        year: 'numeric'
    };

    return getDateTimeFormatter(dateFormatOptions).format(date);
}

export function formatNumericDateRange(startDate: Date, endDate: Date): string {
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        month: 'numeric',
        year: 'numeric'
    };
    
    return getDateTimeFormatter(dateFormatOptions).formatRange(startDate, endDate);
}

export function formatDateRange(startDate: Date, endDate: Date, options?: Intl.DateTimeFormatOptions): string {
    return getDateTimeFormatter(options).formatRange(startDate, endDate);
}
