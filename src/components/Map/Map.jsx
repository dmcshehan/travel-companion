import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

import { styled } from "@mui/material/styles";

import mapStyles from "./mapStyles";

const MapContainer = styled("div")({
  height: "90vh",
  width: "100%",
});

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  scrollToPlaceDetailsItem,
  whetherData,
}) => {
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={({ center, bounds: { ne, sw } }) => {
          setCoordinates({
            lat: center.lat,
            lng: center.lng,
          });

          setBounds({ ne, sw });
        }}
      >
        {places?.map((place, index) => (
          <div
            onClick={() => {
              scrollToPlaceDetailsItem(index);
            }}
            key={index}
            lat={+place.latitude}
            lng={+place.longitude}
          >
            <LocationOnOutlined
              color="primary"
              fontSize="large"
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              })}
            />
            <Paper
              elevation={3}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
                cursor: "pointer",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: 100,
              })}
            >
              <Typography variant="subtitle2" gutterBottom>
                {place.name}
              </Typography>
              <img
                sx={{ cursor: "pointer" }}
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
                alt={place.name}
              />
              <Rating
                name="read-only"
                size="small"
                value={Number(place.rating)}
                readOnly
              />
            </Paper>
          </div>
        ))}
        <div lat={whetherData?.location?.lat} lng={whetherData?.location?.lon}>
          <img
            height={64}
            src={whetherData?.current?.condition?.icon}
            alt={whetherData?.current?.condition?.text}
          />
        </div>
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
