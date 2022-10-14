import $ from 'jquery';

var KEY = "02823c704385be331f682e77eabacece";
var x = document.getElementById("test");
var lat, long;
function sendLongLat(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat,long)
}
var URL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+KEY;
var request = $.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather",
  method: "GET",
  data: { id : '2172797', appid: '02823c704385be331f682e77eabacece'},
  success: function(response) {
      // response from OpenWeatherMap
      var dataArray = JSON.parse(response); // create an array from JSON element
      console.log(dataArray);
  }
});



