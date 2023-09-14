import React from 'react';
import ProfileCircle from './ProfileCircle';

export default function NavBar(props : {name : String}) {
  return (
    <div className='flex flex-row w-full h-14 bg-primary_blue drop-shadow-lg p-2 items-center absolute left-0 top-0'>
            <ProfileCircle
                svgPath={props.name} />
        
    </div>
  )
}
