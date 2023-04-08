import axios from "axios";

const weatherkey = {
  apikey: "fbc81c6a5d9db189a64bd28ef7ec9efb",
}
export async function fetchWeather (city, setError) { 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherkey.apikey}`;
  console.log(url);
  try {
    const response = await axios.get(url); 
    setError("");
    console.log(response.data);
    return response.data; 
  } catch (error) {
  setError("City Not Found!"); 
  return error;
  }
}