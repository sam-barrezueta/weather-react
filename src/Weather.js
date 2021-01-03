import React from "react";
import FormattedDate from "./FormattedDate";
import Daylight from "./Daylight";
import "./Weather.css";

export default function Weather(props) {
    return (
        <div className="Weather">
         <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <p>
              <small><FormattedDate date={props.data.date} /></small>
            </p>
          </div>

          <div className="col-6 daylight">
            <Daylight sunrise={props.data.sunrise} sunset={props.data.sunset} />
          </div>
        </div>

        <div className="row current-temperature">
          <img
            src= {props.data.icon}
            alt={props.data.description}
            className="col-4 weather-icon"
          />
          <ul className="col-8 weather-details">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/ph</li>
          </ul>
          <h2 className="col-6">
            {Math.round(props.data.temperature)}
            <a href="/" className="unit active">
              °C
            </a>{" "}
            <span className="unit">|</span>{" "}
            <a href="/" className="unit">
              °F
            </a>
          </h2>
          <h3 className="col-6 description">{props.data.description}</h3>
        </div>
        </div>
    );
}