import Login from '@/components/Login'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';

export default function Landing() {

  const router = useRouter();

  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    if(cookies.user){
      router.push('/home');
    }
  }, [cookies]);
  

  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      
      <Login 
        setCookie={setCookie}/>

    </div>
  )
}
