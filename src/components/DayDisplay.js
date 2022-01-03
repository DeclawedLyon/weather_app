import React from "react";
import './dayDisplay.css'

export default function DayDisplay(props) {
  return (
    <div id="day-container">
      <div class="date">
        {props.date}
      </div>
      <div id="weather-status-icon">{props.icon}</div>
      <div id="tempurature-range">
        <div class="daily-low-temp">{props.low}</div>
        <div class="daily-high-temp">{props.high}</div>
      </div>
    </div>
  )
}