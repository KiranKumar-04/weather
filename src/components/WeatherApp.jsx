import React, { useState } from 'react'
import searchIcon from '../components/Assets/search.png'
import clearIcon from '../components/Assets/clear.png'
import drizzleIcon from '../components/Assets/drizzle.png'
import humidIcon from '../components/Assets/humidity.png'
import rainIcon from '../components/Assets/rain.png'
import windIcon from '../components/Assets/wind.png'
import cloudIcon from '../components/Assets/cloud.png'
import '../components/WeatherApp.css';
const WeatherApp = () => {
  const api_key="6feb964904267582db96e52c599385ba";
  const [wicon,setWicon]=useState(cloudIcon);
  const search= async ()=>{
    const element=document.getElementsByClassName("search");
    if(element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response=await fetch(url);
    let data=await response.json();
    const humid=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-speed");
    const temp=document.getElementsByClassName("weather-temp");
    const loc=document.getElementsByClassName("weather-location");
    humid[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=Math.floor(data.wind.speed) +"km/hr";
    temp[0].innerHTML=Math.floor(data.main.temp)+"°c";
    loc[0].innerHTML=data.name;
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clearIcon);
    }  
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloudIcon);
    } 
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzleIcon);
    } 
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzleIcon);
    } 
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rainIcon);
    } 
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(drizzleIcon);
    } 
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(drizzleIcon);
    } 
  }
  return (
    <div className="container">
         <div className='header'>
          <input type="text" placeholder='Search' className="search" required/>
          <div onClick={()=>search()} className='search-image'>
             <img src={searchIcon} alt=""/>
          </div>
         </div>
         <div className="weather-image">
          <img src={wicon} className='cloud-image' alt=""/>
         </div>
         <div className="weather-temp">24°c</div>
         <div className='weather-location'>London</div>
         <div className="data-container">
            <div className='element'>
              <img src={humidIcon} className='humid-image' alt=""/>
              <div className="data">
              <div className="humidity-percent">65%</div>
              <div className="text">Humidity</div>
              </div>
            </div>
            <div className='element'>
              <img src={windIcon} className='wind-image' alt=""/>
              <div className="data">
              <div className="wind-speed">20km/hr</div>
              <div className="text">Wind speed</div>
              </div>
              
            </div>
         </div>
    </div>
  )
}
export default WeatherApp