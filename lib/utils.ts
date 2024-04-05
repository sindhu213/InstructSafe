// Utility functions

export function renderPublishedTime(time: Date) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Return the time in HH:MM format
    return formattedHours + ':' + formattedMinutes;
}
