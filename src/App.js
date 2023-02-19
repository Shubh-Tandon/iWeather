import './App.css';
import City from './components/City';
import Navbar from './components/Navbar';
import SearchWeather from './components/SearchWeather';
import WeatherPic from './image/weather2.jpg'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <div className=' container myContainer1'>
      <Navbar />


      <SearchWeather />


    </div>
 
    
    </>
  );
}
 
export default App;
