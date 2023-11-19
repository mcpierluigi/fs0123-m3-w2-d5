import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import CityCard from "./components/CityCard";
import CityForecast from "./components/CityForecast";
import "./App.css";

const App = () => {
  //stati che mi servono
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  //key
  const key = "8df771c9677fbe632294ac13f09f1ce4";
  // gestione eventi
  const handleChange = e => {
    setCityName(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`);
      if (response.ok) {
        const data = await response.json();
        console.log("data obtained: ", data);
        setLat(data[0].lat);
        setLon(data[0].lon);
        console.log("setLat() e setLon() avvenuti");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(cityName);
    console.log(lat);
    console.log(lon);
  };

  return (
    <>
      <div className="App">⭐️</div>
      <Form className="py-2 w-90 mx-3" onSubmit={handleSubmit}>
        <Form.Control type="search" placeholder="search city" value={cityName} onChange={handleChange} />
      </Form>
      {/* passaggio di lat e lon come props */}
      <CityCard lat={lat} lon={lon} />
      <CityForecast lat={lat} lon={lon} />
    </>
  );
};

export default App;
