import { useEffect, useState, createRef } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getPLacesData, getWeatherData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [whetherData, setwhetherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [elRefs, setElRefs] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (places.length !== 0) {
      const refs = Array(places.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef());

      setElRefs(refs);
    }
  }, [places, elRefs]);

  useEffect(() => {
    if (coordinates && bounds) {
      setIsLoading(true);

      getWeatherData({ lat: coordinates.lat, lng: coordinates.lng }).then(
        (data) => setwhetherData(data)
      );
      getPLacesData({ type, bounds }).then((places) => {
        const correctPlaces = places?.filter(
          (place) => place.name && place.num_reviews
        );
        setPlaces(correctPlaces);
        setIsLoading(false);
      });
    }
  }, [type, coordinates, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPLaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPLaces);
  }, [rating]);

  const scrollToPlaceDetailsItem = (index) => {
    console.log("hello");
    elRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  console.log({ places, type });

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            type={type}
            rating={rating}
            setRating={setRating}
            setType={setType}
            elRefs={elRefs}
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            scrollToPlaceDetailsItem={scrollToPlaceDetailsItem}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            whetherData={whetherData}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
