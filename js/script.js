var today = new Date();
var five_days_data = [];
var pastWeather = JSON.parse(localStorage.getItem('pastWeather')) || [];

function get_current_forecast(lat, lon){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=50935aee1783372b16bb0fdccd4bd624&units=imperial&cnt=40',{
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        display_current_weather_data(data);
    });
  }

  function get_five_day_forecast(lat, lon){
    console.log("five day weather");
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=imperial&cnt=40&appid=50935aee1783372b16bb0fdccd4bd624',{
  })
  .then(function(response){
      return response.json();
  })
  .then(function (data) {
    display_five_days_weather(data);
  });
}