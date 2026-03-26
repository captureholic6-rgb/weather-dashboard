const apiKey = "03ca7062f954e5771cecea5fa059a55c"; // Replace with your OpenWeather API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `${data.main.temp}°C`;
        document.getElementById("desc").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;

        animateCard();

    } catch (error) {
        console.error(error);
        alert("Error fetching weather data");
    }
}

/* Smooth animation on update */
function animateCard() {
    const card = document.getElementById("weatherCard");
    card.style.transform = "scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
    }, 200);
}