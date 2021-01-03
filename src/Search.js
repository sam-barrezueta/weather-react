import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({});

  function showWeather(response){
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: response.data.dt,
      sunrise: response.data.sys.sunrise + response.data.timezone,
      sunset: response.data.sys.sunset + response.data.timezone
    });
  }
  
  function handleSubmit(event){
    event.preventDefault();
    handleSearch(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch() {
  setReady(true);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aef650f4f97d6be4e2588d635fe74f28&units=metric`;
  axios.get(apiUrl).then(showWeather);  
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
        <Weather data={weatherData} />
        <hr />
      </div>
      );
  } else {
    handleSearch();
    return "Loading";
  }
}
