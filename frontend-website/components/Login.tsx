
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

export default function Login( props : { setCookie : any}) {
    const router = useRouter();

    const [error, setError] = useState('');

    

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
     
        const formData = new FormData(event.currentTarget);
        const body = JSON.stringify(Object.fromEntries(formData));
        const response = await fetch('http://localhost:8080/users/signIn', {
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: body,
        });
     
        // Handle response if necessary
        const status = await response.status;
        const data = await response.json();
        
        if(status == 201){
            const token = data;
            props.setCookie('user', token, {path: '/'});
            router.push('/home');
        }else{
            setError(data.message);
        }
      }

  return (
    <div className="w-full max-w-xs">
    <form className=" bg-primary_blue shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' type="email" placeholder="Email" required={true}/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="******************" required={true}/>
            <p className=" w-full text-center text-red-500 text-xs">{error}</p>
        </div>
        <button className=" w-full bg-white hover:bg-secondary_blue hover:text-white text-primary_blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
        </button>
        <div className=' w-full flex items-center justify-evenly my-4'>
                <Link className="inline-block align-baseline font-bold text-sm text-white hover:text-secondary_blue" href="/users/forgotPassword">
                    Forgot Password?
                </Link>
                <Link className='inline-block align-baseline font-bold text-sm text-white hover:text-secondary_blue' href="/users/signUp">
                    Sign Up
                </Link>
        </div>
    </form>
</div>
  )
}
