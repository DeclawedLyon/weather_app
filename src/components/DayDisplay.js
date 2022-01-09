import React from "react";
import './dayDisplay.css'

export default function DayDisplay(props) {
  // const iconURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
  const createIconDiv = (icon) => {
    return (
      <div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>
    )
  }
  const iconDiv = createIconDiv(props.icon);

  // const addimage = (icon) => {
  //   const img = new Image();
  //   img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  //   const iconDiv = document.getElementById('weather-status-icon');
  //   iconDiv.appendChild(img);
  // }
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  // console.log(timeConverter(props.date));
  console.log('the props are:', props)
  
  return (
    <div className="day-container">
      <div className="date">
        {timeConverter(props.date)}
      </div>
      {iconDiv}
      {props.description}
      {/* <img src='http://openweathermap.org/img/wn/10d@2x.png'/> */}
      {/* <img src={props.iconUrl}/> */}
      {/* <div id="weather-status-icon">{props.icon ? addimage(props.icon) : ''}</div> */}
      <div id="tempurature-range">
        <div className="daily-low-temp">{props.low}</div>
        <div className="daily-high-temp">{props.high}</div>
      </div>
    </div>
  )
}