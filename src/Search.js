import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-9 search-bar">
            <input
              type="search"
              placeholder="Search city..."
              className="form-control"
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
      <div className="row">
        <div className="col-6">
          <h1>Cambridge</h1>
          <p>
            <small>Last updated: Tuesday 11:00</small>
          </p>
        </div>

        <div className="col-6 daylight">
          <img
            className="daylight-icon"
            src="https://icons.iconarchive.com/icons/iconsmind/outline/32/Sunrise-icon.png"
            alt="sunrise"
          />{" "}
          07:00 | 19:00
        </div>
      </div>

      <div className="row current-temperature">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="description"
          className="col-4 weather-icon"
        />
        <ul className="col-8 weather-details">
          <li>Humidity: 4%</li>
          <li>Wind: 2 km/ph</li>
        </ul>
        <h2 className="col-6">
          11
          <a href="/" className="unit active">
            °C
          </a>{" "}
          <span className="unit">|</span>{" "}
          <a href="/" className="unit">
            °F
          </a>
        </h2>
        <h3 className="col-6 description">Cloudy</h3>
      </div>

      <hr />


    </div>
  );
}
