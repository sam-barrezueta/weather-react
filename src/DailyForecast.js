import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DailyForecast.css";

export default function DailyForecast(props) {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ]
    let day = days[date.getDay()];
    let celsiusMax = Math.round(props.data.temp.max);
    let celsiusMin = Math.round(props.data.temp.min);
    let fahrenheitMax = Math.round((celsiusMax * 9/5) + 32);
    let fahrenheitMin = Math.round((celsiusMin * 9/5) + 32);


    if (props.forecastUnit === "imperial") {
      return (
        <div className="DailyForecast col-2">
          <h5>{day}</h5>
            <span className="ForecastIcon">
            <WeatherIcon code={props.data.weather[0].icon} size={38} />
            </span>
          <p> 
            {fahrenheitMax}° | {fahrenheitMin}° F
          </p>
        </div> 
    );      
  
    } else {
        return (
        <div className="DailyForecast col-2">
          <h5>{day}</h5>
            <span className="ForecastIcon">
            <WeatherIcon code={props.data.weather[0].icon} size={38} />
            </span>
          <p> 
            {celsiusMax}° | {celsiusMin}° C
          </p>
        </div> 
    );      
    }

}