//import { useState } from "react";
//import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography } from "@mui/material";
//import { Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

/*

const Title = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));



const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


const Input = styled(InputBase)(({ theme }) => ({
  root: {
    color: "inherit",
  },

  input: {
    color: theme.palette.common.white,
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

*/

const Header = ({ setCoordinates }) => {
  /*
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({
      lat,
      lng,
    });
  };

  */

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h5">Travel Companion</Typography>
        <Typography variant="subtitle2">
          Move Around The Map to discover new Places
        </Typography>

        {/* <Box display="flex">
        
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <SearchWrapper>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <Input placeholder="Search..." />
            </SearchWrapper>
          </Autocomplete>
        </Box> */}
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
