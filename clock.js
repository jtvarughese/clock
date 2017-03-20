//creating a function to show the time
setInterval(function() {
  //setting a date variable
var theTime = new Date();
  //setting the hours, min, & sec for the currentTime var
var hour = theTime.getHours();
var min = theTime.getMinutes();
var sec = theTime.getSeconds();
// adding a zero to the min and sec
if (hour <= 9){hour = '0'+hour;}
if (min <= 9){min = '0'+min;}
if (sec <= 9){sec = '0'+sec;}
// changing the background image based on hours
// day time hours
if (hour >=6 && hour <=12) {
  document.getElementById("img").style.backgroundImage="url('day.jpg')";
} else if (hour >12 && hour <=20) {
  document.getElementById("img").style.backgroundImage="url('sunset.jpg')"
} else {
  document.getElementById("img").style.backgroundImage="url('night.jpg')"
}
// changing the message based on hours
if (hour >=6 && hour <=12) {
  document.getElementById("message").innerHTML="Good Day";
} else if (hour >12 && hour <=20) {
  document.getElementById("message").innerHTML="Good Afternoon"
} else {
  document.getElementById("message").innerHTML="Good Night"
}

//tell js where to look in the html
var clockDiv = document.getElementById("clock")
  //console.log(setInterval)
//div needs to read the vars in hhmmss format by changing the innertext
clockDiv.innerText = hour + ":" + min + ":" + sec
}, 1000)
