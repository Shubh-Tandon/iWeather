import './App.css';
import City from './components/City';
import Navbar from './components/Navbar';
import SearchWeather from './components/SearchWeather';
import WeatherPic from './image/weather3.jpeg'


function App() {
  return (
    <>
    <div className=' myContainer1'>
    
      <Navbar />
      <SearchWeather />
              
  {/* <City /> */}

    </div>
 
    
    </>
  );
}
 
export default App;
