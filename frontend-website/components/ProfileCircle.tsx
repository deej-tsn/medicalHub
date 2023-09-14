import React, { useEffect } from 'react';

export default function ProfileCircle(props : {svgPath : String}) {
  return (
    <div className='h-10 my-1 ml-auto mx-3 aspect-square rounded-full bg-white drop-shadow-md overflow-hidden hover:scale-110 transition-transform ease-in-out'>

        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${props.svgPath}`}/>
    </div>
  )
}
