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

  return (
    <>
      {cityForecast ? (
        <Container flow>
          <Row className="text-center">
            <Col xs={12} md={6}>
              {cityForecast.list[0].weather[0].description}
            </Col>
            <Col xs={12} md={6}>
              {cityForecast.list[7].weather[0].description}
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} md={6}>
              {cityForecast.list[15].weather[0].description}
            </Col>
            <Col xs={12} md={6}>
              {cityForecast.list[23].weather[0].description}
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
