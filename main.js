const apiKey ="9926e1b84a1dfb785124fa9a7f2710cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=abuja";

async function weatherCheck() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

weatherCheck()

