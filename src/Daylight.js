import React from "react";

export default function Daylight(props) {
    let riseTime = new Date(props.sunrise * 1000);
    let riseHour = riseTime.getUTCHours();
    if (riseHour < 10) {riseHour = `0${riseHour}`};
    let riseMinutes = riseTime.getUTCMinutes();
    if (riseMinutes < 10) {riseMinutes = `0${riseMinutes}`};

    let setTime = new Date(props.sunset * 1000);
    let setHour = setTime.getUTCHours();
    if (setHour < 10) {setHour = `0${setHour}`};
    let setMinutes = setTime.getUTCMinutes();
    if (setMinutes < 10) {setMinutes = `0${setMinutes}`};

    return (
        <div>
            <img className="daylight-icon" src="https://icons.iconarchive.com/icons/iconsmind/outline/32/Sunrise-icon.png" alt="sunrise"/>
            {" "}
            {riseHour}:{riseMinutes} | {setHour}:{setMinutes}
        </div>  
    );
}