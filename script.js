let a;
let time;
let day;
setInterval (()=>{
    a = new Date();
    time = a.getHours() + ":" +a.getMinutes() + ":" + a.getSeconds();
    day = a.toDateString();
    document.getElementById("clock").innerHTML= time ;
    document.getElementById("calender").innerHTML = day;
},1000);
