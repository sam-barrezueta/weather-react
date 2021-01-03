import React, { useState } from "react";

export default function Temperature(props) {
    let [unit, setUnit] = useState('celsius');

    function showFahrenheit(event){
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit('celsius');
    }

    if (unit === 'celsius') {
     return(
        <div>
            {Math.round(props.celsius)}
            <span className="unit">
                <strong>
                    °C
                </strong> |{" "}
                <a href="/" onClick={showFahrenheit}>
                °F
                </a>
            </span>
        </div>
    );       
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return(
        <div>
            {Math.round(fahrenheit)}
            <span className="unit">
                <a href="/" onClick={showCelsius}>
                °C
                </a>{" "}
                | <strong>
                    °F
                </strong>
            </span>
        </div>
    );   
    }

}