
import {useState} from 'react';
import {fetchWeather } from '../api/api'
import WeatherCard from '../body/weather-card';
import SearchIcon from '@mui/icons-material/Search';

  function Weather() {
    const [city, setCity] = useState(''); 
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')
    
    const handleChange = (event) => {
      setCity (event.target.value);
    };
 
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const weather = await fetchWeather (city, setError); 
        setWeather (weather);
      } catch (error) {
        setError("City not found");
      }
    };
    return (
      <div className="App">
        <form onSubmit= {handleSubmit} className='card search'>
          <h1 className='app_heading' >Weather App</h1> 
          <div className='d-flex justify-content-between mt-4'>
            <input
              value={city}
              onChange={handleChange}
              class="search-bar"
              type="text"
              placeholder="Search by Location"
            />
            <button class="search-btn" type="submit" onChange={handleChange}><SearchIcon/></button>
          </div>
        </form>
        {error? (
          <p className='error'>{error}</p>
        ): (
          <WeatherCard weather={weather} /> )}
      </div>
      );
};
export default Weather;