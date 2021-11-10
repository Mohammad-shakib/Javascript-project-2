function digitalClock(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let formateTime = 'AM';

  if(hours==0){
    hours = 12;
  }else if(hours > 12){
    hours = hours - 12;
    formateTime = 'PM';
  }

  hours = hours<10? '0'+hours:hours;
  minutes = minutes<10? '0'+minutes:minutes;
  second = second<10? '0'+second:second;

  let finalTime = `${hours}:${minutes}:${second}`;
  document.getElementById('time').innerText = finalTime;
  document.querySelector('small').innerText = formateTime;

  setInterval(digitalClock, 1000);
}
digitalClock();