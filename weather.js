const apiKey = "5df25409e9cc34f77910afe33ae566a8";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    
    .then(data => {
      console.log(data)
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText =
        `🌡 Temperature: ${data.main.temp} °C`;
      document.getElementById("condition").innerText =
        `☁ Condition: ${data.weather[0].main}`;
      document.getElementById("humidity").innerText =
        `💧 Humidity: ${data.main.humidity}%`;
    })
    .catch(() => {
      alert("City not found!");
    });
}
