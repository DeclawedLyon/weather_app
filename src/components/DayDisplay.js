import React from "react";
import './dayDisplay.css'
import axios from "axios";

export default function DayDisplay(props) {
  const APIkey = 'c3e3e2fc9c4f9664552d6afaa0476548';
  const lat = '50.72';
  const lon = '-113.97'
  const part = '';
  const time = Date.now() - 500000;

  React.useEffect(() => {
    // const res = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`)
    // .then(console.log(res))
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${part}&appid=${APIkey}`)
    .then(res => res.json())
    .then(res => console.log(res.daily))
    // console.log('hello world')
    console.log(time)
  }, [])

  return (
    <div id="day-container">
      <div className="date">
        {props.date}
      </div>
      <div id="weather-status-icon">{props.icon}</div>
      <div id="tempurature-range">
        <div className="daily-low-temp">{props.low}</div>
        <div className="daily-high-temp">{props.high}</div>
      </div>
    </div>
  )
}