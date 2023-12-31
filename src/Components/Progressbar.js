import React, { useState,useEffect } from 'react'
import './Progressbar.css'

function Progressbar() {
  const[progress,setProgress]=useState(0);
  const[load,setLoad]=useState("Loading...");


  useEffect(()=>{
    if(progress<100){
      setTimeout(()=>{
        setProgress(old=>old+2)
      },100)
    }
    if(progress>=100){
      setLoad("Complete!");

    }
   

  },[progress])
  return (
    <div className='body'>
    <h1>React progress bar</h1>
      <div className='main'>
        <div className='bar' style={{width:`${progress}%`}}>
          <span>
            {progress}%
          </span>
        </div>
        <p style={{textAlign:"center"}}>{load}</p>
      </div>
    </div>
  )
}

export default Progressbar
