import React from 'react'
import CalendarDate from './CalendarDate';


export default function CalendarGrid(props : {month : number, LEAPYEAR : boolean, day : number, clickedDate : any}) {
  let febNumOfDays = 28;
  if(props.LEAPYEAR){
    febNumOfDays = 29;
  }

  const MONTH_NUM_OF_DAYS= [31,febNumOfDays,31,30,31,30,31,31,30,31,30,31]
  let grid = Array.from({length : 32}).map((_, index) => (
    <CalendarDate
      key={index+1}
      date = {index+1}
      enabled = {((index >= MONTH_NUM_OF_DAYS[props.month]))? false : true}
      currentlySelected = {false}
      month={props.month}
      clickedDate = {props.clickedDate}/>
  ))
  return (
    <div className=' w-full flex-grow grid grid-cols-8 grid-rows-4'>
      {grid}
    </div>
  )
}
