const countdown = () => {
    const countDate = new Date("March 10, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / seconds);
  
    document.querySelector(".days").innerHTML = d;
    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".minutes").innerHTML = m;
    document.querySelector(".seconds").innerHTML = s;
  };
  
  setInterval(countdown, 1000);