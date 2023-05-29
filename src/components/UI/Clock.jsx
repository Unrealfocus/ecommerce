import React,{useState,useEffect}from 'react'
import '../../styles/clock.css'


const Clock = () => {
    const[day,setDay]=useState();
    const[hour,setHour]=useState();
    const[minute,setMinute]=useState();
    const[second,setSecond]=useState();

    let interval;
const countDown=()=>{

    const destination=new Date('may 23,2023').getTime()
    interval=setInterval(()=>{
      const now= new Date().getTime();
      const difference=destination-now ;
      const days=Math.floor(difference/(1000*60*60*24)) 
      const hours=Math.floor(difference % (1000*60*60*24)/(1000*60*60)) 
      const minutes=Math.floor(difference % (1000*60*60)/(1000*60)) 
      const seconds=Math.floor(difference % (1000*60)/(1000))   
          if(destination <0) clearInterval(interval.current)
          else{
            setDay(days);
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);
          }
    })
}
useEffect(()=>
 countDown()
)
   
  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
        <div className="clock__data d-flex align-items-center gap-3">
         <div className="text-center">
            <h1 className='text-white fs-3'>{day}</h1>
            <h5 className='text-white fs-6'>Days</h5>
         </div>
         <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
         <div className="text-center">
            <h1 className='text-white fs-3'>{hour}</h1>
            <h5 className='text-white fs-6'>Hours</h5>
         </div>
         <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
         <div className="text-center">
            <h1 className='text-white fs-3'>{minute}</h1>
            <h5 className='text-white fs-6'>Minutes</h5>
         </div>
         <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
         <div className="text-center">
            <h1 className='text-white fs-3'>{second}</h1>
            <h5 className='text-white fs-6'>Seconds</h5>
         </div>
       
        </div>
    </div>
  )
}

export default Clock