import NavBar from "@/components/NavBar";
import Calendar from "@/components/calendar/Calendar";
import { useEffect, useState } from "react"



export default function Home() {

  let [message, setMessage] : any = useState("loading");
  useEffect(()=> {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()).then(
        data => {
          console.log(data)
          setMessage(data.message)
        })
    
  } , [])
  return (
    <div className=" w-screen h-screen flex items-center flex-col justify-center">
      <NavBar 
      name = {message}/>

      <Calendar/>
    </div>
  )
}
