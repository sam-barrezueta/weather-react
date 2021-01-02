import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Tuesday, 10:00",
    sunrise: "07:00",
    sunset: "18:00",
    temperature: 10,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: 5,
    wind: 3,
    description: "Sunny"
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <p>
            <small>Last updated: {weatherData.date}</small>
          </p>
        </div>

        <div className="col-6 daylight">
          <img
            className="daylight-icon"
            src="https://icons.iconarchive.com/icons/iconsmind/outline/32/Sunrise-icon.png"
            alt="sunrise"
          />{" "}
          {weatherData.sunrise} | {weatherData.sunset}
        </div>
      </div>
      <div className="row current-temperature">
        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          className="col-4 weather-icon"
        />
        <ul className="col-8 weather-details">
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/ph</li>
        </ul>
        <h2 className="col-6">
          {weatherData.temperature}
          <a href="/" className="unit active">
            °C
          </a>{" "}
          <span className="unit">|</span>{" "}
          <a href="/" className="unit">
            °F
          </a>
        </h2>
        <h3 className="col-6 description">{weatherData.description}</h3>
      </div>
      <hr />
    </div>
  );
}
