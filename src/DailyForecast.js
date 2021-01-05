import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DailyForecast.css";

export default function DailyForecast(props) {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ]
    let day = days[date.getDay()];
    return (
        <div className="DailyForecast col-2">
          <h5>{day}</h5>
            <span className="ForecastIcon">
            <WeatherIcon code={props.data.weather[0].icon} size={38} />
            </span>
          <p> 
            {Math.round(props.data.temp.max)}° | {Math.round(props.data.temp.min)}°
          </p>
        </div> 
    );
}