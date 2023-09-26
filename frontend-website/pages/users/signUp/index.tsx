import router from 'next/router';
import React, { FormEvent, useState } from 'react'

export default function signUp() {

    const [error , setError] = useState("");

    const [password, setPassword] = useState('')
   
    function handleChange(e : any) {
      setPassword(e.target.value)
    }
   
    function passwordValidation(password: any, confirm_password:any){
      // Password requirements
      const requirements = [
        // Must be at least 8 characters
        password.length >= 8,
        // Must contain at least 1 uppercase letter
        /[A-Z]/.test(password),
        // Must contain at least 1 lowercase letter
        /[a-z]/.test(password),
        // Must contain at least 1 number
        /\d/.test(password)
      ]
   
      // If all requirements are met, password is valid
      const isValid = requirements.every(Boolean);
  
      if (isValid) {
        if(password === confirm_password){
            setError("");
            return true;
        } else{
            setError("passwords do not match");
            return false;
        }
        
      } else {
        setError("Password must be longer than 8 characters and contain at least 1 uppercase, 1 lowercase letter and 1 number");
        return false;
      }
    }


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
     
        let formData : any = new FormData(event.currentTarget);
        formData = Object.fromEntries(formData);
        const body = JSON.stringify(formData);

        if(!passwordValidation(formData.password, formData.confirm_password)) return;
        
        const response = await fetch('http://localhost:8080/users/', {
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: body,
        });
     
        // Handle response if necessary
        const status = await response.status;
        const data = await response.json();
        
        if(status == 201){
            router.push('/');
        }else{
            setError(data.message);
        }
      }


  return (
    <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-xs">
                <form className=" bg-primary_blue shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input className="shadow appearance-none border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='first_name' type="text" placeholder="First Name" required={true}/>

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Second Name
                        </label>
                        <input className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='second_name' type="text" placeholder="Second Name" required={true}/>

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' type="email" placeholder="Email" required={true}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="******************" required={true} />

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='confirm_password' type="password" placeholder="******************" required={true}/>
                        <p className=" w-full text-center text-red-500 text-xs">{error}</p>
                    </div>
                    <button className=" w-full bg-white hover:bg-secondary_blue hover:text-white text-primary_blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </form>
            </div>

    </div>
    
  )
}
