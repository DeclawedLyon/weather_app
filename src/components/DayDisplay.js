import React from "react";
import './dayDisplay.css'

export default function DayDisplay(props) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const today = new Date();
  const date = `${weekdays[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

  const createIconDiv = (icon) => {
    return (
      <div className='weather-icon'>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>
    );
  };

  const iconDiv = createIconDiv(props.icon);
  
  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const day = a.getDate();
    const time = `${month} ${day}, ${year}` ;
    const b = new Date(time)
    const dayOfWeek = b.getDay();

    return `${weekdays[dayOfWeek]}, ${time}`;
  };

  const dateConverter = (date) => {
    const newDate = date.slice(0,3)
    return newDate
  }

  const todayTest = (todaysDate, calendarDate) => {
    console.log(todaysDate, calendarDate)
    if (todaysDate !== calendarDate) return false;
    return true
  }

  return (
    <div className={`day-container${todayTest(date, timeConverter(props.date)) ? ' --today' : ''}`}>
      <div className="date">
        {dateConverter(timeConverter(props.date))}
      </div>
      {iconDiv}
      {/* {props.description} */}
      <div id="tempurature-range">
        <div className="daily-low-temp">{props.low}</div>
        <div className="daily-high-temp">{props.high}</div>
      </div>
    </div>
  )
}