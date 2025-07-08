type DateFormatOptions = {
    MMMYYY: boolean;
    YYYY: boolean;
    dateFormat: boolean;
};

function createDateFormatter(dateString: string) {
    const options: DateFormatOptions = {
        MMMYYY: false,
        YYYY: false,
        dateFormat: false, //MM/DD/YYYY
    };

    function dateFormat() {
        options.dateFormat = true
        return builder
    }
    function YYYY() {
        options.YYYY = true
        return builder
    }

    function MMMYYY() {
        options.MMMYYY = true
        return builder
    }

    function build(): string {
        const date = new Date(dateString);
        let formattedDate = '';

        const formatOptions: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        if (options.dateFormat) {
            return dateString ? new Date(dateString).toLocaleDateString('sv-SE') : '';
        }

        if (options.YYYY) {
            return date.toLocaleString('en-us', {
                year: 'numeric',
            })
        }

        if (options.MMMYYY) {
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
            });
        }

        formattedDate = date.toLocaleDateString('id-ID', formatOptions);
        return formattedDate;
    }

    const builder = {
        dateFormat,
        MMMYYY,
        YYYY,
        build,
    };

    return builder;
}

export default createDateFormatter