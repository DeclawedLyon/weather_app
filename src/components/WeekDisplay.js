import React from "react";
import DayDisplay from "./DayDisplay";

export default function WeekDisplay(props) {
  return (
    <div>
      Week Display:
      <DayDisplay 
          date="Monday"
          icon="🍆"
          low="-27"
          high="-10"
        />
        {/* <DayDisplay 
        date="Tuesday"
        icon="🍆"
        low="-27"
        high="-10"
      />
      <DayDisplay 
        date="Wednesday"
        icon="🍆"
        low="-27"
        high="-10"
      />
      <DayDisplay 
        date="Thursday"
        icon="🍆"
        low="-27"
        high="-10"
      />
      <DayDisplay 
        date="Friday"
        icon="🍆"
        low="-27"
        high="-10"
      />
      <DayDisplay 
        date="Saturday"
        icon="🍆"
        low="-27"
        high="-10"
      />
      <DayDisplay 
        date="Sunday"
        icon="🍆"
        low="-27"
        high="-10"
      /> */}
    </div>
  )
}