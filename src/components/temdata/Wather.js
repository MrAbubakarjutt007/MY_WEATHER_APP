import React, { useEffect, useState } from 'react'
import "./Wather.css"
export default function Wather() {
const [city, setCity]= useState("null")
const [searchdata, setSearch]= useState("pakistan")
useEffect(()=>
{

  const apidata =async()=>
  {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&units=metric&appid=d25df244c4cd8fd736b30e8850b43bf2`;
    const responsedata = await fetch(url);
    const jasondata = await responsedata.json();
    setCity(jasondata.main);
  };
  apidata();
},[searchdata])

  return (
    <>
    <div className="box">
        <div className="inputdata">
            <input type='search' className='inputFeild' value={searchdata} onChange={(e)=>
              {
                setSearch(e.target.value)
              }}/>
        </div> 
      {
        !city ? (<p>data not found</p>):(
          <div>
             <div className='info'>
        <h2 className='location'>
             <i className="fa-solid fa-street-view"></i>{searchdata}
        </h2>
        <h1 className='temp'>
             {city.temp}°Cel
        </h1>
        <p className='temp'>
              MIN:{city.temp_min}°Cel | MAX:{city.temp_max}°Cel
        </p>
    </div>
          </div>   
          
        )
      }  
   
    </div>   
    </>
  )
}
