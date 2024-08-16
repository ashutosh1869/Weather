const apiKey ='6797c9ee3e0bbff4f6c9626da623ff43';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// console.log(searchBox.value);
// console.log(searchBtn);
async function checkWeather(city){
    const responce = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`); 
    var data = await responce.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity h1").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind h1").innerHTML = data.wind.speed + " km/h" ;
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".card").style.backgroundColor="linear-gradient(135deg,rgb(239, 196, 117,0.9) , rgb(143, 204, 247,0.7))";
    }
    if(responce.status == 404){
        alert("invalid city.");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    searchBox.innerHTML = null;
})

