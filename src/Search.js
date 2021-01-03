import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Daylight from "./Daylight";
import axios from "axios";
import Loader from 'react-loader-spinner'
import "./Search.css";

export default function Search() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({});

  function showWeather(response){
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt,
      description: response.data.weather[0].description,
      sunrise: response.data.sys.sunrise + response.data.timezone,
      sunset: response.data.sys.sunset + response.data.timezone
        });
  }

  function handleSubmit(event){
    event.preventDefault();
    setReady(true);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aef650f4f97d6be4e2588d635fe74f28&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  
  let form = (<form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9 search-bar">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              onChange={updateCity}
              autoComplete="off"
            />
          </div>
          <div className="col-1 search-button">
            <button
              type="submit"
              className="btn btn-outline-secondary"
              autoComplete="off"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-1 search-button">
            <button
              type="button"
              className="btn btn-outline-secondary current-city-btn"
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
      );
      
  if (ready){
      return (
      <div className="Search">
        {form}
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <p>
              <small><FormattedDate date={weatherData.date} /></small>
            </p>
          </div>

          <div className="col-6 daylight">
            <Daylight sunrise={weatherData.sunrise} sunset={weatherData.sunset} />
          </div>
        </div>

        <div className="row current-temperature">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="description"
            className="col-4 weather-icon"
          />
          <ul className="col-8 weather-details">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/ph</li>
          </ul>
          <h2 className="col-6">
            {Math.round(weatherData.temperature)}
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
  } else {
    return (
      <div className="Search">
        {form}
        <h2>
      <Loader
         type="ThreeDots"
         color="grey"
         height={100}
         width={50}
      />
        </h2>
        <hr />
      </div>
    );
  }
}
