import React, {useState, useEffect} from 'react'
import App from '../App'
import City from './City'
import weatherPic from '../image/weather8.jpeg'
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
<div className='myContainer'>
<div className="container p-3">
<input className="form-control my-3 " type="text" onChange={handleChangeInput} placeholder="Enter the City" aria-label="default input example" value={inputCity} style={{width: "50%", margin: "auto"}}/>
<button type="button" className="btn btn-primary" onClick={handleSearch} style={{ margin: "auto", display: "flex", justifyContent: "center" }}>Enter</button>
</div>


<div className="card my-3 col-12 container d-flex d-flex-center" style={{width : "70vw"}} >
  <div className="card-header" style={{display: 'flex', alignItems: 'center', fontWeight: 'bold', size: '2 rem', justifyContent : 'center'}}> 
  {/* {inputCity} */}
  {data?.temp?(inputCity):(<h4 style={{color: 'black', fontSize: '1.75rem'}}>Enter City Name to get the details</h4>)}
  </div>
  <div className='testit col-12'> 
  {data?.temp?(
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
  </ul>):(
    <div className='row '> 
    <div className='col-md-12 col-12 d-flex justify-content-center'>
        <img style={{height: '750px', width: '1065px', display: 'block', margin: '0 0 1rem 1rem'}} src={weatherPic} alt="weather-pic" />
    </div>
    {/* <div className='col-md-5 col-12 d-flex flex-column justify-content-center align-items-center getCityClass'>
      <h1>Please </h1>
      <h1>Enter </h1>
      <h1>the </h1>http://localhost:3000/iWeather
      <h1>City </h1>
      <h1>Name </h1>
      <h1>to </h1>
      <h1>get </h1>
      <h1>the </h1>
      <h1>details </h1>
    </div> */}
    </div>
  )}
   </div>

</div>
</div>

</>
  )

}
