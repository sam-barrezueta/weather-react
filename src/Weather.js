import React from "react";
import FormattedDate from "./FormattedDate";
import Daylight from "./Daylight";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

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
        <div className="col-4">
            <WeatherIcon code={props.data.icon} size={78} />  
        </div>
         
          <ul className="col-6 weather-details">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/ph</li>
          </ul>
          <h2 className="col-6">
            <Temperature celsius={props.data.temperature} forecastUnit={props.forecastUnit} setForecastUnit={props.setForecastUnit}/>
          </h2>
          <h3 className="col-6 description">{props.data.description}</h3>
        </div>        
        <hr />
        <Forecast data={props.data} forecastUnit={props.forecastUnit} />
        </div>
    );
}