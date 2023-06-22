import React, {useState} from 'react'

const WeatherDetails = ({weather, onBackClick}) =>{
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
  const timezone = weather.timezone / 3600;
  return (
    <div className="card-2">
    <div className="card-body pt-0">
      <table className="table table-bordered">
        <tr>
          <th width="40%">Maximum Temprature</th>
          <td width="2%">:</td>
          <td className="max-temp">{weather? Math.round(weather.main?.temp_max - 273.15): ''}°C</td>
        </tr>
        <tr>
          <th width="40%">Minimum Temprature</th>
          <td width="2%">:</td>
          <td className="min-temp">{weather? Math.round(weather.main?.temp_min - 273.15): ''}°C</td>
        </tr>
        <tr>
          <th width="40%">Time Zone</th>
          <td width="2%">:</td>
          <td className="time-zone">(GMT {timezone > 0 ? `+${timezone}` : timezone})</td>
        </tr>
        <tr>
          <th width="40%">Sunrise</th>
          <td width="2%">:</td>
          <td className="sunrise">{sunrise}</td>
        </tr>
        <tr>
          <th width="40%">Sunset</th>
          <td width="2%">:</td>
          <td className="sunset">{sunset}</td>
        </tr>
        <tr>
          <th width="40%">lat , lon</th>
          <td width="2%">:</td>
          <td className="latt-long">[{weather? (weather.coord?.lat): '-'} , {weather? (weather.coord?.lon): '-'}]</td>
        </tr> 
      </table>
    <button className="back-btn mt-4" onClick={onBackClick}>Back</button>
    </div>
  </div>
  )
}

const WeatherCard = ({weather}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);   // toggle showDetails state
  };
  const handleBackClick = () => {
    setShowDetails(false);
  };
  return (
    <div className='card'>
      {!showDetails && (
        <div className="weather">
          <h2 className="city">Weather In {weather?(weather.name): "City"} ({weather?(weather.sys.country): "PK"})</h2>
          <h1 className="temp">{weather? Math.round(weather.main?.temp - 273.15): '0'}°C</h1>
          <img src={`https://openweathermap.org/img/w/${weather?(weather.weather[0].icon): "unknown".icon}.png`}  style={{ width: '80px', height: 'auto' }} alt="Icons" />
          <div className="description">{weather? (weather.weather[0].description): "Discription"}</div>
          <div className="humidity">Humidity: {weather? (weather.main?.humidity): '0'}%</div>
          <div className="last">
            <div className="wind">Wind Speed: {weather? (weather.wind?.speed): '0'} km/h</div>
            <button className="detail" onClick={handleDetailsClick}>Detail</button>
            {/* {showDetails && <WeatherDetails weather={weather} />} */}
          </div>
        </div>
      )}
      {showDetails && (
        <WeatherDetails weather={weather} onBackClick={handleBackClick}/>
      )}
    </div>
  )
}
export default WeatherCard;