// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
// import { response } from 'express';
// import { response } from 'express'
// import { response } from 'express';
import React, { useEffect, useState,props } from 'react'

export default function City(props) {
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  let responseData = [] ;
  const [articles, setArticles] = useState("")

  
  let API = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputCity}`;
 
   console.log(API);

  const getWetherDetails = (inputCity) => {
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6d70cf5b0msh787a1ebf4670e71p1e0f7djsn97c78a2cfb27',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch(API, options)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
      setData(responseData);
    
        // let temp = responseData.temp;
        // console.log(temp);
        // console.log(articles);
        
      })
      .catch(err => console.error(err));
      }
      
      const checkData = (inpCity)=> {
        console.log("Check")
        return(
          <h1>Hello City </h1>
        )
      }


  const handleSearch =() => {
   let a = setInputCity("Delhi");
   getWetherDetails(a);
}
 

 return (
  <>
  <div className="card ">
     
     <div className="card-body">
        <h2 className="card-title">Delhi</h2>
        <h4> Temperature {data?.temp} </h4>
        <h4> Sunrise {data?.sunrise} </h4>
        <h4> Sunset {data?.sunset} </h4>
        <h4> Feels Like {data?.feels_like} </h4>
     </div>
</div>

<button className="btn btn-primary" onClick={handleSearch}>Get City Data</button>
 </>
 )}




  
  
  
