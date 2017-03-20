//creating a function to show the time
setInterval(function() {
  //setting a date variable
var theTime = new Date();
  //setting the hours, min, & sec for the currentTime var
var theHours = theTime.getHours();
var theMinutes = theTime.getMinutes();
var theSeconds = theTime.getSeconds();

//tell js where to look in the html
var clockDiv = document.getElementById("clock")
  //console.log(setInterval)

//div needs to read the vars in hhmmss format by changing the innertext
clockDiv.innerText = theHours + ":" + theMinutes + ":" + theSeconds
// })
//calling the function
// showTime();
// console.log(showTime)


// setInterval (showTime),1000;

if(theHours <= 9) theHours = "0" + theHours;
if(theMinutes <= 9) theMinutes = "0" + theMinutes;
if(theSeconds <= 9) theSeconds = "0" + theSeconds;
})
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
