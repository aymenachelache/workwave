export const formatDate = (item) => {
    // Parse the creation date string into a Date object
    const messageDate = new Date(item.createdAt);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - messageDate;

    // Convert milliseconds to seconds, minutes, hours, days, and months
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    // Construct the elapsed time string
    let elapsedTime = '';

    if (months > 0) {
        elapsedTime += months + (months === 1 ? ' month' : ' months');
        if (days > 0) {
            elapsedTime += ' ' + (days % 30) + (days % 30 === 1 ? ' day' : ' days');
        }
    } else if (days > 0) {
        elapsedTime += days + (days === 1 ? ' day' : ' days');
        if (hours > 0) {
            elapsedTime += ' ' + (hours % 24) + (hours % 24 === 1 ? ' hour' : ' hours');
        }
    } else if (hours > 0) {
        elapsedTime += hours + (hours === 1 ? ' hour' : ' hours');
        if (minutes > 0) {
            elapsedTime += ' ' + (minutes % 60) + (minutes % 60 === 1 ? ' minute' : ' minutes');
        }
    } else if (minutes > 0) {
        elapsedTime += minutes + (minutes === 1 ? ' minute' : ' minutes');
        if (seconds > 0) {
            elapsedTime += ' ' + (seconds % 60) + (seconds % 60 === 1 ? ' second' : ' seconds');
        }
    } else {
        elapsedTime += seconds + (seconds === 1 ? ' second' : ' seconds');
    }

    return elapsedTime;
};
