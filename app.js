let d = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("timetop").innerHTML = d.getHours() + ":" + d.getMinutes();
document.getElementById("timemiddle").innerHTML = d.getHours() + ":" + d.getMinutes();
document.getElementById("day").innerHTML = days[d.getDay()];
document.getElementById("date").innerHTML = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();

