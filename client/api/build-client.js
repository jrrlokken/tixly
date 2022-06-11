import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // server side
    return axios.create({
      baseURL: "http://tixly.com/",
      headers: req.headers,
    });
  } else {
    // client side
    return axios.create({
      baseURL: "/",
    });
  }
};
