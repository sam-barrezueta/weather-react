import React from "react";

export default function Wind(props) {
    let metricWind = props.data.wind
    let imperialWind = Math.round(((metricWind / 1.609) + Number.EPSILON) * 100) / 100;

    if (props.forecastUnit === "imperial") {
     return(
        <li>Wind: {imperialWind} m/ph</li>
    );       
    } else {
     return(
        <li>Wind: {metricWind} km/ph</li>
    ); 
    }

}