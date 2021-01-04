import React, { useState } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
  console.log(response.data);
  setForecast(response.data);
  setReady(true);
}
  if (ready){
  return (
    <div className="Forecast row">
      <DailyForecast data={forecast.daily[1]} />
      <DailyForecast data={forecast.daily[2]} />
      <DailyForecast data={forecast.daily[3]} />
      <DailyForecast data={forecast.daily[4]} />
      <DailyForecast data={forecast.daily[5]} />
      <DailyForecast data={forecast.daily[6]} />

    </div>
  );    
  } else {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&exclude=current,minutely,hourly,alerts&appid=aef650f4f97d6be4e2588d635fe74f28&units=metric`
  axios.get(apiUrl).then(handleForecastResponse);    
  return "lOADING"
  }

}
