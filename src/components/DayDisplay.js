import React, {useState} from "react";
import './dayDisplay.css'
import axios from "axios";

export default function DayDisplay(props) {

  return (
    <div className="day-container">
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