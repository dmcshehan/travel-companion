import axios from "axios";

export const getPLacesData = async ({ type, bounds }) => {
  const { ne, sw } = bounds;

  try {
    const {
      data: { data },
    } = await axios.request({
      method: "GET",
      url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        currency: "USD",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getWeatherData = async ({ lat, lng }) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: `https://weatherapi-com.p.rapidapi.com/current.json`,
      params: { q: `${lat},${lng}` },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    });
    console.log(data);

    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
