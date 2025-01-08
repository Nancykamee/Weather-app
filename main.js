const apiKey = "9926e1b84a1dfb785124fa9a7f2710cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// &_=${new Date().getTime()}

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else{
    var data = await response.json();

    // console.log(data);
    console.log(JSON.stringify(data, null, 2));

    // let weatherCondition = data.weather[0].main;
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".condition").innerHTML = data.weather[0].main;

  
    if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/Clear.png";
    }
    else if(data.weather[0].main == "clouds"){
      weatherIcon.src = "images/Clouds.png";
    }
    else if(data.weather[0].main == "drizzle"){
      weatherIcon.src = "images/Drizzle.png";
    }
    else if(data.weather[0].main == "humidity"){
      weatherIcon.src = "images/Humidity.png";
    }
    else if(data.weather[0].main == "mist"){
      weatherIcon.src = "images/Mist.png";
    }
    else if(data.weather[0].main == "rain"){
      weatherIcon.src ="images/Rain.png";
    }
    else if(data.weather[0].main == "snow"){
      weatherIcon.src ="images/Snow.png";
    }
    else if(data.weather[0].main == "wind"){
      weatherIcon.src = "images/Wind.png";
    }
    
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";


  }
  
  }

  searchBtn.addEventListener("click", () => {
    weatherCheck(searchBox.value);
  })