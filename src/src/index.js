function showTime(today) {
  let hours = today.getHours();
  let dayNum = today.getDate();
  let year = today.getFullYear();

  let minutes = today.getMinutes();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thirsday",
    "Friday",
    "Saturday",
  ];
  let months = [
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

  let weekday = weekdays[today.getDay()];
  let month = months[today.getMonth()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return ` <br/> ${weekday},${hours}:${minutes} <br/>  ${month} ${dayNum}, ${year}`;
}

let currentDate = document.querySelector("#time");
let currentTime = new Date();
currentDate.innerHTML = showTime(currentTime);

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city");
  cityInput = cityInput.value;
  cityInput = cityInput[0].toUpperCase() + cityInput.slice(1).toLowerCase();

  console.log(cityInput);

  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = ` ${cityInput}`;
}
let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", searchCity);

function celsius(event) {
  event.preventDefault();
  let tempcel = document.querySelector("#temper");
  tempcel.innerHTML = 19;
}
let linkcel = document.querySelector("#celsius-link");

linkcel.addEventListener("click", celsius);

function fahrenheit(event) {
  event.preventDefault();
  let tempfahr = document.querySelector("#temper");
  tempfahr.innerHTML = 66;
}
let linkfahr = document.querySelector("#fahrenheit-link");

linkfahr.addEventListener("click", fahrenheit);
