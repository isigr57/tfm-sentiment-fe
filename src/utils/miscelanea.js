function formatDate(timestamp) {
    const date = new Date(timestamp.seconds * 1000);

    console.log('date', date);

    const options = {
        weekday: 'short', // 'Tue'
        year: 'numeric',  // '1975'
        month: 'short',   // 'Aug'
        day: 'numeric',   // '19'
        hour: '2-digit',  // '23'
        minute: '2-digit', // '15'
        second: '2-digit', // '30'
        hour12: false     // 24-hour time format
    };

    return date.toLocaleString('en-US', options).replace(',', '');
}

export { formatDate };
