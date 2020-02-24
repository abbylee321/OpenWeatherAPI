//start here 
//this is the URL - "http://api.openweathermap.org/data/2.5/forecast?q=Brooklyn&appid=https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=305561b79b6a4ea260493ce572507c56
//Questions 
//1. Why am I making so many API requests? How do I turn off? - solved?
//2. How do I get the API data to display for:  - solved
      // - for data.sys.sunrise, sunset? and how to convert?
//3. How do I use the switch button to change a) the picture b)the background c) the sunrise/sunset time?


window.addEventListener('load', () => {
  });
  


  const button = document.getElementById("switch-button");

  button.onclick = async function fetchWeather() {
    //change background color 
    document.body.style.backgroundColor = "#919ACD"; 

    //change image 
    document.getElementById('img-sunrise').src = "sunset.png";

    //calling the data

    //const URL = "sample-weatherny.json";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=305561b79b6a4ea260493ce572507c56";
    const response = await fetch(URL);
    const data= await response.json(); 
    let unix_timestamp_sunrise = data.sys.sunrise;
    let unix_timestamp_sunset = data.sys.sunset;

    //convert the time from unix 
    var date = new Date(unix_timestamp_sunset * 1000);
    var hours = date.getHours();
    var amPM = "";

    //convert the time to 12-hour time 
    if (hours > 12) { 
      hours = hours%12;
      amPM = "pm";
      console.log(hours);
    } else {
      amPM = "am";
    }

    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log("converted sunrise time:" + formattedTime + " am");

    var showTime = document.getElementById("time");
    showTime.innerHTML = "Sunset Time: " + formattedTime + amPM;

  }





