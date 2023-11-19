import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CityForecast = props => {
  //stato della città
  const [cityForecast, setCityForecast] = useState("");
  //key
  const key = "8df771c9677fbe632294ac13f09f1ce4";

  //fetch interna
  const fetchCityForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${key}&units=metric&lang=it`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("forecast: ", data);
        setCityForecast(data);
        console.log("setCityForecast() avvenuto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //compongo facendo dipendere da lat e lon
  useEffect(() => {
    fetchCityForecast();
    // eslint-disable-next-line
  }, [props.lat, props.lon]);

  // console.log(cityForecast.list[7].main.temp);
  return (
    <>
      {cityForecast ? (
        <Container className="forecast mb-3">
          <Row className="text-center mb-2 gap-2">
            <Col xs={12} className="forecast-day">
              {new Date(cityForecast.list[10].dt * 1000).toLocaleDateString()}
              <br />
              {cityForecast.list[10].weather[0].description}
              <br />
              temperatura: {cityForecast.list[10].main.temp}°
              <br />
              umidità: {cityForecast.list[10].main.humidity}%
            </Col>
            <Col xs={12} className="forecast-day">
              {new Date(cityForecast.list[18].dt * 1000).toLocaleDateString()}
              <br />
              {cityForecast.list[18].weather[0].description}
              <br />
              temperatura: {cityForecast.list[18].main.temp}°
              <br />
              umidità: {cityForecast.list[18].main.humidity}%
            </Col>
          </Row>
          <Row className="text-center gap-2">
            <Col xs={12} className="forecast-day">
              {new Date(cityForecast.list[26].dt * 1000).toLocaleDateString()}
              <br />
              {cityForecast.list[26].weather[0].description}
              <br />
              temperatura: {cityForecast.list[26].main.temp}°
              <br />
              umidità: {cityForecast.list[26].main.humidity}%
            </Col>
            <Col xs={12} className="forecast-day">
              {new Date(cityForecast.list[34].dt * 1000).toLocaleDateString()}
              <br />
              {cityForecast.list[34].weather[0].description}
              <br />
              temperatura: {cityForecast.list[34].main.temp}°
              <br />
              umidità: {cityForecast.list[34].main.humidity}%
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default CityForecast;
