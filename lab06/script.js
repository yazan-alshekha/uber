'use strict'
confirm('Hello our customer');
getTime();
var count= prompt('how many cars you want ?');






  function getName(){
  var name = prompt('enter you name (you shouldn\'t leave it empty ) ');
  while (name ==''){ 
    var name = prompt('enter you name (you shouldn\'t leave it empty ) ');
   }
  return name
}


function getTime(){
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
  document.getElementById('time').innerHTML = 'your clock is ' + hourNow + ':' + min;
  document.getElementById("thename").innerHTML = greeting + ' ' + getName();
  //document.write('<h3>'+greeting+'</h3>');
}










