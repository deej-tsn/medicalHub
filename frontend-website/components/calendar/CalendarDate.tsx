import React, { useEffect, useState } from 'react'

export default function CalendarDate(props : {date : number, month:number, enabled: boolean, currentlySelected:boolean, clickedDate: any}) {
  let [color,setColor] = useState("#FFFFFF")

  useEffect(() => {
    setColor("#FFFFFF")
    if(!props.enabled){
      setColor("transparent");
  
    }
  }, [props.enabled]);


  return (
    <div className={'w-full h-full flex justify-center items-center'}>
      

      <div style = {{backgroundColor : color }} className=' w-6 aspect-square text-center rounded-full hover:scale-110 transition-transform ease-in-out' onClick={() => props.clickedDate(props.date)}>
      {((props.enabled) ? props.date: "")}
      </div>
      
      
    </div>
  )
}