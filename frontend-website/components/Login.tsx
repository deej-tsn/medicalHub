import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="w-full max-w-xs">
    <form className=" bg-primary_blue shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <button className=" w-full bg-white hover:bg-secondary_blue hover:text-white text-primary_blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
