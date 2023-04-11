// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Spinner } from "react-bootstrap";

// const Home = props => {
//   //stati che mi servono
//   const [lat, setLat] = useState(null);
//   const [lon, setLon] = useState(null);
//   const key = "8df771c9677fbe632294ac13f09f1ce4";

//   const fetchLatLon = async () => {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`);
//       if (response.ok) {
//         const data = await response.json();
//         console.log("data obtained: ", data);
//         setLat(data[0].lat);
//         setLon(data[0].lon);
//         console.log("setLat() e setLon() avvenuti");
//         console.log(lat);
//         console.log(lon);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchLatLon();
//   }, []);

//   return (
//     <div>Hello World</div>
//     // <>
//     //   {cityObj ? (
//     //     <Container>
//     //       <Row>
//     //         <Col>{cityObj.main}</Col>
//     //         <Col>{cityObj.description}</Col>
//     //         {/* <Col>{cityObj.wind.speed}</Col> */}
//     //       </Row>
//     //     </Container>
//     //   ) : (
//     //     <Spinner variant="success" animation="grow" />
//     //   )}
//     // </>
//   );
// };

// export default Home;

//key : 8df771c9677fbe632294ac13f09f1ce4
//https://api.openweathermap.org/data/2.5/weather?lat=43.2128473&lon=-75.4557304&appid=8df771c9677fbe632294ac13f09f1ce4
