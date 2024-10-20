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

export function formatDateRange(startDate: Date, endDate: Date, options?: Intl.DateTimeFormatOptions): string {    
    const formatter = getDateTimeFormatter(options);
    const formattedStartDate = formatter.format(startDate);
    const formattedEndDate = formatter.format(endDate);
    
    return `${formattedStartDate} - ${formattedEndDate}`;
}
