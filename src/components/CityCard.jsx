import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

const CityCard = props => {
  //stato della città
  const [cityObj, setCityObj] = useState("");
  //key
  const key = "8df771c9677fbe632294ac13f09f1ce4";
  //fetch interna
  const fetchCityObj = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${key}&units=metric&lang=it`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data obtained: ", data);
        setCityObj(data);
        console.log("setCityObj() avvenuto");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //compongo facendo dipendere da lat e lon
  useEffect(() => {
    fetchCityObj();
    // eslint-disable-next-line
  }, [props.lat, props.lon]);

  return (
    <>
      {cityObj ? (
        <Container>
          <Row>
            <Col className="city" sm={12}>
              {cityObj.name}
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="tempo" sm={12}>
              {cityObj.main.temp} °C
            </Col>
            <Col sm={12}>{cityObj.weather[0].description} 🔭</Col>
            <Col className="percepiti" sm={12}>
              percepiti: {cityObj.main.feels_like} °C
            </Col>
            <Col sm={12}>temp-max: {cityObj.main.temp_max} °C 🥵</Col>
            <Col sm={12}>temp-min: {cityObj.main.temp_min} °C 🥶</Col>
            <Col sm={12}>pressione: {cityObj.main.pressure} hPa 🌡️</Col>
            <Col sm={12}>umidità: {cityObj.main.humidity}% 💧</Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Alert className="mt-3 text-center" variant="info">
            cerca una città per vederne il clima 😊
          </Alert>
        </Container>
      )}
    </>
  );
};

export default CityCard;
