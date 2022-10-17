import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import DateTime from './date';

function App() {

  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Mumbai");

  //useEffect is to call a component when that component is rendered
  useEffect(
    ()=>{
      const fetchApi=async()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8a60ee3e7e96305b1676d6ff39099afa`;
        const response =await fetch(url);
        //console.log(response);
        const resJson=await response.json();
        setCity(resJson.main);
      };

      fetchApi(); 
    },[search] //[] means that the change is rendered after refreshing the page
  )

  return (
    <div className="App">
      <div className="box">

        <div className="inputData">
            <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event)=>{setSearch(event.target.value)}}
            />
             
        </div> 

       {
         !city?(
           <p className='err'>NO DATA FOUND</p>
         ):(
           <div>

        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>

        <div id="weathercn">
            <FontAwesomeIcon className='fa-sun fas' icon={faSun}/>
        </div>

        <div className="info">
            <h2 className="location"><FontAwesomeIcon className='fa-street-view fas' icon={faStreetView}/>{search}</h2>
            <p id="date"><DateTime/></p>
            <h1 className="temp">{city.temp} C</h1>
            <h3 className="temp_minmax">Min : {city.temp_min} C | Max : {city.temp_max} C</h3>
        </div>

           </div>
         )
       }


        
        
        </div>
    </div>
  );
}

export default App;
