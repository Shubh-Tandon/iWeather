import React, {useState, useEffect} from 'react'
import App from '../App'
import City from './City'
// import Navbar from './Navbar';

export default function SearchWeather(props) {
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const [articles, setArticles] = useState("")
  let responseData = []
  let API = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputCity}`;



  const getWetherDetails = (city) => {

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


 const handleChangeInput = (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  getWetherDetails(inputCity)
}




 
return (
<>
<div className="container p-3 ">
<input className="form-control my-3 " type="text" onChange={handleChangeInput} placeholder="Enter the City" aria-label="default input example" value={inputCity} style={{width: "50%", margin: "auto"}}/>
<button type="button" className="btn btn-primary" onClick={handleSearch} style={{ margin: "auto", display: "flex", justifyContent: "center" }}>Enter</button>

<div className="card my-3 container d-flex d-flex-center" style={{width : "70vw"}} >
  <div className="card-header" style={{display: 'flex', height: '3rem', alignItems: 'center', fontWeight: 'bold', size: '2 rem', justifyContent : 'center'}}> 
  {inputCity}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Temperature {(data?.temp)}°C</li>
    <li className="list-group-item">Feels Like {data?.feels_like}°C</li>
    <li className="list-group-item">Humidity {data?.humidity}</li>
    {/* <li className="list-group-item">Sunrise {data?.sunrise}</li>
    <li className="list-group-item">Sunset {data?.sunset}</li> */}
    <li className="list-group-item">Minimum Temp {data?.min_temp}°C</li>
    <li className="list-group-item">Maximum Temp {data?.max_temp}°C</li>
    {/* <li className="list-group-item">Cloud pct {data?.cloud_pct}</li> */}
    <li className="list-group-item">Wind Speed {data?.wind_speed}</li>
    <li className="list-group-item">Wind Degrees {data?.wind_degrees}</li>
  </ul>
</div>
</div>
{/* <div className="container"> */}
{/* <City temp = {data?.temp} /> */}


</>
  )

}
