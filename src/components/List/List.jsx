import {
  Grid,
  Typography,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  isLoading,
  elRefs,
  type,
  setType,
  rating,
  setRating,
}) => {
  const Conatainer = styled("div")({
    padding: "25px",
  });
  const LoadingWrapper = styled("div")({
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  }));

  return (
    <Conatainer>
      <Typography variant="h6">
        Restuarents, Hotels &amp; Attractions around you
      </Typography>

      {isLoading ? (
        <LoadingWrapper>
          <CircularProgress size="5rem" />
        </LoadingWrapper>
      ) : (
        <>
          <StyledFormControl variant="standard">
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </StyledFormControl>
          <StyledFormControl variant="standard">
            <InputLabel>Rating</InputLabel>
            <Select
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </StyledFormControl>
          <Grid container spacing={3} sx={{ height: "75vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails refProp={elRefs[i]} place={place} />
              </Grid>
            ))}

            {places.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  {` There are no ${type} in this area!`}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </>
      )}
    </Conatainer>
  );
};

export default List;
