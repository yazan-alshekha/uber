'use strict'
confirm('Hello our customer')
var name = prompt('enter you name ');

var today = new Date();
var min = today.getUTCMinutes()
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting = 'Good evening';
} else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow >= 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Wellcome';
}
//document.write('<h3>'+greeting+'</h3>');

document.getElementById('time').innerHTML = 'your clock is ' + hourNow + ':' + min;

document.getElementById("thename").innerHTML = greeting + ' ' + name;

