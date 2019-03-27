const API_KEY = "12e9db9a1965c8c0e9d87c09be5c1fb2"

function handleFormSubmit(event) {
  //handle submit event
  document.addEventListener('submit',
  function(event) {
    event.preventDefault();
    var formValue = document.getElementById("city").value
    fetchCurrentWeather(formValue)
  })
}

function fetchCurrentWeather(formValue) {
  //fetch current weather based on city
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formValue}&APPID=${API_KEY}`)
  .then(resp => resp.json())
  .then(json => displayCurrentWeather(json));
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  
  // current temp
  var temp = json.main.temp
  console.log(temp)
  const current = document.querySelector('#current')
  const currentTemp = document.createElement('currentTemp')
  currentTemp.innerHTML = `<p>${temp}°</p>`
  current.appendChild(currentTemp)
  
  // min temp
  var min = json.main.temp_min
  console.log(min)
  const minId = document.querySelector('#min')
  const minTemp = document.createElement('minTemp')
  minTemp.innerHTML = `<p>${min}°</p>`
  minId.appendChild(minTemp)
  
  // max temp
  var max = json.main.temp_max
  console.log(max)
  const maxId = document.querySelector('#max')
  const maxTemp = document.createElement('maxTemp')
  maxTemp.innerHTML = `<p>${max}°</p>`
  maxId.appendChild(maxTemp)
  
   // humidity
  var humidity = json.main.humidity
  const humidityId = document.querySelector('#humidity')
  const humidityTemp = document.createElement('humidityTemp')
  humidityTemp.innerHTML = `<p>${humidity}%</p>`
  humidityId.appendChild(humidityTemp)
  
   // cloud cover
  var clouds = json.clouds.all
  console.log(clouds)
  const cloudsId = document.querySelector('#clouds')
  const cloudsTemp = document.createElement('cloudsTemp')
  cloudsTemp.innerHTML = `<p>${clouds}%</p>`
  cloudsId.appendChild(cloudsTemp)
  
}


function fetchFiveDayForecast(formValue) {
  //fetch five day forecast data based on city
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${formValue}&APPID=${API_KEY}`)
  .then(resp => resp.json())
  .then(json => displayCurrentWeather(json));
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  
  // forecast loop
  const aside = document.querySelector('aside')
  var forecast = json.list.main.temp
  json.forEach(forecast => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${forecast}</h2>`
    main.appendChild(h2)
  })
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function(event) {
  //add event listener here for form submission
  handleFormSubmit(event);
})
