import axios from "axios";

const getPopular = async () => {
  const popular = await axios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  )
  .then(res => res.data.results)
  .catch(err => alert(err.toString()))
  return popular 
};

export default getPopular;
