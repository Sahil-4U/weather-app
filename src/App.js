import React from "react";
import { useState } from "react";

const App=()=>{
  const [log,setLog]=useState(0);
  const [lat,setLat]=useState(0);
  const [hemi,setHemi]=useState('');
  const [month,setMonth]=useState('');

  const handleClick=(e)=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let {latitude,longitude}=position.coords;
      console.log(longitude+"  "+latitude);
      setLog(longitude);
      setLat(latitude);
    })
    //get the hemisphere
    if(lat>0){
      setHemi("Northern Hemisphere");
    }else if(lat<0){
      setHemi("Southern Hemisphere");
    }else{
      setHemi("Equator");
    }
    //get the month
    const date=new Date();
    let currentMonth=date.getMonth();
    setMonth(currentMonth+1);
  }
  return(

    <div>
      <center>
      <h2>Lognitude:{log} <br/>  Latitude:{lat}</h2>
      <h3>Hemisphere:{hemi}</h3>
      <h3>Month:{month}</h3>
      <button onClick={handleClick}>Get my location</button>
      </center>
    </div>
  )
}

export default App;