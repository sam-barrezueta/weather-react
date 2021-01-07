import React, { useState } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
  setForecast(response.data);
  setReady(true);
}
  if (ready && props.data.lat === forecast.lat && props.data.lon === forecast.lon){
  return (
    <div className="Forecast row">
      <DailyForecast data={forecast.daily[1]} forecastUnit={props.forecastUnit} />
      <DailyForecast data={forecast.daily[2]} forecastUnit={props.forecastUnit} />
      <DailyForecast data={forecast.daily[3]} forecastUnit={props.forecastUnit} />
      <DailyForecast data={forecast.daily[4]} forecastUnit={props.forecastUnit} />
      <DailyForecast data={forecast.daily[5]} forecastUnit={props.forecastUnit} />
      <DailyForecast data={forecast.daily[6]} forecastUnit={props.forecastUnit} />
    </div>
  );    
  } else {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=aef650f4f97d6be4e2588d635fe74f28&units=metric`
  axios.get(apiUrl).then(handleForecastResponse);    
  return "lOADING"
  }

}
