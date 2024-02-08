function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#current-temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
  }
  
  function city(event) {
    event.preventDefault();
    let apiKey = "9327e04f1ac6d6abtf4o9fc1c4f134a0";
    let searchInput = document.querySelector("#search-text-input");
    let city = searchInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", city);
  
  let currentDate = document.querySelector("#current-date");
  let now = new Date();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let day = now.getDay();
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (hours < 10) {
    minutes = `0${hours}`;
  }
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let specificDay = days[day];
  currentDate.innerHTML = `${specificDay}, ${hours}:${minutes}`;