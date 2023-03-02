import axios from "axios";

const getFeatured = async () => {
  const featured = await axios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
  )
  .then(res => res.data.results[Math.floor(Math.random() * res.data.results.length)]) //A propósito, porque el más popular tiene muy fea imagen.
  .catch(err => alert(err.toString()))
  return featured 
};

export default getFeatured;
