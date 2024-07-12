/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d1100d63c6e9b4f1ee5fb13be3c3d2fa";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let json_response = await response.json();
      console.log(json_response);
      let result = {
        city: city,
        temp: json_response.main.temp,
        tempMin: json_response.main.temp_min,
        tempMax: json_response.main.temp_max,
        humidity: json_response.main.humidity,
        feelsLike: json_response.main.feels_like,
        weather: json_response.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exits!</p>}
      </form>
    </div>
  );
}
