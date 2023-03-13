
//defines variables for each time block for later manipulation
var nineClass = document.getElementById("hour-9");
var tenClass = document.getElementById("hour-10");
var elevenClass = document.getElementById("hour-11");
var twelveClass = document.getElementById("hour-12");
var thirteenClass = document.getElementById("hour-13");
var fourteenClass = document.getElementById("hour-14");
var fifteenClass = document.getElementById("hour-15");
var sixteenClass = document.getElementById("hour-16");
var seventeenClass = document.getElementById("hour-17");

//sets variables for the clock type change (12/24Hr)
//sets variables for changing between 12 and 24 hour buttons
var ninthHour = document.getElementById("hour-9-text");
var tenthHour = document.getElementById("hour-10-text");
var eleventhHour = document.getElementById("hour-11-text");
var twelfthHour = document.getElementById("hour-12-text");
var thirteenthHour = document.getElementById("hour-13-text");
var fourteenthHour = document.getElementById("hour-14-text");
var fifteenthHour = document.getElementById("hour-15-text");
var sixteenthHour = document.getElementById("hour-16-text");
var seventeenthHour = document.getElementById("hour-17-text");
var buttonTime12 = document.getElementById("button-12-hour");
var buttonTime24 = document.getElementById("button-24-hour");



//initial function of webpage
$(function init() {

//gets the date and time
var today = dayjs();
var todayDate = new Date();
var currentHour = todayDate.getHours();

//sets numerical value for each time block
var hourNineValue = 9;
var hourTenValue = 10;
var hourElevenValue = 11;
var hourTwelveValue = 12;
var hourThirteenValue = 13;
var hourFourteenValue = 14;
var hourFifteenValue = 15;
var hourSixteenValue = 16;
var hourSeventeenValue = 17;

//adds ability to apply the "past" class to every time block 
function allPast() {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("past");
  fourteenClass.classList.add("past");
  fifteenClass.classList.add("past");
  sixteenClass.classList.add("past");
  seventeenClass.classList.add("past");

}


//adds ability to apply the "future" class to each time block
function allFuture() {
  nineClass.classList.add("future");
  tenClass.classList.add("future");
  elevenClass.classList.add("future");
  twelveClass.classList.add("future");
  thirteenClass.classList.add("future");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
}


//creates variables for each save button
var saveButton9 = document.querySelector("#button-9");
var saveButton10 = document.querySelector("#button-10");
var saveButton11 = document.querySelector("#button-11");
var saveButton12 = document.querySelector("#button-12");
var saveButton13 = document.querySelector("#button-13");
var saveButton14 = document.querySelector("#button-14");
var saveButton15 = document.querySelector("#button-15");
var saveButton16 = document.querySelector("#button-16");
var saveButton17 = document.querySelector("#button-17");

//creates variables for each hour
var hourNineInput = document.querySelector("#input-9");
var hourTenInput = document.querySelector("#input-10");
var hourElevenInput = document.querySelector("#input-11");
var hourTwelveInput = document.querySelector("#input-12");
var hourThirteenInput = document.querySelector("#input-13");
var hourFourteenInput = document.querySelector("#input-14");
var hourFifteenInput = document.querySelector("#input-15");
var hourSixteenInput = document.querySelector("#input-16");
var hourSeventeenInput = document.querySelector("#input-17");

//calls and displays current day
$('#currentDay').text("Today is " + today.format('MMM DD, YYYY'));

// compares the current hour of the day to the assigned hour value of 
// each time block and adds the corresponding time value
if (currentHour == hourNineValue) {
  nineClass.classList.add("present");
  tenClass.classList.add("future");
  elevenClass.classList.add("future");
  twelveClass.classList.add("future");
  thirteenClass.classList.add("future");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourTenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("present");
  elevenClass.classList.add("future");
  twelveClass.classList.add("future");
  thirteenClass.classList.add("future");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourElevenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("present");
  twelveClass.classList.add("future");
  thirteenClass.classList.add("future");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourTwelveValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("present");
  thirteenClass.classList.add("future");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourThirteenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("present");
  fourteenClass.classList.add("future");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourFourteenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("past");
  fourteenClass.classList.add("present");
  fifteenClass.classList.add("future");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourFifteenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("past");
  fourteenClass.classList.add("past");
  fifteenClass.classList.add("present");
  sixteenClass.classList.add("future");
  seventeenClass.classList.add("future");
} else if (currentHour == hourSixteenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("past");
  fourteenClass.classList.add("past");
  fifteenClass.classList.add("past");
  sixteenClass.classList.add("present");
  seventeenClass.classList.add("future");
} else if (currentHour == hourSeventeenValue) {
  nineClass.classList.add("past");
  tenClass.classList.add("past");
  elevenClass.classList.add("past");
  twelveClass.classList.add("past");
  thirteenClass.classList.add("past");
  fourteenClass.classList.add("past");
  fifteenClass.classList.add("past");
  sixteenClass.classList.add("past");
  seventeenClass.classList.add("present");
} else if (currentHour > 17) {
  allPast();
} else if (currentHour < 9) {
  allFuture();
}

//logs the current hour in the console 
console.log("current hour: " + currentHour);

  //adds event listeners to each save button
  saveButton9.addEventListener("click", function() {
    //sets 9am event in local storage
    nineEvent = hourNineInput.value;
    localStorage.setItem("nineEvent", nineEvent);
    console.log("clicked " + nineEvent);
  });

  saveButton10.addEventListener("click", function() {
    //sets 10am event in local storage
    tenEvent = hourTenInput.value;
    localStorage.setItem("tenEvent", tenEvent);
    console.log("clicked " + tenEvent);
  });

  saveButton11.addEventListener("click", function() {
    //sets 11am event in local storage
    elevenEvent = hourElevenInput.value;
    localStorage.setItem("elevenEvent", elevenEvent);
    console.log("clicked " + elevenEvent);
  });

  saveButton12.addEventListener("click", function() {
    //sets 12pm event in local storage
    twelveEvent = hourTwelveInput.value;
    localStorage.setItem("twelveEvent", twelveEvent);
    console.log("clicked " + twelveEvent);
  });

  saveButton13.addEventListener("click", function() {
    //sets 1pm event in local storage
    thirteenEvent = hourThirteenInput.value;
    localStorage.setItem("thirteenEvent", thirteenEvent);
    console.log("clicked " + thirteenEvent);
  });

  saveButton14.addEventListener("click", function() {
    //sets 2pm event in local storage
    fourteenEvent = hourFourteenInput.value;
    localStorage.setItem("fourteenEvent", fourteenEvent);
    console.log("clicked " + fourteenEvent);
  });

  saveButton15.addEventListener("click", function() { 
    //sets 3pm event in local storage
    fifteenEvent = hourFifteenInput.value;
    localStorage.setItem("fifteenEvent", fifteenEvent);
    console.log("clicked " + fifteenEvent);
  });

  saveButton16.addEventListener("click", function() {
    //sets 4pm event in local storage
    sixteenEvent = hourSixteenInput.value;
    localStorage.setItem("sixteenEvent", sixteenEvent);
    console.log("clicked " + sixteenEvent);
  });

  saveButton17.addEventListener("click", function() {
    //sets 5pm event in local storage
    seventeenEvent = hourSeventeenInput.value;
    localStorage.setItem("seventeenEvent", seventeenEvent);
    console.log("clicked " + seventeenEvent);
  });
  

  //pulls each hour event from local storage and applies it to the relative time block
  hourNineInput.textContent = localStorage.getItem("nineEvent");
  hourTenInput.textContent = localStorage.getItem("tenEvent");
  hourElevenInput.textContent = localStorage.getItem("elevenEvent");
  hourTwelveInput.textContent = localStorage.getItem("twelveEvent");
  hourThirteenInput.textContent = localStorage.getItem("thirteenEvent");
  hourFourteenInput.textContent = localStorage.getItem("fourteenEvent");
  hourFifteenInput.textContent = localStorage.getItem("fifteenEvent");
  hourSixteenInput.textContent = localStorage.getItem("sixteenEvent");
  hourSeventeenInput.textContent = localStorage.getItem("seventeenEvent");
    
  
  });


  //adds function to switch clock to 24 hour time
  function filterTo24() {
    buttonTime24.style.display = "none";
    buttonTime12.style.display = "inline";
    ninthHour.textContent = "09:00";
    tenthHour.textContent = "10:00";
    eleventhHour.textContent = "11:00";
    twelfthHour.textContent = "12:00";
    thirteenthHour.textContent = "13:00";
    fourteenthHour.textContent = "14:00";
    fifteenthHour.textContent = "15:00";
    sixteenthHour.textContent = "16:00";
    seventeenthHour.textContent = "17:00";
  }

  function filterTo12() {
    buttonTime24.style.display = "inline";
    buttonTime12.style.display = "none";
    ninthHour.textContent = "9AM";
    tenthHour.textContent = "10AM";
    eleventhHour.textContent = "11AM";
    twelfthHour.textContent = "12PM";
    thirteenthHour.textContent = "1PM";
    fourteenthHour.textContent = "2PM";
    fifteenthHour.textContent = "3PM";
    sixteenthHour.textContent = "4PM";
    seventeenthHour.textContent = "5PM";
  }
