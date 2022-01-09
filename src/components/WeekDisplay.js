import React, { useState } from "react";
import DayDisplay from "./DayDisplay";

export default function WeekDisplay(props) {
  const [weatherData, setWeatherData] = useState([])
  const APIkey = 'c3e3e2fc9c4f9664552d6afaa0476548';
  const lat = '50.72';
  const lon = '-113.97'
  const part = '';
  let mappedForecast = ['<div> hello world </div>'];
  
  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${part}&appid=${APIkey}`)
    .then(res => mappedForecast = res.json())
    .then(res => {setWeatherData(res)})
  }, [])
  console.log('state is: ',weatherData)
  if (weatherData.length != 0) {
    mappedForecast = weatherData.daily.map(dailyData => {
      return (
        <DayDisplay
          date={dailyData.dt}
          icon={dailyData.weather[0].icon}
          description={dailyData.weather[0].description}
          low={dailyData.temp.min}
          high={dailyData.temp.max}
          temp={dailyData.temp.day}
          iconURL={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
        />
      )
    })
  }

  return (
    <div className='week-container'>
      {mappedForecast}
    </div>
  )
}