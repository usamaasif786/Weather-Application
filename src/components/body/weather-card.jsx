import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    //   <div className="weather-card">
    //     <div className="card-header">
    //       <div>
    //         <p className="weather-city">
    //           {weather? (weather.name + " " + weather.sys.country): "-"}</p>
    //         <p className="weather-description"> 
    //           {weather? (weather.weather[0].description): "-"}</p>
    //       </div>
    //       <img alt={'weather'} className={'weather-icon'} 
    //         src={'icons/${weather? (weather.weather[0].icon): "unknown"}.png'} />
    //     </div>
    //     <div className="card-body">
    //       <h2 className="weather-temp"> 
    //         {weather? Math.round(weather.main?.temp - 273.15): ''}°C</h2>
    //     <div className="weather-details"> 
    //       <div className="parameters">
    //         <span className="param-label">Details</span>
    //       </div>
    //       <div className="parameters">
    //         <span className='param-label'>Feels Like:</span> 
    //         <span className='param-val'>
    //           {weather? (weather.main?. feels_like - 273.15).toFixed(2): '-'}°C
    //         </span>
    //       </div>
    //       <div className="parameters">
    //         <span className='param-label'>Humidity: </span> 
    //         <span className='param-val'>
    //           {weather? (weather.main?.humidity): '-'} %</span>
    //       </div>
    //       <div className="parameters">
    //         <span className='param-label'>Pressure: </span>
    //         <span className='param-val'> 
    //           {weather? (weather.main?.pressure): '-'} hPs</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='card'>
      <div class="weather">
        <h2 class="city">Weather In {weather?(weather.name): "-"} ({weather?(weather.sys.country): "-"})</h2>
        <h1 class="temp">{weather? Math.round(weather.main?.temp - 273.15): ''}°C</h1>
        <img src={`https://openweathermap.org/img/w/${weather?(weather.weather[0].icon): "unknown".icon}.png`} alt="Icons" />
        <div class="description">{weather? (weather.weather[0].description): "-"}</div>
        <div class="humidity">Humidity: {weather? (weather.main?.humidity): '-'}%</div>
        <div class="last">
          <div class="wind">Wind Speed: {weather? (weather.wind?.speed): '-'} km/h</div>
          <button class="detail">Detail</button>
        </div>
      </div>
    </div>
  )
}
export default WeatherCard;