const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline h4");

let futureDate = new Date(2023,0,15,23,59,0);


const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]}, ${hours}:${minutes}pm`;

// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
 

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor(t % oneDay / oneHour );
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / oneSecond);

  const values = [days, hours, mins, secs];

  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  })

}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();