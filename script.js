const weatherData = {
  tempUnitCel: "C",
  tempUnitFahrenheit: "F",
  windSpeedUnit: "m/s",
  windSpeedUnitKmh: "km/h",
  days: [
    {
      day: "Monday",
      temp: 37,
      tempFahrenheit: (37 * 9) / 5 + 32,
      windDirection: "north-east",
      windSpeed: 10,
      windSpeedKmh: 10 * 3.6,
      type: "Sunny",
    },
    {
      day: "Tuesday",
      temp: 22,
      tempFahrenheit: (22 * 9) / 5 + 32,
      windDirection: "north-west",
      windSpeed: 14,
      windSpeedKmh: 14 * 3.6,
      type: "Rainy",
    },
    {
      day: "Wednesday",
      temp: 20,
      tempFahrenheit: (20 * 9) / 5 + 32,
      windDirection: "south-east",
      windSpeed: 29,
      windSpeedKmh: 29 * 3.6,
      type: "Rainy-Windy",
    },
    {
      day: "Thursday",
      temp: 17,
      tempFahrenheit: (17 * 9) / 5 + 32,
      windDirection: "south-west",
      windSpeed: 12,
      windSpeedKmh: 12 * 3.6,
      type: "Cloudy",
    },
    {
      day: "Friday",
      temp: 25,
      tempFahrenheit: (25 * 9) / 5 + 32,
      windDirection: "north-east",
      windSpeed: 30,
      windSpeedKmh: 30 * 3.6,
      type: "Sunny-Windy",
    },
    {
      day: "Saturday",
      temp: -3,
      tempFahrenheit: (-3 * 9) / 5 + 32,
      windDirection: "south-east",
      windSpeed: 10,
      windSpeedKmh: 10 * 3.6,
      type: "Snow",
    },
    {
      day: "Sunday",
      temp: 14,
      tempFahrenheit: (14 * 9) / 5 + 32,
      windDirection: "north-west",
      windSpeed: 25,
      windSpeedKmh: 25 * 3.6,
      type: "Cloudy-Windy",
    },
  ],
};

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].querySelector(".day").innerText = weatherData.days[i].day;
  boxes[i].querySelector(".weather").innerText = weatherData.days[i].type;
  boxes[i].querySelector(
    ".temperature"
  ).innerHTML = `${weatherData.days[i].tempFahrenheit} ${weatherData.tempUnitCel} <i class="wi wi-degrees"></i>`;
}

const days = document.getElementsByClassName("box");
const widgetContainer = document.querySelector(".widgetContainer");
const widget = document.querySelector(".widget");
const additionalInfo = document.querySelector(".additionalInfo");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const windSpeedKmh = document.querySelector("#kmh");
const windSpeedMs = document.querySelector("#ms");
var num = null;

let kmh = false;
let ms = true;

fahrenheit.addEventListener("click", () => {
  console.log(num);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].querySelector(
      ".temperature"
    ).innerHTML = `${weatherData.days[i].tempFahrenheit} ${weatherData.tempUnitFahrenheit} <i class="wi wi-degrees"></i>`;
  }

  if (num !== null) {
    if (!kmh) {
      widget.style.display = "block";

      widget.innerHTML = `
    <h2>${boxes[num].querySelector(".day").innerText}</h2>
    <p>${boxes[num].querySelector(".weather").innerText}</p>
    <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
    <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
    <p>Wind direction: ${weatherData.days[num].windDirection}</p>
    <img src="/assets/${weatherData.days[num].windDirection}.png" width="50" />
     <p>Wind Speed: ${weatherData.days[num].windSpeed} ${
        weatherData.windSpeedUnit
      }
      </p> 
    `;
    } else {
      widget.style.display = "block";

      widget.innerHTML = `
    <h2>${boxes[num].querySelector(".day").innerText}</h2>
    <p>${boxes[num].querySelector(".weather").innerText}</p>
    <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
    <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
    <p>Wind direction: ${weatherData.days[num].windDirection}</p>
    <img src="/assets/${weatherData.days[num].windDirection}.png" width="50" />
     <p>Wind Speed: ${weatherData.days[num].windSpeedKmh} ${
        weatherData.windSpeedUnitKmh
      }
      </p> 
    `;
    }
  } else {
    widget.style.display = "none";
  }

  fahrenheit.style.color = "white";
  celsius.style.color = "initial";
});

celsius.addEventListener("click", () => {
  console.log(num);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].querySelector(
      ".temperature"
    ).innerHTML = `${weatherData.days[i].temp} ${weatherData.tempUnitCel} <i class="wi wi-degrees"></i>`;
  }
  if (num !== null) {
    if (!kmh) {
      widget.style.display = "block";

      widget.innerHTML = `
    <h2>${boxes[num].querySelector(".day").innerText}</h2>
    <p>${boxes[num].querySelector(".weather").innerText}</p>
    <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
    <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
    <p>Wind direction: ${weatherData.days[num].windDirection}</p>
    <img src="/assets/${weatherData.days[num].windDirection}.png" width="50" />
     <p>Wind Speed: ${weatherData.days[num].windSpeed} ${
        weatherData.windSpeedUnit
      }
      </p> 
    `;
    } else {
      widget.style.display = "block";

      widget.innerHTML = `
    <h2>${boxes[num].querySelector(".day").innerText}</h2>
    <p>${boxes[num].querySelector(".weather").innerText}</p>
    <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
    <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
    <p>Wind direction: ${weatherData.days[num].windDirection}</p>
    <img src="/assets/${weatherData.days[num].windDirection}.png" width="50" />
     <p>Wind Speed: ${weatherData.days[num].windSpeedKmh} ${
        weatherData.windSpeedUnitKmh
      }
      </p> 
    `;
    }
  } else {
    widget.style.display = "none";
  }

  fahrenheit.style.color = "initial";
  celsius.style.color = "white";
});

windSpeedKmh.addEventListener("click", () => {
  kmh = true;
  ms = false;
  windSpeedKmh.style.color = "white";
  windSpeedMs.style.color = "initial";
  if (num !== null) {
    if (kmh) {
      widget.style.display = "block";

      widget.innerHTML = `
      <h2>${boxes[num].querySelector(".day").innerText}</h2>
      <p>${boxes[num].querySelector(".weather").innerText}</p>
      <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
      <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
      <p>Wind direction: ${weatherData.days[num].windDirection}</p>
      <img src="/assets/${
        weatherData.days[num].windDirection
      }.png" width="50" />
       <p>Wind Speed: ${weatherData.days[num].windSpeedKmh} ${
        weatherData.windSpeedUnitKmh
      }
        </p> 
      `;
    }
  } else {
    widget.style.display = "none";
  }
});

windSpeedMs.addEventListener("click", () => {
  kmh = false;
  ms = true;
  windSpeedKmh.style.color = "initial";
  windSpeedMs.style.color = "white";
  if (num !== null) {
    widget.style.display = "block";

    widget.innerHTML = `
      <h2>${boxes[num].querySelector(".day").innerText}</h2>
      <p>${boxes[num].querySelector(".weather").innerText}</p>
      <p>${boxes[num].querySelector(".weatherIcon").innerHTML}</p>
      <h2>${boxes[num].querySelector(".temperature").innerHTML} </h2>
      <p>Wind direction: ${weatherData.days[num].windDirection}</p>
      <img src="/assets/${
        weatherData.days[num].windDirection
      }.png" width="50" />
       <p>Wind Speed: ${weatherData.days[num].windSpeed} ${
      weatherData.windSpeedUnit
    }
        </p> 
      `;
  } else {
    widget.style.display = "none";
  }
});

for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("click", function () {
    if (!kmh) {
      widget.style.display = "block";
      num = i;
      widget.innerHTML = `
        <h2>${boxes[i].querySelector(".day").innerText}</h2>
        <p>${boxes[i].querySelector(".weather").innerText}</p>
        <p>${boxes[i].querySelector(".weatherIcon").innerHTML}</p>
        <h2>${boxes[i].querySelector(".temperature").innerHTML} </h2>
        <p>Wind direction: ${weatherData.days[i].windDirection}</p>
        <img src="/assets/${
          weatherData.days[i].windDirection
        }.png" width="50" />
         <p>Wind Speed: ${weatherData.days[i].windSpeed} ${
        weatherData.windSpeedUnit
      }
          </p> 
        `;
    } else {
      widget.style.display = "block";
      num = i;
      widget.innerHTML = `
        <h2>${boxes[i].querySelector(".day").innerText}</h2>
        <p>${boxes[i].querySelector(".weather").innerText}</p>
        <p>${boxes[i].querySelector(".weatherIcon").innerHTML}</p>
        <h2>${boxes[i].querySelector(".temperature").innerHTML} </h2>
        <p>Wind direction: ${weatherData.days[i].windDirection}</p>
        <img src="/assets/${
          weatherData.days[i].windDirection
        }.png" width="50" />
         <p>Wind Speed: ${weatherData.days[i].windSpeedKmh} ${
        weatherData.windSpeedUnitKmh
      }
          </p> 
        `;
    }
  });
}

window.addEventListener("click", function (e) {
  if (document.querySelector(".widgetContainer").contains(e.target)) {
    // Clicked in box
    console.log("clicked inside the box");
  } else if (
    !document.querySelector(".row").contains(e.target) &&
    !document.querySelector(".commands").contains(e.target) &&
    !document.querySelector(".speedUnitChange").contains(e.target)
  ) {
    // Clicked outside the box
    num = null;

    widgetContainer.style.display = "none";
  } else {
    widgetContainer.style.display = "block";
  }
});
