var militaryTime = false;

function dateSuffix(date) {
    if (date % 10 == 1 && date != 11) {
        return date + 'st';
    } else if (date % 10 == 2 && date != 12) {
        return date + 'nd';
    } else if (date % 10 == 3 && date != 13) {
        return date + 'rd';
    } else {
        return date + 'th';
    }
}

function currentTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let time = document.getElementById('Time');

    let displayHours = (hours - 12 == 0 ? (hours + 12) : ((hours - 12 < 10 ? '0' : '') + (hours)));
    let militaryHours = (hours < 10 ? '0' : '') + (hours)
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    let amPM = hours >= 12 ? 'PM' : 'AM';

    let displayTime = `${displayHours}:${minutes}:${seconds} ${amPM}`;

    let displayMilitaryTime = `${militaryHours}:${minutes}:${seconds}`;

    time.innerHTML = militaryTime ? displayMilitaryTime : displayTime;

    displayCurrentDate(currentDate);
};

function displayCurrentDate(currentDate) {

    const displayMonth = currentDate.toLocaleString('default', { month: 'long' });
    const displayDay = currentDate.toLocaleString('default', { weekday: 'long' });
    const displayDateSuffix = dateSuffix(currentDate.getDate());

    let displayDate = `${displayDay}, ${displayMonth} ${displayDateSuffix}`;
    document.getElementById('Date').innerHTML = displayDate;
}

setInterval(currentTime, 1000);

document.getElementById('button').addEventListener('click', function () {
    militaryTime = !militaryTime;
    currentTime();
});