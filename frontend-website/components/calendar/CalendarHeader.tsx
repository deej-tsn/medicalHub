import React, { useState } from 'react';
import Image from 'next/image';

export default function CalendarHeader(props : {month : number, updateMonth : any}) {
  const months = ["January", "February", "March", "April","May", "June", "July", "August","September","October","November","December"]

  return (
    <div className=' w-full h-16 flex items-center bg-white p-2 justify-evenly drop-shadow-xl border-2 rounded-t-xl border-primary_blue'>
       <div className=' w-fit h-fit'  onClick={() => props.updateMonth(-1)}>
        <Image
          className=' -scale-100'
          src="/arrow.png"
          width={25}
          height = {25}
          alt="left arrow"/>
       </div>
        
        
        <h1 className='w-20 text-center'>{months[props.month]}</h1>

        <div className=' w-fit h-fit'  onClick={() => props.updateMonth(1)}>
          <Image
            src="/arrow.png"
            width={25}
            height = {25}
            alt="right arrow"/>
        </div>
    </div>
  )
}
