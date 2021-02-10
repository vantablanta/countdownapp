const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins'); 
const secEl= document.getElementById('sec');

const birthday = '22 June 2021';

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate=  new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000; 
  
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 % 24);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;
   
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = sec;
    
}
function formatTime(time){
    return time < 10 ? `0${time}`: time
}

//first call
countdown();

setInterval(countdown, 1000);



