import React from 'react';
import ProfileCircle from './ProfileCircle';
import { Cookies } from 'react-cookie';
import { useRouter } from 'next/router';

export default function NavBar(props : {name : String}) {
  const cookies = new Cookies();
  const router = useRouter();
  const logOut = () => {
    cookies.remove('user', {path : '/'});
    router.push('/');
  }
  
  return (
    <div className='flex flex-row w-full h-14 bg-primary_blue drop-shadow-lg p-2 items-center absolute left-0 top-0'>
            <button className='w-fit mx-2 bg-white hover:bg-secondary_blue hover:text-white text-primary_blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={logOut}>Sign Out</button>

            <ProfileCircle
                svgPath={props.name} />
        
    </div>
  )
}
