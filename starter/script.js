// $(document).ready(function() {
//     console.log("Ready!");
// });
//     //Display current date and time (Moment.js)
//     let now = moment().format("dddd, MMMM Do YYYY");
//     let displayDate = document.getElementById("currentDay");
//     displayDate.innerHTML = now;
//     let currentHour = moment().format("HH");

$(document).ready(function () {

//display current date and time
    var displayTime = document.querySelector("#currentDay");
    displayTime.textContent = currentTime;
//display time and date using dayjs
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

    displayTime.textContent = currentTime;

});