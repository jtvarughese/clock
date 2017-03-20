//creating a function to show the time
setInterval(function() {
  //setting a date variable
var theTime = new Date();
  //setting the hours, min, & sec for the currentTime var
var hour = theTime.getHours();
var min = theTime.getMinutes();
var sec = theTime.getSeconds();
// adding a zero to the min and sec
if (hour <= 9)hour = '0'+hour;
if (min <= 9)min = '0'+min;
if (sec <= 9)sec = '0'+sec;
// changing the background image based on hours
if (hour < 16) {
  document.getElementById("img").style.backgroundImage = "url('day.jpg')";
  }
  else if (hour<20) {
    document.getElementById("img").style.backgroundImage = "url('sunset.jpg')"
  }
  else (hour<5)
    document.getElementById("img").style.backgroundImage = "url('night.jpg')"



//tell js where to look in the html
var clockDiv = document.getElementById("clock")
  //console.log(setInterval)
//div needs to read the vars in hhmmss format by changing the innertext
clockDiv.innerText = hour + ":" + min + ":" + sec
})




// setInterval (showTime),1000;


// var theMinutes
//   if (theMinutes<10) {
//      theMinutes = '0' + theMinutes;
//   }
//
// var theSeconds
//   if (theSeconds<10) {
//     theSeconds = '0' + theSeconds;
//   }




// building the interval
// setInterval (myClock() {
  // all code here
  //date represents date-time - is a set js function
//   var date = new Date()
//   date.getSeconds()
//   //can get day and minutes below
//   //date.getDay ()
//   //date.getMinutes
//
// }, 1000)
//
// //building the timeout
// setTimeout function() {
//
//
//
// }
