import axios from "axios";
const UPLOAD_API_KEY = import.meta.env.VITE_UPLOAD_API_KEY;

export const uploadNewMovie = (movie) => {
  const body = new FormData();
  body.append("UPLOADCARE_PUB_KEY", UPLOAD_API_KEY);
  body.append("file", movie);

  return axios
    .post("https://upload.uploadcare.com/base/", body, {
      headers: {
        contentType: "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
