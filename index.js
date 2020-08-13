//Military Time Option Boolean
var militaryTime = false;


//With the help of google w3 resource was able to implement dateSuffix function
//returns the suffix for a given date
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

//Current Time function: on init creates a new Date object then displays the current Date and time(12Hour format). 
// if the militaryTime boolean is true the time display will change to 24Hour Format/
function currentTime() {
    var currentDate = new Date();

    //These variables were added to display a value (i.e. Hour, Minute, Second) under 10 with a zero in front. example: 9 -> 09
    var displayHours = ((currentDate.getHours() - 12) < 10 ? '0' : '') + (currentDate.getHours() - 12);
    var displaySeconds = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    var displayMinutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();

    //These variables were added to display the value of Month, the day of the week and the Date(1-31)
    var displayMonth = currentDate.toLocaleString('default', { month: 'long' });
    var displayDay = currentDate.toLocaleString('default', { weekday: 'long' });
    var displayDateSuffix = dateSuffix(currentDate.getDate());


    //variable to display of the current Date
    var displayDate = displayDay + ', ' + displayMonth + ' ' + displayDateSuffix;

    //variable to display of the current time in 12HR Format
    var displayTime = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    //variable to display of the current time in 24HR Format
    var displayMilitaryTime = currentDate.getHours() + ':' + displayMinutes + ':' + displaySeconds;

    //updates the innerHTML of the div's with IDs Date and Time
    document.getElementById('Date').innerHTML = displayDate;
    document.getElementById('Time').innerHTML = militaryTime ? displayMilitaryTime : displayTime;
};

//The Set Interval function will call the function Current Time once ever second. This will update
// display on the screen, more apparent when looking at the seconds.
setInterval(currentTime, 1000);

//changeTimeButton is an eventListener listening for the click of the button on the page
// when clicked will fire the function changeTime()
var changeTimeButton = document.getElementById('button').addEventListener('click', changeTime);

//changeTime is a function that when called will toggle the boolean variable militaryTime.
function changeTime() {
    militaryTime = !militaryTime;
}

