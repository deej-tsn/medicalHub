import NavBar from "@/components/NavBar";
import Calendar from "@/components/calendar/Calendar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";



export default function Home() {

  const [cookie] = useCookies(['user']);
  const router = useRouter();

  let [message, setMessage] : any = useState("loading");
  useEffect(()=> {
    if(!cookie.user){
      router.push('/');
    }else{
      fetch("http://localhost:8080/", {
      method: 'GET',
      headers: new Headers({'content-type': 'application/json', 'auth': cookie.user})
    }).then(
      response => response.json()).then(
        data => {
          setMessage(data.first_name)
        })
    }
    
  } , []);

  return (
    <div className=" w-screen h-screen flex items-center flex-col justify-center">
      <NavBar 
        name = {message}/>
      <h1  className=' text-primary_blue text-2xl'> {`Welcome ${message}`} </h1>
      <Calendar/>
    </div>
  )
}
