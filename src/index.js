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

  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = ` ${cityInput}`;

  let apiKey = "87f9bd8acd71337cb736013623f183c8";

  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", searchCity);

function showTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let currentWindspeed = Math.round(response.data.wind.speed);
  let currentHumidity = Math.round(response.data.main.humidity);
  let currentTemper = document.querySelector("#temper");
  currentTemper.innerHTML = currentTemperature;

  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = currentWindspeed;

  let currentHumid = document.querySelector("#humidity");
  currentHumid.innerHTML = currentHumidity;
  console.log(response);
}

function findLocation(position) {
  let apiKey1 = "07643e8a095d4ee521877bbfba7e6fb8";

  let units1 = "metric";
  let lat = position.coords.latitude;
  console.log(lat);

  let lon = position.coords.longitude;
  console.log(lon);

  let apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey1}&units=${units1}`;

  axios.get(apiUrl1).then(showGPSTemperature);
}

let curButton = document.querySelector("#currentButton");
curButton.addEventListener("click", showGPSTemperature);

function showGPSTemperature(response) {
  navigator.geolocation.getCurrentPosition(findLocation);
  let currentTemperature = Math.round(response.data.main.temp);
  let currentWindspeed = Math.round(response.data.wind.speed);
  let currentHumidity = Math.round(response.data.main.humidity);
  let currentTemper = document.querySelector("#temper");
  let myCity = response.data.name;

  currentTemper.innerHTML = currentTemperature;

  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = currentWindspeed;

  let currentHumid = document.querySelector("#humidity");
  currentHumid.innerHTML = currentHumidity;

  let curCity = document.querySelector("#city");
  curCity.innerHTML = ` ${myCity}`;
}
