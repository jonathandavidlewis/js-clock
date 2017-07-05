
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');
  
  var elapsedSeconds = 0;
  var elapsedMinutes = 0;
  var elapsedHours = 0;

  function setTime() {
    const startTime = new Date();
    var seconds = startTime.getSeconds();
    var minutes = startTime.getMinutes();
    var hours = startTime.getHours();
    return function() {
      seconds += 1;
      minutes = (seconds % 60 === 0)? minutes + 1 : minutes;
      hours = (minutes % 60 === 0 && seconds % 60 === 0)? hours + 1 : hours;
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    };
  }

  function updateClock() {
    const currentTime = updateTime();
    playClockTick();
    const secondsDegrees = currentTime.seconds/60 * 360 +90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = currentTime.minutes/60 * 360 +90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = currentTime.hours/12 * 360 +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  function playClockTick() {
    clockTick = document.getElementById("clock-tick");
    clockTick.currentTime = 0;
    clockTick.play();
  }


  var updateTime = setTime();
  updateClock();
  playClockTick();
  var secondUpdate = setInterval(updateClock, 1000); 