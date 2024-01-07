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
    
//display time and date using dayjs
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
    displayTime.textContent = currentTime;

// adding button to save input in local storage when click event listener
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        
        localStorage.setItem(time, text);
    });

    // current number of hours
    function hourTracker() {
        var currentHour = dayjs().hour();
    };

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
        // Check the time and add the classes for background indicators
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
