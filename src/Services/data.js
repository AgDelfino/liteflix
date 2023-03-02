import axios from "axios";

const getData = async () => {
  const apiData = await axios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  ).then(res => res.data.results)
  console.log(apiData)
  return apiData
    
};

export default getData;
