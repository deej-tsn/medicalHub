import React, { useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'

const date = new Date();
const day = date.getDay();
const month = date.getMonth();

export default function Calendar() {
  let [currentMonth, setCurrentMonth] = useState(month);

  const updateMonth = (indexJump : number) => {
    setCurrentMonth(( (currentMonth + indexJump) + 12 ) % 12);
  } 

  const clickedDate = (date: number) =>{
    console.log(`the pressed date is ${date} : ${currentMonth}`);
  }

  return (
    <div className=' w-96 aspect-square flex flex-col rounded-xl bg-primary_blue overflow-hidden drop-shadow-xl'>
        <CalendarHeader
          month={currentMonth}
          updateMonth = {updateMonth}/>
        <CalendarGrid 
          month={currentMonth}
          day = {day}
          LEAPYEAR = {false}
          clickedDate={clickedDate}/>
    </div>
  )
}
