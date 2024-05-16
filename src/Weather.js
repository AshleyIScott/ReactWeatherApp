import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

          <link rel="stylesheet" href="src/style.css" />
          <title>Weather⛅️App</title>
        </head>

        <body>
          <div className="app">
            <header>
              <form id="search-city">
                <input
                  type="search"
                  placeholder="Enter a city"
                  required=""
                  class="search-city-input"
                  id="search-city-input"
                />
                <input type="submit" value="Search" className="search-button" />
              </form>
            </header>
            <main>
              <div className="weather-data">
                <div>
                  <h1 id="current-city">Vancouver</h1>
                  <p class="info">
                    <span id="current-day-time">Sunday, 5:30pm</span>
                    <span id="current-conditions"> Cloudy</span>
                    <br />
                    Humidity: <strong id="humidity">75%</strong> Wind:
                    <strong id="wind"> 6 km/hr</strong>
                  </p>
                </div>
                <div className="current-temp">
                  <div id="temp-icon"> 🌥</div>
                  <div className="temp-value">9</div>
                  <div className="temp-unit">°C</div>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </main>
            <script src="src/index.js"></script>
            <footer>
              coded by
              <a href="https://github.com/AshleyIScott" target="_blank">
                {" "}
                Ashley Irving-Scott
              </a>
              ◇ open-sourced on
              <a
                href="https://github.com/AshleyIScott/Weather-App-Final"
                target="_blank"
              >
                {" "}
                GitHub
              </a>
              ◇ hosted on
              <a
                href="https://deluxe-starlight-20ace5.netlify.app/"
                target="_blank"
              >
                {" "}
                Netlify
              </a>
            </footer>
          </div>
        </body>
      </html>
    </div>
  );
}
