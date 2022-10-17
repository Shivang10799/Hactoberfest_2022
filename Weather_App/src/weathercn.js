import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";


function WeatherCn(){

    const cn=()=>{
        if(tempStatus==="Sunny"){
            return(
                <FontAwesomeIcon className="fas fa-sun" icon={faSun}/>
            )
             
        }
        else if(tempStatus==="Clouds"){
            return(
                <FontAwesomeIcon className="fas fa-cloud" icon={faCloud}/>
            )
        }
        else if(tempStatus==="Rainy"){
            return(
                <FontAwesomeIcon className="fas fa-cloud-rain" icon={faCloudRain}/>
                )
        }
        else{
            return(
                <FontAwesomeIcon className="fas fa-cloud" icon={faCloud}/>
            )
            
        }
    };
    return(
        <>
        
        </>
    )
}

export default WeatherCn;