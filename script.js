const apiKey = "6c2906f94ad3a6afe7437836c56a512f";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
 
    if (data.name != undefined) {
      document.querySelector(".city").innerHTML=data.name
    } else {
      document.querySelector(".city").innerHTML="fuck you"
  }
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Haze") {
    document.querySelector("#icon").setAttribute("src", "smog (1).png")
    document.querySelector("#icon")
  } else if (data.weather[0].main == "Smoke") {
    document.querySelector("#icon").setAttribute("src", "haze.png")
    document.querySelector("#icon")
  }else if (data.weather[0].main == "Clear") {
    document.querySelector("#icon").setAttribute("src", "clear-sky.png")
    document.querySelector("#icon")
  }else if (data.weather[0].main == "Clouds") {
    document.querySelector("#icon").setAttribute("src", "cloudy.png")
    document.querySelector("#icon")
  }else if (data.weather[0].main == "Sunny") {
    document.querySelector("#icon").setAttribute("src", "sun.png")
    document.querySelector("#icon")
  }
}


    searchBtn.addEventListener("click", () => {
    
      checkWeather(searchBox.value);
    })
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

checkWeather("dhaka");
