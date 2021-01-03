import React from "react";

export default function FormattedDate(props) {
    console.log(props.date);
    let date = new Date(props.date * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) { hours = `0${hours}`}
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0${minutes}`}

    return <div>Last updated: {day}, {hours}:{minutes} </div>;
}